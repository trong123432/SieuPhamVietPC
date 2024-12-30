$(document).ready(function () {
  // ------------------------------ thay doi so luong san pham ---------------------------
  $("#change__decrease-1").click(function () {
    console.log("#change__decrease-1");
    let number = parseInt($("#quantity-1").val());
    if (number > 1) {
      number--;
      $("#quantity-1").val(number);
    }
  });

  $("#change__increase-1").click(function () {
    console.log("#change__decrease-2");
    let number = parseInt($("#quantity-1").val());
    number++;
    $("#quantity-1").val(number);
  });
  // ------------------------------------
  $("#change__decrease-2").click(function () {
    let number = parseInt($("#quantity-2").val());
    if (number > 1) {
      number--;
      $("#quantity-2").val(number);
    }
  });

  $("#change__increase-2").click(function () {
    let number = parseInt($("#quantity-2").val());
    number++;
    $("#quantity-2").val(number);
  });
  // -----------------------------------
  $("#change__decrease-3").click(function () {
    let number = parseInt($("#quantity-3").val());
    if (number > 1) {
      number--;
      $("#quantity-3").val(number);
    }
  });

  $("#change__increase-3").click(function () {
    let number = parseInt($("#quantity-3").val());
    number++;
    $("#quantity-3").val(number);
  });

  //   -------------------------------------------------------- tái sử dụng cho trang builđ PC

  $("#change__increase-4").click(function () {
    let number = parseInt($("#quantity-4").val());
    number++;
    $("#quantity-4").val(number);
  });

  $("#change__decrease-4").click(function () {
    let number = parseInt($("#quantity-4").val());
    if (number > 1) {
      number--;
      $("#quantity-4").val(number);
    }
  });

  $("#change__increase-5").click(function () {
    let number = parseInt($("#quantity-5").val());
    number++;
    $("#quantity-5").val(number);
  });

  $("#change__decrease-5").click(function () {
    let number = parseInt($("#quantity-5").val());
    if (number > 1) {
      number--;
      $("#quantity-5").val(number);
    }
  });

  $("#change__increase-6").click(function () {
    let number = parseInt($("#quantity-6").val());
    number++;
    $("#quantity-6").val(number);
  });

  $("#change__decrease-6").click(function () {
    let number = parseInt($("#quantity-6").val());
    if (number > 1) {
      number--;
      $("#quantity-6").val(number);
    }
  });

  // ----------------------------------------------------------------------------------
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
