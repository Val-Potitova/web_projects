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
  slidesPerView: 1,
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
    slidesPerView: 1.5,
    watchOverFlow: true,
    spaceBetween: 15,
    breakpoints: {
      1000: {
        slidesPerView: 2.5,
      }
    }
});

const fileInput = document.getElementById("files");
const fileLabel = document.getElementById("fileLabel");

fileInput.addEventListener("change", function(event) {
  var filename = event.target.files[0].name;
  fileLabel.innerText = filename;
});

const header = document.querySelector('.header');
if (header) {
  header.addEventListener('click', function (e) {
    if (e.target === header || e.target === header.querySelector('::before')) {
    }
  });
}

document.addEventListener('click', function (e) {
  const header = document.querySelector('.header');
  if (!header) return;

  const rect = header.getBoundingClientRect();
  const isBurgerZone =
    e.clientX > rect.right - 60 &&
    e.clientY < rect.top + 60 &&
    window.innerWidth <= 900;

  if (isBurgerZone) {
    header.classList.toggle('header_open');
  }
});
