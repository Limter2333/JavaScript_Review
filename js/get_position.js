window.onload = function (){
    var areaDiv = document.getElementById("areaDiv");
    var showMsg = document.getElementById("showMsg");

    areaDiv.onmousemove = function (event){
        var x = event.clientX;
        var y = event.clientY;

        showMsg.innerHTML = "x:" + x + "  y:" + y;
    }

    var box1 = document.getElementById("box1");
    document.onmousemove = function (event){
        var left = event.clientX;
        var top = event.clientY;

        // // pageX pageY IE8不支持
        // var left = event.pageX;
        // var top = event.pageY;

        // 于是可以自己写这个偏移量
        var st = document.documentElement.scrollTop;
        var sr = document.documentElement.scrollLeft;
        box1.style.left = left + sr + "px";
        box1.style.top = top + st + "px";
    }

    var box2 = document.getElementById("box2");
    box2.onmousemove = function (event){
        event = event || window.event;
        event.cancelBubble = true;
    };

}