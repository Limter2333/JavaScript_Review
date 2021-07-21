window.onload = function () {
    //
    var body = document.body;
    //
    var html = document.documentElement;
    // 页面中所有元素
    var all = document.all;
    all = document.getElementsByTagName("*");
    // 根据class查询 IE-8以下不兼容
    var box1 = document.getElementsByClassName("test1");
    // 取所有div
    var divs = document.getElementsByTagName("div");
    // 全兼容，最好使用这个（多个元素只会返回第一个）
    document.querySelector("div");
    document.querySelector(".test1 div");
    // 返回数组包含所有匹配的元素
    document.querySelectorAll("div");

    // 增
    myClick("btn01", function () {
        // // method1 太复杂
        // var li = document.createElement("li");
        //
        // var gzText = document.createTextNode("广州");
        //
        // li.appendChild(gzText);
        //
        // var city = document.getElementById("city");
        // city.appendChild(li);
        //
        // // method2 耗时太大
        // city.innerHTML += '<li>广州</li>';

        // method3
        var li = document.createElement("li");
        li.innerHTML = "广州";
        city.appendChild(li);
    });

    myClick("btn02", function () {
        var li = document.createElement("li");
        var gzText = document.createTextNode("广州");
        li.appendChild(gzText);
        var bj = document.getElementById("bj");
        var city = document.getElementById("city");
        city.insertBefore(li, bj);
    });


    // 删
    myClick("btn04", function () {
        var bj = document.getElementById("bj");
        var city = document.getElementById("city");
        city.removeChild(bj);
    });

    // 改
    myClick("btn03", function () {
        var li = document.createElement("li");
        var gzText = document.createTextNode("广州");
        li.appendChild(gzText);
        var bj = document.getElementById("bj");
        var city = document.getElementById("city");
        city.replaceChild(li, bj);
        // 这个较常用
        bj.parentNode.removeChild(bj);
    });

    myClick("btn05", function () {
        var bj = document.getElementById("city");
        console.log(bj.innerHTML);
    });

    myCLick("btn06", function () {

    });

    function myClick(idStr, fun) {
        var btn = document.getElementById(idStr);
        btn.onclick = fun;
    }
}