const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    speed: 400, 
    effect: 'fade',
    loop: true,
    spaceBetween: 20,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
    }
});