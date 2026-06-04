// Leather Zone — minimal interactivity
(function () {
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
