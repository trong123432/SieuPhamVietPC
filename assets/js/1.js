const listImage = document.querySelector('.list-images');
const imgs = document.querySelectorAll('.list-images img');
const length = imgs.length;
let current = 0;
const swiper = new Swiper('.spSwiper', {
    // Optional parameters
    loop: false,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
});


const gridSwiper = new Swiper(".gridSlide", {
    grid: {
        rows: 2,
    },
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            rows: 1,
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
});

const gridSwiper2 = new Swiper(".gridSlide-2", {
    grid: {
        rows: 1,
    },
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            rows: 1,
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var prevScrollpos = window.pageYOffset;
var header = document.getElementById("header");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.transform = "translateY(0)";
    } else {
        header.style.transform = "translateY(-64px)";
    }
    prevScrollpos = currentScrollPos;
}