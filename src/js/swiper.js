const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
          autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

  var swiper1 = new Swiper(".swiper__main", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 5,
      navigation: {
          nextEl: '.s-button-next',
          prevEl: '.s-button-prev',
    },
        autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  });
