import './libs/tabs';

const menu = document.querySelector('.menu');
const menuOpenBtn = document.querySelector('.open-menu-btn');
const menuBg = document.querySelector('.menu__bg');



if (menu) {
  menuOpenBtn.addEventListener('click', ev => {
    menu.classList.add('_visible');
    document.body.classList.add('no-scroll');
  });

  menuBg.addEventListener('click', ev => {
    menu.classList.remove('_visible');
    document.body.classList.remove('no-scroll');
  });
}

if (document.querySelector('.products')) {
  const products = tabs({
    el: ".products",
    tabNavigationLinks: '.products__nav-btn',
    tabContentContainers: '.products__content'
  });
  products.init();
}