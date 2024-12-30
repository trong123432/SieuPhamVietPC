function validateForm() {
    var errorMessages = []; 
    var fullName = document.getElementById("fullName").value.trim();
    var password = document.getElementById("password").value.trim();
    var email = document.getElementById("email").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    if (fullName === "" || password === "" || email === "" || confirmPassword === "") {
        alert("Vui lòng điền đầy đủ thông tin!");
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
    if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp!");
        return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ) {
        alert("Email không hợp lệ. Vui lòng nhập đúng định dạng.");
        return false;
    }
    if (errorMessages.length > 0) {
        document.getElementById("errorMessages").innerHTML = errorMessages.join("<br>");
        return false; 
    }
    alert("Đăng ký thành công!");
    window.location.href = "../../danhmucweb/listweb/dangnhap.html";
    return false;
}
