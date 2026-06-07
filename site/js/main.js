// Leather Zone — minimal interactivity
(function () {
  document.documentElement.classList.add('js');

  // Sticky header: transparent over hero, white background once scrolled
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu toggle
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () { menu.classList.add('open'); });
    menu.addEventListener('click', function (e) {
      if (e.target === menu || e.target.closest('.mobile-menu__close') || e.target.tagName === 'A') {
        menu.classList.remove('open');
      }
    });
  }

  // Projects horizontal gallery — "next" button scrolls one card width
  var track = document.getElementById('projTrack');
  var next = document.getElementById('projNext');
  if (track && next) {
    var animateScroll = function (el, to, ms) {
      var start = el.scrollLeft, change = to - start, t0 = null;
      var max = el.scrollWidth - el.clientWidth;
      to = Math.max(0, Math.min(to, max));
      change = to - start;
      var ease = function (p) { return p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p; };
      var step = function (ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min(1, (ts - t0) / ms);
        el.scrollLeft = start + change * ease(p);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    next.addEventListener('click', function () {
      var card = track.querySelector('.proj-card, .proj-intro');
      var step = card ? Math.round(card.getBoundingClientRect().width) + 28 : track.clientWidth * 0.8;
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      animateScroll(track, atEnd ? 0 : track.scrollLeft + step, 450);
    });
  }

  // Reveal-on-scroll
  var reveals = document.querySelectorAll('.reveal');
  var revealAll = function () { reveals.forEach(function (el) { el.classList.add('in'); }); };
  if (reveals.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
    // Safety net: never leave content hidden if IO fails to fire
    setTimeout(revealAll, 2500);
  } else {
    revealAll();
  }

  // Contact form (demo — no backend)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button');
      var original = btn.textContent;
      btn.textContent = 'Thanks — we will reply today';
      btn.disabled = true;
      setTimeout(function () { btn.textContent = original; btn.disabled = false; form.reset(); }, 3500);
    });
  }
})();
