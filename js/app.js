const customersSlider = new Swiper('.customers-swiper', {

  breakpoints: {
    768:{
  slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
        }
      },

  navigation: {
    nextEl: '.arrow-left',
    prevEl: '.arrow-right',
  },
  pagination: {
    el: '.slider-pagination',
    bulletClass: 'slider-bullet',
    bulletActiveClass: 'slider-active-bullet'
  },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
})