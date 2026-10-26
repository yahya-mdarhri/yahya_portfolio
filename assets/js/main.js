(function () {
  'use strict';

  var I18N = window.I18N || { en: {} };
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  /* ------------------------------------------------------------------
     Language (EN is the HTML itself; FR / AR come from i18n.js)
     ------------------------------------------------------------------ */
  var LANGS = ['en', 'fr', 'ar'];
  var textNodes = $$('[data-i18n]');
  var altNodes = $$('[data-i18n-alt]');
  textNodes.forEach(function (el) { I18N.en[el.dataset.i18n] = I18N.en[el.dataset.i18n] || el.innerHTML; });
  altNodes.forEach(function (el) { el.dataset.altEn = el.alt; });
  var lang = 'en';

  function t(key) {
    var d = I18N[lang] || {};
    return d[key] !== undefined ? d[key] : I18N.en[key];
  }

  function setLang(next, persist) {
    if (LANGS.indexOf(next) < 0) next = 'en';
    lang = next;
    root.lang = next;
    root.dir = next === 'ar' ? 'rtl' : 'ltr';
    textNodes.forEach(function (el) {
      var v = t(el.dataset.i18n);
      if (v !== undefined && el.innerHTML !== v) el.innerHTML = v;
    });
    altNodes.forEach(function (el) {
      var d = I18N[lang] || {};
      el.alt = lang === 'en' ? el.dataset.altEn : (d[el.dataset.i18nAlt] || el.dataset.altEn);
      if (el.parentNode.classList.contains('gallery__open')) el.parentNode.setAttribute('aria-label', el.alt);
    });
    $$('[data-i18n-label]').forEach(function (el) {
      if (!el.dataset.labelEn) el.dataset.labelEn = el.getAttribute('aria-label');
      var d = I18N[lang] || {};
      el.setAttribute('aria-label', lang === 'en' ? el.dataset.labelEn : (d[el.dataset.i18nLabel] || el.dataset.labelEn));
    });
    document.title = t('meta.title');
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    if (persist) store('lang', lang);
    renderStage(false);
    if (packet) packet.reset();
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS.indexOf(q) > -1) return q;
    var saved = store('lang');
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.languages || [navigator.language || 'en']).map(function (l) { return String(l).slice(0, 2); });
    for (var i = 0; i < nav.length; i++) if (LANGS.indexOf(nav[i]) > -1) return nav[i];
    return 'en';
  }

  $$('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang, true); });
  });

  /* ------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------ */
  var burger = $('#burger');
  var links = $('#nav-links');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  $$('a', links).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* Active section in nav */
  var navMap = {};
  $$('.nav__links a[href^="#"]').forEach(function (a) { navMap[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = navMap[en.target.id];
        if (a && en.isIntersecting) {
          Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove('is-active'); });
          a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(navMap).forEach(function (id) { var s = document.getElementById(id); if (s) navIO.observe(s); });
  }

  /* ------------------------------------------------------------------
     The Chain: five stages, auto-cycling until one is pinned
     ------------------------------------------------------------------ */
  var stageButtons = $$('.stage');
  var sel = 1;
  var pinned = false;

  function renderStage(animate) {
    var name = t('stage.' + sel + '.name');
    stageButtons.forEach(function (b, i) { b.setAttribute('aria-pressed', String(i === sel)); });
    $('#stage-n').textContent = sel + 1;
    $('#stage-upper').textContent = lang === 'ar' ? name : name.toUpperCase();
    $('#stage-mode').textContent = t(pinned ? 'chain.pinned' : 'chain.auto');
    var sentence = $('#stage-sentence');
    sentence.textContent = t('stage.' + sel + '.sentence');
    if (animate && !reduceMotion) {
      sentence.classList.remove('is-swap');
      void sentence.offsetWidth;
      sentence.classList.add('is-swap');
    }
  }

  stageButtons.forEach(function (b, i) {
    b.addEventListener('click', function () { sel = i; pinned = true; renderStage(true); });
  });

  var chainVisible = false;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { chainVisible = en[0].isIntersecting; }).observe($('.chain'));
  }
  if (!reduceMotion) {
    setInterval(function () {
      if (pinned || !chainVisible || document.hidden) return;
      sel = (sel + 1) % stageButtons.length;
      renderStage(true);
    }, 4200);
  }

  /* ------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------ */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var revIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); revIO.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { revIO.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ------------------------------------------------------------------
     Oud string: a plucked, decaying standing wave
     ------------------------------------------------------------------ */
  var stringPath = $('#string-path');
  if (stringPath && !reduceMotion) {
    var stringOn = false, stringRaf = 0;
    var tickString = function (now) {
      var s = now / 1000;
      var amp = 7 * (0.7 + 0.3 * Math.sin(s * 0.8));
      var d = '';
      for (var i = 0; i <= 80; i++) {
        var y = i / 80;
        var x = 20.5 + amp * (Math.sin(Math.PI * y) * Math.sin(s * 9) + 0.35 * Math.sin(3 * Math.PI * y) * Math.sin(s * 23));
        d += (i ? 'L' : 'M') + x.toFixed(2) + ' ' + (y * 1000).toFixed(1);
      }
      stringPath.setAttribute('d', d);
      stringRaf = stringOn ? requestAnimationFrame(tickString) : 0;
    };
    new IntersectionObserver(function (en) {
      stringOn = en[0].isIntersecting;
      if (stringOn && !stringRaf) stringRaf = requestAnimationFrame(tickString);
    }).observe($('#oud'));
  }

  /* ------------------------------------------------------------------
     Data packet: travels the rail from SOURCE to END, splits into one
     of the three UIR tracks per run, and lights each node it passes.
     Desktop only (the split/merge diagram exists only there).
     ------------------------------------------------------------------ */
  var packet = null;
  var page = $('.page');
  var dot = $('#packet');
  var desktop = window.matchMedia('(min-width: 1000px)');

  if (dot && !reduceMotion) {
    packet = (function () {
      var path = null, t0 = 0, loop = 0, raf = 0;
      var SPEED = 620, PAUSE = 1400;

      function center(el, pr) {
        var r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2 - pr.left, y: r.top + r.height / 2 - pr.top };
      }

      function measure() {
        var pr = page.getBoundingClientRect();
        var q = function (s) { return page.querySelector(s); };
        var st = q('[data-wp="start"]'), sp = q('[data-wp="split"]'), mg = q('[data-wp="merge"]'), en = q('[data-wp="end"]');
        var tracks = $$('[data-track]', page);
        if (!st || !sp || !mg || !en || !tracks.length) return null;
        var S = center(st, pr), P = center(sp, pr), M = center(mg, pr), E = center(en, pr);
        var Tr = center(tracks[loop % tracks.length], pr);
        var pts = [S, { x: S.x, y: P.y }, { x: Tr.x, y: P.y }, { x: Tr.x, y: M.y }, { x: S.x, y: M.y }, { x: S.x, y: E.y }];
        var segs = [], L = 0;
        for (var i = 1; i < pts.length; i++) {
          var a = pts[i - 1], b = pts[i], l = Math.hypot(b.x - a.x, b.y - a.y);
          segs.push({ a: a, b: b, l: l, s: L });
          L += l;
        }
        var nodes = $$('[data-node],[data-wp]', page).map(function (el) {
          var c = center(el, pr);
          return { el: el, x: c.x, y: c.y, lit: 0 };
        });
        return { segs: segs, L: L, nodes: nodes };
      }

      function unlight(n) { n.el.style.background = ''; n.el.style.boxShadow = ''; n.lit = 0; }

      function tick(now) {
        if (!path) { path = measure(); t0 = now; }
        if (path) {
          var d = (now - t0) / 1000 * SPEED;
          if (d > path.L + SPEED * PAUSE / 1000) {
            loop++;
            path.nodes.forEach(unlight);
            path = null;
          } else {
            var dd = Math.min(d, path.L);
            var sg = path.segs.find(function (s) { return dd <= s.s + s.l; }) || path.segs[path.segs.length - 1];
            var u = sg.l ? (dd - sg.s) / sg.l : 1;
            var x = sg.a.x + (sg.b.x - sg.a.x) * u, y = sg.a.y + (sg.b.y - sg.a.y) * u;
            dot.style.transform = 'translate(' + (x - 4) + 'px,' + (y - 4) + 'px)';
            dot.style.opacity = d > path.L ? '0' : '1';
            path.nodes.forEach(function (n) {
              if (Math.hypot(n.x - x, n.y - y) < 12) {
                n.lit = now;
                n.el.style.boxShadow = '0 0 0 7px rgba(31,79,196,.2)';
                if (n.el.hasAttribute('data-node')) n.el.style.background = '#1f4fc4';
              } else if (n.lit && now - n.lit > 900) {
                unlight(n);
              }
            });
          }
        }
        raf = requestAnimationFrame(tick);
      }

      function start() { if (!raf && desktop.matches) raf = requestAnimationFrame(tick); }
      function stop() {
        cancelAnimationFrame(raf); raf = 0;
        dot.style.opacity = '0';
        if (path) path.nodes.forEach(unlight);
        path = null;
      }
      function reset() { if (path) path.nodes.forEach(unlight); path = null; }

      var onMQ = function () { if (desktop.matches) start(); else stop(); };
      if (desktop.addEventListener) desktop.addEventListener('change', onMQ); else desktop.addListener(onMQ);
      var rt;
      window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(reset, 150); });
      window.addEventListener('load', function () { reset(); start(); });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(reset);
      return { start: start, reset: reset };
    })();
  }

  /* Gallery: click a photo to enlarge it */
  var pdlg = $('#photo-dialog');
  if (pdlg && typeof pdlg.showModal === 'function') {
    $$('.gallery__open').forEach(function (b) {
      b.addEventListener('click', function () {
        var img = $('img', b);
        $('#photo-dialog-img').src = img.currentSrc || img.src;
        $('#photo-dialog-img').alt = img.alt;
        $('#photo-dialog-cap').textContent = $('figcaption', b.parentNode).textContent;
        pdlg.showModal();
      });
    });
    pdlg.addEventListener('click', function (e) { if (e.target === pdlg) pdlg.close(); });
  }

  /* Oud video: hide the frame labels while it plays */
  var oudVideo = $('#oud-video');
  if (oudVideo) {
    var studio = oudVideo.closest('.studio');
    oudVideo.addEventListener('play', function () { studio.classList.add('is-playing'); });
    oudVideo.addEventListener('pause', function () { studio.classList.remove('is-playing'); });
    oudVideo.addEventListener('ended', function () { studio.classList.remove('is-playing'); });
  }

  var year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  setLang(initialLang(), false);
  if (packet && document.readyState === 'complete') packet.start();
})();
