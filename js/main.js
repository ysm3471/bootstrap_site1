var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,   // 3까지만 작동함 왜인지는 모르겠음
  spaceBetween:0,
  speed:1300,
  loop: true,
  autoplay: {
    delay: 4500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});