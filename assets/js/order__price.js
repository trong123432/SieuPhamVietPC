$(document).ready(function () {
  function updatePayment() {
    var n1 = Number($("#quantity-1").val());
    var p1 = Number($("#price-1").val());
    var payment1 = n1 * p1;

    var n2 = Number($("#quantity-2").val());
    var p2 = Number($("#price-2").val());
    var payment2 = n2 * p2;

    var n3 = Number($("#quantity-3").val());
    var p3 = Number($("#price-3").val());
    var payment3 = n3 * p3;

    console.log("number of the first product : " + typeof n1);
    console.log("price of the first product: " + p1);

    console.log("number of the second product: " + n2);
    console.log("price of the second product: " + p2);

    console.log("number of the third product: " + n3);
    console.log("price of the third product: " + p3);

    const vnd = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    $("#payment1").html(vnd.format(payment1));
    $("#payment2").html(vnd.format(payment2));
    $("#payment3").html(vnd.format(payment3));

    var totalPrice = payment1 + payment2 + payment3;

    var voucherCode = String($("#voucher__code").val());
    var discount = 0;

    if (voucherCode == "thaytrungdeptrai123") {
      discount = totalPrice * 0.9;
      // alert("Bạn đã nhận được mã giảm giá 90%");
    } else discount = 0;

    $("#voucher__discount").html(vnd.format(discount));
    console.log("#voucher__code");
    console.log(voucherCode);

    $("#totalPrice").html(vnd.format(totalPrice));
    $("#totalPayment").html(vnd.format(totalPrice - discount));
  }

  function voucher() {
    var n1 = Number($("#quantity-1").val());
    var p1 = Number($("#price-1").val());
    var payment1 = n1 * p1;

    var n2 = Number($("#quantity-2").val());
    var p2 = Number($("#price-2").val());
    var payment2 = n2 * p2;

    var n3 = Number($("#quantity-3").val());
    var p3 = Number($("#price-3").val());
    var payment3 = n3 * p3;

    var totalPrice = payment1 + payment2 + payment3;

    var voucherCode = String($("#voucher__code").val());
    var discount = 0;

    if (voucherCode == "thaytrungdeptrai123") {
      // discount = totalPrice * 0.9;
      alert("Bạn đã nhận được mã giảm giá 90%");
    }
    // else discount = 0;
  }

  $('button[id^="change__"]').on("click", function () {
    updatePayment();
  });
  $("#quantity-1, #quantity-2, #quantity-3").on("input", function () {
    updatePayment();
  });

  $('button[id^="change__"]').on("click", function () {
    updatePayment();
  });

  $("#voucher__action").on("click", function () {
    voucher();
    updatePayment();
  });

  updatePayment();

  $("#btn__left, #btn__right").on("click", function () {
    alert("Vui lòng điền thông tin và gửi đơn hàng");
  });

  var fullName = $("#full--name");
  var mail = $("#email");
  var phone = $("#phone");
  var city = $("#city");
  var address = $("#address");

  $("#btn__pay").on("click", function () {
    if (String(fullName.val()) == "") {
      fullName.css("border-color", "red");
      fullName.css("border-weight", "bold");
    } else {
      fullName.css("border-color", "");
      fullName.css("border-weight", "");
    }
    if (String(mail.val()) == "") {
      mail.css("border-color", "red");
      mail.css("border-weight", "bold");
    } else {
      mail.css("border-color", "");
      mail.css("border-weight", "");
    }
    if (String(phone.val()) == "") {
      phone.css("border-color", "red");
      phone.css("border-weight", "bold");
    } else {
      phone.css("border-color", "");
      phone.css("border-weight", "");
    }
    if (city.val() == 0) {
      city.css("border-color", "red");
      city.css("border-weight", "bold");
    } else {
      city.css("border-color", "");
      city.css("border-weight", "");
    }
    if (String(address.val()) == "") {
      address.css("border-color", "red");
      address.css("border-weight", "bold");
    } else {
      address.css("border-color", "");
      address.css("border-weight", "");
    }
    if (
      String(fullName.val()) != "" &&
      String(mail.val()) != "" &&
      String(phone.val()) != ""
    ) {
      alert("Gửi đơn thành công");
    }
  });
});
