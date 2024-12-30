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

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
