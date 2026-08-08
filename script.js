/* ---- mobile nav toggle ---- */
(function(){
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.nav-burger');
  if(burger && nav){
    burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
  }
})();

/* ---- CV language dropdown ---- */
(function(){
  var dd = document.querySelector('.cv-dd');
  if(!dd) return;
  var btn = dd.querySelector('.cv-btn');
  btn.addEventListener('click', function(e){ e.stopPropagation(); dd.classList.toggle('open'); });
  document.addEventListener('click', function(e){ if(!dd.contains(e.target)) dd.classList.remove('open'); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') dd.classList.remove('open'); });
})();

/* ---- signature: waveform -> notation ---- */
(function(){
  var svg = document.getElementById('sigwave');
  if(!svg) return;
  var NS = 'http://www.w3.org/2000/svg';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 5 staff lines on the right half (the "partition")
  var staffY = [70, 92, 114, 136, 158];
  staffY.forEach(function(y){
    var l = document.createElementNS(NS,'line');
    l.setAttribute('x1', 250); l.setAttribute('x2', 420);
    l.setAttribute('y1', y);   l.setAttribute('y2', y);
    l.setAttribute('class','staff-line');
    svg.appendChild(l);
  });

  // waveform bars on the left (the "oud audio") — pluck envelope
  var env = [0.30,0.55,0.85,1.0,0.78,0.62,0.9,0.7,0.5,0.66,0.82,0.6,0.44,0.7,0.55,0.38,0.6,0.48,0.34,0.5,0.4,0.28,0.42,0.3];
  var x = 24, bw = 5, gap = 4.6, baseY = 200, maxH = 150;
  env.forEach(function(a, i){
    var h = Math.max(10, a*maxH);
    var r = document.createElementNS(NS,'rect');
    r.setAttribute('x', x); r.setAttribute('width', bw);
    r.setAttribute('y', baseY - h); r.setAttribute('height', h);
    r.setAttribute('rx', 2.5);
    r.setAttribute('class','wf-bar');
    if(!reduce) r.style.animationDelay = (i*0.05).toFixed(2) + 's';
    svg.appendChild(r);
    x += bw + gap;
  });

  // arrow: audio -> notation
  var arrow = document.createElementNS(NS,'path');
  arrow.setAttribute('d','M236 120 h12 m-5 -5 l5 5 l-5 5');
  arrow.setAttribute('stroke','var(--faint)');
  arrow.setAttribute('stroke-width','1.6');
  arrow.setAttribute('fill','none');
  arrow.setAttribute('stroke-linecap','round');
  arrow.setAttribute('stroke-linejoin','round');
  svg.appendChild(arrow);

  // notes on the staff (the resolved "partition")
  var notes = [ [268,136],[290,114],[315,92],[338,114],[366,70],[396,136] ];
  notes.forEach(function(p, i){
    var stem = document.createElementNS(NS,'line');
    stem.setAttribute('x1', p[0]+6.5); stem.setAttribute('x2', p[0]+6.5);
    stem.setAttribute('y1', p[1]);     stem.setAttribute('y2', p[1]-26);
    stem.setAttribute('class','note-stem');
    if(!reduce) stem.style.animationDelay = (1.1 + i*0.16).toFixed(2) + 's';
    svg.appendChild(stem);

    var n = document.createElementNS(NS,'ellipse');
    n.setAttribute('cx', p[0]); n.setAttribute('cy', p[1]);
    n.setAttribute('rx', 6.6); n.setAttribute('ry', 5);
    n.setAttribute('transform', 'rotate(-20 '+p[0]+' '+p[1]+')');
    n.setAttribute('class','note');
    if(!reduce) n.style.animationDelay = (1.1 + i*0.16).toFixed(2) + 's';
    svg.appendChild(n);
  });
})();

/* ---- scroll reveals ---- */
(function(){
  var items = document.querySelectorAll('.t-item, .reveal');
  if(!items.length) return;
  if(!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    items.forEach(function(i){ i.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold:.15 });
  items.forEach(function(i){ io.observe(i); });
})();
