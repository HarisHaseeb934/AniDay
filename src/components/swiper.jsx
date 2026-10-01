const swiper = new Swiper('.swiper', {
  simulateTouch: false,
  allowTouchMove: false,
  shortSwipes: false,
  longSwipes: false,
  followFinger: false,
  touchStartPreventDefault: false,
  resistance: false,
  noSwiping: false,
  preventClicks: false,
  preventClicksPropagation: false,
  loop: true,
  effect: "fade",
  fadeEffect: {
    mode: "cross-fade"
  },
  pagination: {
    el: ".swiper-pagination"
  },
  autoplay: {
    delay: 1000
  }
});