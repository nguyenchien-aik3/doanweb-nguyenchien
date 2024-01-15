document.addEventListener("DOMContentLoaded", function () {
    var openfo = document.querySelector(".forget-vao");  // Sử dụng "#login-bth" nếu là ID
    var foContainer = document.querySelector(".from-box-forget");
    var closefo = document.querySelector(".back-forget");
    openfo.addEventListener("click", function () {
        event.preventDefault();
        // Hiển thị thẻ div khi nhấn vào nút mở
        foContainer.style.display = "block";
    });
    closefo.addEventListener("click", function () {
        // Ẩn thẻ div khi nhấn vào nút đóng
        foContainer.style.display = "none";
    });


});

function login() {
    var username = document.getElementById(".login-gmail").value;
    var password = document.getElementById(".login-pass").value;
    var messageElement = document.getElementById(".nhapvao");
  
    // Kiểm tra thông tin đăng nhập (đây là một kiểm tra đơn giản, không an toàn trong thực tế)
    if (username === "123" && password === "123") {
      messageElement.style.color = "green";
      messageElement.textContent = "Đăng nhập thành công!";
    } else {
      messageElement.style.color = "red";
      messageElement.textContent = "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.";
    }
  }