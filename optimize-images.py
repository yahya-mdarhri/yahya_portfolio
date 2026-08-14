# One-off: optimize photos, generate og-image.png + apple-touch-icon.png.
import pathlib, shutil
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).parent
BACKUP = ROOT / "_originals"

SLATE   = (19, 27, 36)
SLATE2  = (28, 40, 51)
LINE    = (43, 55, 66)
TEAL    = (56, 201, 167)
SAFFRON = (206, 145, 38)
PAPER   = (243, 247, 249)
MUTED   = (154, 167, 177)

FONTDIR = pathlib.Path("C:/Windows/Fonts")


def font(names, size):
    for n in names:
        p = FONTDIR / n
        if p.exists():
            try:
                return ImageFont.truetype(str(p), size)
            except OSError:
                pass
    return ImageFont.load_default()


BOLD = ["segoeuib.ttf", "arialbd.ttf", "calibrib.ttf"]
SEMI = ["seguisb.ttf", "segoeui.ttf", "arial.ttf"]
REG  = ["segoeui.ttf", "arial.ttf", "calibri.ttf"]
MONO = ["consola.ttf", "cour.ttf"]

# ---------------------------------------------------------------- 1. optimize photos
BACKUP.mkdir(exist_ok=True)
total_before = total_after = 0
for src in sorted(ROOT.glob("*.jpeg")):
    bak = BACKUP / src.name
    if not bak.exists():
        shutil.copy2(src, bak)

    # Measure against the pristine backup, not the current file, so re-running is idempotent.
    before = bak.stat().st_size
    total_before += before

    im = Image.open(bak).convert("RGB")
    # Nothing on the site displays a photo wider than ~560 CSS px, so 1100px
    # covers 2x retina with room to spare.
    im.thumbnail((1100, 1100), Image.LANCZOS)
    im.save(src, "JPEG", quality=80, optimize=True, progressive=True)

    if src.stat().st_size >= before:                   # never make a file bigger
        shutil.copy2(bak, src)

    after = src.stat().st_size
    total_after += after
    print(f"  {src.name}: {before/1024:6.0f} KB -> {after/1024:6.0f} KB  ({im.width}x{im.height})")

print(f"photos: {total_before/1024:.0f} KB -> {total_after/1024:.0f} KB "
      f"({100*(1-total_after/max(total_before,1)):.0f}% smaller)\n")

# ---------------------------------------------------------------- 2. og-image.png
W, H = 1200, 630
og = Image.new("RGB", (W, H), SLATE)
d = ImageDraw.Draw(og)

# grid texture
for x in range(0, W, 38):
    d.line([(x, 0), (x, H)], fill=LINE, width=1)
for y in range(0, H, 38):
    d.line([(0, y), (W, y)], fill=LINE, width=1)

# fade the grid out toward the right so text stays crisp
fade = Image.new("L", (W, H), 0)
fd = ImageDraw.Draw(fade)
for x in range(W):
    fd.line([(x, 0), (x, H)], fill=int(210 * (x / W) ** 1.4))
og = Image.composite(Image.new("RGB", (W, H), SLATE), og, fade)
d = ImageDraw.Draw(og)

# Circular portrait, right side. Source is 2.jpeg (clearest face of the set); it is only
# 570x426, so a ~300px circle keeps it near 1:1 instead of upscaling a full-bleed panel.
photo_src = ROOT / "2.jpeg"
if photo_src.exists():
    ph = Image.open(photo_src).convert("RGB")
    D = 320
    cx, cy = int(ph.width * 0.575), int(ph.height * 0.42)   # his face
    half = int(min(ph.width, ph.height) * 0.40)
    box = (max(0, cx - half), max(0, cy - half),
           min(ph.width, cx + half), min(ph.height, cy + half))
    face = ph.crop(box).resize((D, D), Image.LANCZOS)

    circle = Image.new("L", (D * 4, D * 4), 0)             # supersample for a clean edge
    ImageDraw.Draw(circle).ellipse([0, 0, D * 4, D * 4], fill=255)
    circle = circle.resize((D, D), Image.LANCZOS)

    px, py = W - 300 - D // 2, (H - D) // 2
    ring = 9
    d.ellipse([px - ring, py - ring, px + D + ring, py + D + ring], fill=SLATE2)
    d.ellipse([px - 3, py - 3, px + D + 3, py + D + 3], outline=TEAL, width=3)
    og.paste(face, (px, py), circle)
    d = ImageDraw.Draw(og)

# accent bar
d.rectangle([0, 0, 10, H], fill=TEAL)

x0, y = 74, 92
d.text((x0, y), "DATA  ·  PROJECTS  ·  INNOVATION", font=font(MONO, 21), fill=TEAL)
y += 62
d.text((x0, y), "Yahya", font=font(BOLD, 92), fill=PAPER)
y += 96
d.text((x0, y), "Mdarhri", font=font(BOLD, 92), fill=SAFFRON)
y += 124
d.text((x0, y), "Data Project Manager  ·  Data Scientist", font=font(SEMI, 33), fill=PAPER)
y += 48
d.text((x0, y), "PMP® Certified  ·  Rabat, Morocco", font=font(REG, 29), fill=MUTED)

y += 74
d.line([(x0, y), (x0 + 78, y)], fill=SAFFRON, width=3)
y += 26
d.text((x0, y), "Turning scattered data into decisions.", font=font(REG, 26), fill=MUTED)

og.save(ROOT / "og-image.jpg", "JPEG", quality=88, optimize=True, progressive=True)
print(f"og-image.jpg: {(ROOT/'og-image.jpg').stat().st_size/1024:.0f} KB ({W}x{H})")
(ROOT / "og-image.png").unlink(missing_ok=True)

# ---------------------------------------------------------------- 3. apple-touch-icon.png
S = 180
icon = Image.new("RGB", (S, S), (16, 113, 90))
di = ImageDraw.Draw(icon)
di.rectangle([0, 0, S, 8], fill=SAFFRON)
f = font(BOLD, 78)
tb = di.textbbox((0, 0), "YM", font=f)
di.text(((S - (tb[2] - tb[0])) / 2 - tb[0], (S - (tb[3] - tb[1])) / 2 - tb[1] - 4),
        "YM", font=f, fill=(246, 241, 231))
icon.save(ROOT / "apple-touch-icon.png", "PNG", optimize=True)
print(f"apple-touch-icon.png: {(ROOT/'apple-touch-icon.png').stat().st_size/1024:.0f} KB ({S}x{S})")
