"""Sanity-check the site before deploying.

    python check.py

Verifies: unclosed tags, broken internal links, unresolved {{PLACEHOLDERS}},
missing alt text / image dimensions, and nav consistency across pages.
"""
import pathlib, re, sys
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).parent
problems = []

VOID = {'meta', 'link', 'img', 'br', 'hr', 'input', 'source', 'path', 'circle', 'rect',
        'ellipse', 'line', 'polygon', 'polyline', 'use', 'stop', 'area', 'col', 'embed'}


class Parser(HTMLParser):
    def __init__(self, page):
        super().__init__()
        self.page, self.stack, self.imgs, self.refs = page, [], [], []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag not in VOID:
            self.stack.append((tag, self.getpos()[0]))
        if tag == 'img':
            self.imgs.append((a.get('src'), a.get('alt'), a.get('width'), self.getpos()[0]))
        for k in ('href', 'src'):
            if k in a:
                self.refs.append((a[k], self.getpos()[0]))

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if self.stack and self.stack[-1][0] == tag:
            self.stack.pop()
        elif any(t == tag for t, _ in self.stack):
            while self.stack and self.stack[-1][0] != tag:
                t, l = self.stack.pop()
                problems.append(f"{self.page}: <{t}> opened line {l} never closed")
            if self.stack:
                self.stack.pop()


pages = sorted(ROOT.glob("*.html"))
for pg in pages:
    p = Parser(pg.name)
    p.feed(pg.read_text(encoding="utf-8"))

    for t, l in p.stack:
        problems.append(f"{pg.name}: <{t}> opened line {l} never closed")

    for src, alt, w, line in p.imgs:
        if not (alt or "").strip():
            problems.append(f"{pg.name}:{line} <img {src}> missing or empty alt")
        if w is None:
            problems.append(f"{pg.name}:{line} <img {src}> missing width/height (causes layout shift)")

    for ref, line in p.refs:
        if ref.startswith(('http', 'mailto:', 'tel:', '#', 'data:')):
            continue
        if '{{' in ref:
            problems.append(f"{pg.name}:{line} unresolved placeholder -> {ref}")
        elif not (ROOT / ref.split('#')[0]).exists():
            problems.append(f"{pg.name}:{line} broken link -> {ref}")

navs = {}
for pg in pages:
    m = re.search(r'<div class="nav-links">(.*?)</div>', pg.read_text(encoding="utf-8"), re.S)
    if not m:
        problems.append(f"{pg.name}: no nav found")
        continue
    navs[pg.name] = re.findall(r'href="([^"]+)"', m.group(1))
    active = re.findall(r'<a href="([^"]+)" class="active">', m.group(1))
    if active != [pg.name]:
        problems.append(f"{pg.name}: nav active is {active}, expected ['{pg.name}']")

if 'index.html' in navs:
    for name, links in navs.items():
        if links != navs['index.html']:
            problems.append(f"{name}: nav order differs from index.html")

print(f"checked {len(pages)} pages")
if problems:
    print(f"\n{len(problems)} issue(s):")
    for x in problems:
        print("  -", x)
    sys.exit(1)
print("no issues found")
