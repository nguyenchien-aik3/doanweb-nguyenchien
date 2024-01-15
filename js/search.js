document.addEventListener("DOMContentLoaded", function () {

    var opensch = document.querySelector(".t6-tag"); 
    var schContainer = document.querySelector(".search");
    var closesch = document.querySelector(".close-search");
    opensch.addEventListener("click", function () {
        event.preventDefault();
        schContainer.style.display = "block";
    });
    closesch.addEventListener("click", function () {

        schContainer.style.display = "none";
    });
});


function checkKeywords() {
    const searchInput = document.querySelector('.gmail-search');
    const displayDiv = document.querySelector('.suggest');


    const tuKhoa = ['ca', 'cat', 'cat ', 'cat s', 'cat sp', 'cat spo'];

    const tuKhoaTrungKhop = tuKhoa.find(tuKhoa =>
        searchInput.value.trim().toLowerCase().includes(tuKhoa.toLowerCase())
    );

    if (tuKhoaTrungKhop) {
        displayDiv.style.display = 'block';
    } else {
        displayDiv.style.display = 'none';
    }
}

