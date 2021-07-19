// 拖拽的任务
// 1.当鼠标按下目标元素时开始拖拽
// 2.当鼠标拖拽时元素跟随鼠标移动
// 3.松开时元素不跟随

window.onload = function () {
    // 拖动div
    var box1 = document.getElementById("box1");
    box1.onmousedown = function (event) {
        var ol = event.clientX - box1.offsetLeft;
        var ot = event.clientY - box1.offsetTop;


        // setCapture 方法
        // if(box1.setCapture){
        //     box1.setCapture();
        // }

        // box1.setCapture && box1.setCapture();

        document.onmousemove = function (event) {
            var left = event.clientX - ol;
            var top = event.clientY - ot;

            // // pageX pageY IE8不支持
            // var left = event.pageX;
            // var top = event.pageY;

            // 于是可以自己写这个偏移量
            var st = document.documentElement.scrollTop;
            var sr = document.documentElement.scrollLeft;
            box1.style.left = left + sr + "px";
            box1.style.top = top + st + "px";
        };
    };

    box1.onmouseup = function (event) {
        document.onmousemove = null;
        document.onmouseup = null;
    };

    // return false;

    // 滚轮把柱状div变长
    box1.onwheel = function (event) {
        // alert(event.detail);
        if (event.wheelDelta > 0 || event.detail < 0) {
            box1.style.height = box1.clientHeight - 10 + "px";
        } else {
            box1.style.height = box1.clientHeight + 10 + "px";
        }
        event.preventDefault();

    }
};