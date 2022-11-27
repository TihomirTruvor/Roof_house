const swiperSale = new Swiper('.sales-slider', {
  // Optional parameters
  //direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
        delay: 4000,
        disableOnInteraction: false, //остановка после ручной прокрутки
      },
    
  loop: true, //бесконечная прокрутка

  speed: 1500, //скорость

  keyboard: { //управление с клавы
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false
  },
});