$(document).ready(function () {
  function updatePayment() {
    // ---------------------------------------------
    var n1 = Number($("#quantity-1").val());
    var p1 = Number($("#price-1").val());
    var payment1 = n1 * p1;

    var n2 = Number($("#quantity-2").val());
    var p2 = Number($("#price-2").val());
    var payment2 = n2 * p2;

    var n3 = Number($("#quantity-3").val());
    var p3 = Number($("#price-3").val());
    var payment3 = n3 * p3;

    var n4 = Number($("#quantity-4").val());
    var p4 = Number($("#price-4").val());
    var payment4 = n4 * p4;

    var n5 = Number($("#quantity-5").val());
    var p5 = Number($("#price-5").val());
    var payment5 = n5 * p5;

    var n6 = Number($("#quantity-6").val());
    var p6 = Number($("#price-6").val());
    var payment6 = n6 * p6;

    console.log("number of the first product : " + n1);
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
    $("#payment4").html(vnd.format(payment4));
    $("#payment5").html(vnd.format(payment5));
    $("#payment6").html(vnd.format(payment6));

    var totalPrice =
      payment1 + payment2 + payment3 + payment4 + payment5 + payment6;

    var voucherCode = String($("#voucher__code").val());
    var discount = 0;

    if (voucherCode == "thaytrungdeptrai123") {
      discount = totalPrice * 0.9;
      //   alert("Bạn đã nhận được mã giảm giá 90%");
    } else discount = 0;

    $("#voucher__discount").html(vnd.format(discount));
    console.log("#voucher__code");
    console.log(voucherCode);

    $("#totalPrice").html(vnd.format(totalPrice));
    $("#totalPayment").html(vnd.format(totalPrice - discount));
  }

  function payment() {
    var n1 = Number($("#quantity-1").val());
    var p1 = Number($("#price-1").val());
    var payment1 = n1 * p1;

    var n2 = Number($("#quantity-2").val());
    var p2 = Number($("#price-2").val());
    var payment2 = n2 * p2;

    var n3 = Number($("#quantity-3").val());
    var p3 = Number($("#price-3").val());
    var payment3 = n3 * p3;

    var n4 = Number($("#quantity-4").val());
    var p4 = Number($("#price-4").val());
    var payment4 = n4 * p4;

    var n5 = Number($("#quantity-5").val());
    var p5 = Number($("#price-5").val());
    var payment5 = n5 * p5;

    var n6 = Number($("#quantity-6").val());
    var p6 = Number($("#price-6").val());
    var payment6 = n6 * p6;

    var totalPrice =
      payment1 + payment2 + payment3 + payment4 + payment5 + payment6;

    if (totalPrice != 0) alert("Đơn hàng đã được đặt");
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

    var n4 = Number($("#quantity-4").val());
    var p4 = Number($("#price-4").val());
    var payment4 = n4 * p4;

    var n5 = Number($("#quantity-5").val());
    var p5 = Number($("#price-5").val());
    var payment5 = n5 * p5;

    var n6 = Number($("#quantity-6").val());
    var p6 = Number($("#price-6").val());
    var payment6 = n6 * p6;

    var totalPrice =
      payment1 + payment2 + payment3 + payment4 + payment5 + payment6;

    var voucherCode = String($("#voucher__code").val());
    var discount = 0;

    if (voucherCode == "thaytrungdeptrai123") {
      discount = totalPrice * 0.9;
      alert("Bạn đã nhận được mã giảm giá 90%");
    } else discount = 0;
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

  $('button[id^="add--cpu-"]').on("click", function () {
    $("#price-1").val(17490000);
    updatePayment();
  });
  $('button[id^="add--board-"]').on("click", function () {
    $("#price-2").val(1990000);
    updatePayment();
  });
  $('button[id^="add--ram-"]').on("click", function () {
    $("#price-3").val(799000);
    updatePayment();
  });
  $('button[id^="add--vga-"]').on("click", function () {
    $("#price-4").val(8390000);
    updatePayment();
  });
  $('button[id^="add--tan-"]').on("click", function () {
    $("#price-5").val(7990000);
    updatePayment();
  });
  $('button[id^="add--case-"]').on("click", function () {
    $("#price-6").val(2589000);
    updatePayment();
  });

  $("#btn--payment").on("click", function () {
    payment();
  });

  updatePayment();
});
