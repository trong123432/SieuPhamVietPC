
function validateForm() {
    var errorMessages = []; 
    let fullName = document.getElementById("fullName").value.trim();
    let password = document.getElementById("password").value.trim();

    if (fullName == "admin" && password == "admin123") {
        window.location.href = "../../danhmucweb/listweb/admin.html";
        return false; 
    }
    if (fullName.length < 3) {
        alert("Tên tài khoản phải có ít nhất 3 ký tự!");
        return false; 
    }
    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự.");
        return false;
    }
    if (errorMessages.length > 0) {
        document.getElementById("errorMessages").innerHTML = errorMessages.join("<br>");
        return false; 
    }
    alert("Đăng nhập thành công!");
    window.location.href = "../../SieuPhamViet.html";
    return false;
}