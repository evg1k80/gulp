import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper';

const mainSlider = document.querySelector('.hero__body');
const testSlider = document.querySelector('.test__test');


if (mainSlider) {
  new Swiper(mainSlider, {
    // Подключаем модули слайдера
    // для конкретного случая
    modules: [Navigation, Pagination],

    // effect: 'fade',
    // autoplay: {
    // 	delay: 3000,
    // 	disableOnInteraction: false,
    // },

    observer: true,
    observeParents: true,
    slidesPerView: 1,
    // slidesPerView: 'auto',
    // slidesPerGroup: 3,
    spaceBetween: 10,
    // autoHeight: true,
    speed: 800,
    updateOnWindowResize: true,

    //touchRatio: 0,
    simulateTouch: true,
    // loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    // pagination: {
    // 	el: '.slider-quality__pagging',
    // 	clickable: true,
    // },
    // scrollbar: {
    //   el: '.partners__scrollbar',
    //   hide: false,
    // },
    // Arrows
    // navigation: {
    //   nextEl: '.partners__btn_next',
    //   prevEl: '.partners__btn_prev',
    // },
    breakpoints: {
      320: {
        loop: false,
      },
      478: {
        loop: true,
      },
      // 992: {
      // 	slidesPerView: 3,
      // 	spaceBetween: 20,
      // },
      // 1410: {
      // 	slidesPerView: 4,
      // 	spaceBetween: 20,
      // },
    },

    on: {

    }
  });
}

// testSlider только на мобильном разрешении
let mySwiper;
if (testSlider) {
  function mobileSlider() {
    if (window.innerWidth < 767.98 && mainSlider.dataset.mobile == 'false') {
      mySwiper = new Swiper(testSlider, {
        // Подключаем модули слайдера
        // для конкретного случая
        modules: [Navigation],

        // effect: 'fade',
        // autoplay: {
        // 	delay: 3000,
        // 	disableOnInteraction: false,
        // },

        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        // autoHeight: true,
        speed: 800,
        // updateOnWindowResize: true,

        //touchRatio: 0,
        //simulateTouch: false,
        // loop: true,
        //preloadImages: false,
        //lazy: true,
        // Dotts
        //pagination: {
        //	el: '.slider-quality__pagging',
        //	clickable: true,
        //},
        // Arrows
        navigation: {
          nextEl: '.about-hero__arrow_next',
          prevEl: '.about-hero__arrow_prev',
        },
        breakpoints: {
          // 320: {
          // 	slidesPerView: 1,
          // 	spaceBetween: 0,
          // 	// autoHeight: true,
          // },
          // 478: {
          // 	slidesPerView: 2,
          // 	spaceBetween: 20,
          // },
          // 992: {
          // 	slidesPerView: 3,
          // 	spaceBetween: 20,
          // },
          // 1410: {
          // 	slidesPerView: 4,
          // 	spaceBetween: 20,
          // },
        },

        on: {

        }
      });
      testSlider.dataset.mobile == 'true';
    }
    if (window.innerWidth > 767.98) {
      testSlider.dataset.mobile == 'false';
      if (testSlider.classList.contains('swiper-initialized')) {
        mySwiper.destroy();
      }

    }
  }
  mobileSlider();
  window.addEventListener('resize', () => {
    mobileSlider();
  });
}
