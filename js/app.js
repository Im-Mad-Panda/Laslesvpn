const customersSlider = new Swiper('.customers-swiper', {

  breakpoints: {
    768:{
      slidesPerView: "auto",
        spaceBetween: 50,
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