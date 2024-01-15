document.addEventListener("DOMContentLoaded", function () {
    var openLoginBtn = document.querySelector(".t5-tag");  // Sử dụng "#login-bth" nếu là ID
    var loginContainer = document.querySelector(".login");
    var closeLoginBtn = document.querySelector(".close-login");
    openLoginBtn.addEventListener("click", function () {
        event.preventDefault();
        // Hiển thị thẻ div khi nhấn vào nút mở
        loginContainer.style.display = "block";
    });
    closeLoginBtn.addEventListener("click", function () {
        // Ẩn thẻ div khi nhấn vào nút đóng
        loginContainer.style.display = "none";
    });

    var openre = document.querySelector(".chuyen-2");  // Sử dụng "#login-bth" nếu là ID
    var reContainer = document.querySelector(".from-box-register");
    var closere = document.querySelector(".back-register");
    openre.addEventListener("click", function () {
        event.preventDefault();
        // Hiển thị thẻ div khi nhấn vào nút mở
        reContainer.style.display = "block";
    });
    closere.addEventListener("click", function () {
        // Ẩn thẻ div khi nhấn vào nút đóng
        reContainer.style.display = "none";
    });
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



    var opensch = document.querySelector(".t6-tag");  // Sử dụng "#login-bth" nếu là ID
    var schContainer = document.querySelector(".search");
    var closesch = document.querySelector(".close-search");
    opensch.addEventListener("click", function () {
        event.preventDefault();
        // Hiển thị thẻ div khi nhấn vào nút mở
        schContainer.style.display = "block";
    });
    closesch.addEventListener("click", function () {
        // Ẩn thẻ div khi nhấn vào nút đóng
        schContainer.style.display = "none";
    });



    var openshop = document.querySelector(".t3-tag");  // Sử dụng "#login-bth" nếu là ID
    var loginshop = document.querySelector(".cart");
    var closeshop = document.querySelector(".close-cart");
    openshop.addEventListener("click", function () {
        event.preventDefault();
        // Hiển thị thẻ div khi nhấn vào nút mở
        loginshop.style.display = "block";
    });
    closeshop.addEventListener("click", function () {
        // Ẩn thẻ div khi nhấn vào nút đóng
        loginshop.style.display = "none";
    });


});


function checkKeywords() {
    const searchInput = document.querySelector('.gmail-search');
    const displayDiv = document.querySelector('.suggest');

    // Mảng chứa các từ khóa
    const tuKhoa = ['ca', 'cat', 'cat ', 'cat s', 'cat sp', 'cat spo'];

    // Kiểm tra sự khớp với từng từ khóa
    const tuKhoaTrungKhop = tuKhoa.find(tuKhoa =>
        searchInput.value.trim().toLowerCase().includes(tuKhoa.toLowerCase())
    );

    // Hiển thị thẻ div nếu có sự khớp, ngược lại ẩn nó
    if (tuKhoaTrungKhop) {
        displayDiv.style.display = 'block';
    } else {
        displayDiv.style.display = 'none';
    }
}

