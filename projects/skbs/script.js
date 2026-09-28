new Swiper('.news-slider__container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    watchOverFlow: true,
    spaceBetween: 15,
});

new Swiper('.education-slider__container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView: 2.5,
    watchOverFlow: true,
    spaceBetween: 15,
});

const fileInput = document.getElementById("files");
const fileLabel = document.getElementById("fileLabel");

fileInput.addEventListener("change", function(event) {
  var filename = event.target.files[0].name;
  fileLabel.innerText = filename;
});