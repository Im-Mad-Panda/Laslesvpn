const testimonialsSlider = new Swiper('.testimonials-slider', {

  breakpoints: {
    768:{
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
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