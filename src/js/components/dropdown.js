const menuBtns = document.querySelectorAll('.nav-btn');
const drops = document.querySelectorAll('.dropdown');

menuBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget;
    let drop = currentBtn.closest('.nav__item').querySelector('.dropdown');

    drop.classList.toggle('dropdown--active');
    currentBtn.classList.toggle('nav-btn--active');

    menuBtns.forEach(el => {
      if (el !== currentBtn) {
        el.classList.remove('nav-btn--active');
      }
    });

    drops.forEach(el => {
      if (el !== drop) {
        el.classList.remove('dropdown--active');
      }
    });
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav')) {
    menuBtns.forEach(el => {
      el.classList.remove('nav-btn--active');
    });

    drops.forEach(el => {
      el.classList.remove('dropdown--active');
    });
  }
});
