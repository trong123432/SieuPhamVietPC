const listImage = document.querySelector('.list-images');
const imgs = document.querySelectorAll('.list-images img');
const length = imgs.length;
let current = 0;

function showCurrentImage() {
    imgs.forEach(img => {
        img.style.display = 'none';
    });
    imgs[current].style.display = 'block';
}
setInterval(() => {
    current++;
    if (current === length) {
        current = 0;
    }
    showCurrentImage();
}, 3000);

showCurrentImage();
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
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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
var swiper_phu = new Swiper(".SwiperPhu", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper_chinh = new Swiper(".SwiperChinh", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_phu,
    },
});

const swipercnt1 = new Swiper('.spSwiper', {
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

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
            slidesPerView: 2,
            rows: 2,
        },
        1024: {
            slidesPerView: 4
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
var sidebar = document.getElementById("sidebar");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.transform = "translateY(0)";
    } else {
        header.style.transform = "translateY(-64px)";
    }
    prevScrollpos = currentScrollPos;
}


if (window.innerWidth <= 480) {
    const searchMenu = document.querySelector('.menu-search');
    const headerElements = document.querySelectorAll('.logo, .nav, .list-menu');
    document.querySelector('.menu-search span').addEventListener('click', function () {
        const isVisible = searchMenu.classList.toggle('show');
        headerElements.forEach(el => {
            el.style.display = isVisible ? 'none' : '';
        });
    });
    function closeSearchMenu() {
        searchMenu.classList.remove('show');
        headerElements.forEach(el => {
            el.style.display = ''; 
        });
    }
    document.addEventListener('click', function (event) {
    console.log('Clicked:', event.target);
    if (!searchMenu.contains(event.target) && !event.target.closest('.menu-search span')) {
        console.log('Closing menu');
        closeSearchMenu();
        }
    });
}
