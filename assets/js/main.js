// document.addEventListener('DOMContentLoaded', function () {
//     const carouselElement = document.getElementById('carouselHighlights');
//     const carousel = new bootstrap.Carousel(carouselElement, {
//         interval: 3000,
//         touch: false // Disable Bootstrap's built-in touch handling
//     });

//     let startX = 0;

//     carouselElement.addEventListener('touchstart', function (event) {
//         startX = event.touches[0].clientX;
//     });

//     carouselElement.addEventListener('touchmove', function (event) {
//         const dx = event.touches[0].clientX - startX;
//         carouselElement.querySelector('.carousel-inner').style.transform = `translateX(${dx}px)`;
//     });

//     const handleTouchEnd = function (event) {
//         const dx = event.changedTouches[0].clientX - startX;
//         const threshold = carouselElement.offsetWidth / 3; // Threshold to consider it a swipe
//         if (Math.abs(dx) > threshold) {
//             dx < 0 ? carousel.next() : carousel.prev();
//         }
//         carouselElement.querySelector('.carousel-inner').style.transform = '';
//     };

//     carouselElement.addEventListener('touchend', handleTouchEnd);
//     carouselElement.addEventListener('touchcancel', handleTouchEnd);
// });
// document.addEventListener('DOMContentLoaded', function () {
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    // effect: "cube",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    // cubeEffect: {
    //     slideShadows: false,
    // },
    pagination: {
        el: ".swiper-pagination",
    },
});
// });