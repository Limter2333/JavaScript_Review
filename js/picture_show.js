window.onload = function () {
    var img1 = document.getElementById("img1");
    var imgArr = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

    var btn01 = document.getElementById("btn01");

    var timer;
    btn01.onclick = function () {
        var index = 0;

        clearInterval(timer);

        timer = setInterval(function () {
            index++;
            // if (index >= imgArr.length){
            //     index = 0;
            // }
            index = index % imgArr.length;

            img1.src = imgArr[index];
        }, 1000);
    };

    var btn02 = document.getElementById("btn02");

    btn02.onclick = function () {
        clearInterval(timer);
    }
};