document.addEventListener("DOMContentLoaded", function () {

    // slider
    var prevImg = document.querySelector("#arrowLeft");
    var nextImg = document.querySelector("#arrowRight");
    var chairs = document.querySelector("#slideChair");

    var imgCount = 1;

    function slide() {
        if (imgCount < 1) {
            imgCount = 2;
        } else if (imgCount > 2) {
            imgCount = 1;
        }
    }

    function changeImg() {
        if (imgCount == 1) {
            chairs.src = "img/black_chair.png";
        } else if (imgCount == 2) {
            chairs.src = "img/red_chair.png";
        }
    }

    function changeSlide() {
        changeImg();
        slide();
    }

    function prev() {
        imgCount -= 1;
        changeSlide();
    }

    function next() {
        imgCount += 1;
        changeSlide();
    }

    prevImg.addEventListener("click", prev);
    nextImg.addEventListener("click", next);
});
