//hotel-room
var swiper = new Swiper('.js-swiper-hotel-room', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
  delay: 2000,
  disableOnInteraction: true,
  },

  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },
});

var swiper1 = new Swiper(".swiper__main", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,

  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: '.s-button-next-1',
    prevEl: '.s-button-prev-1',
  },
});

var swiper1 = new Swiper(".swiper__main_1", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,

  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: '.s-button-next-about-rest',
    prevEl: '.s-button-prev-about-rest',
  },
});

var swiper2 = new Swiper(".swiper__main_2", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 5,

  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: '.s-button-next-det-rest',
    prevEl: '.s-button-prev-det-rest',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 3,
    },

  },
});

var swiper3 = new Swiper(".swiper__main_3", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,

  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: '.s-button-next-about-hotel',
    prevEl: '.s-button-prev-about-hotel',
  },
});

