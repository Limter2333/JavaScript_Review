window.onload = function () {
    var box = document.getElementById("box");
    var btn01 = document.getElementById("btn01");
    var btn02 = document.getElementById("btn02");
    btn01.onclick = function () {
        // 每一次都会重新渲染一次页面，太消耗资源
        // box.style.width = "200px";
        // box.style.height = "200px";
        // box.style.backgroundColor = "yellow";

        // 一次性渲染方法
        // 1.修改class方法
        // box.className = "b2";
        // 2.b2覆盖b1
        // box.className += " b2";
        // 3.定义函数来添加指定class属性
        addClass(box, "b2");
    };
    btn02.onclick = function () {
        // removeClass(box, "b2");
        toggleClass(box, "b2");
    };

    // 添加指定class属性
    function addClass(obj, cn) {
        obj.className += " " + cn;
        if (!hasClass(obj, cn)) {
            box.className += " b2";
        }
    }

    // 判断元素中是否含有指定元素
    function hasClass(obj, cn) {
        // 非动态
        // var reg = /\bb2\b/;
        // 写成动态的
        var reg = new RegExp("\\b" + cn + "\\b");
        return reg.test(obj.className);
    }

    function removeClass(obj, cn) {
        var reg = new RegExp("\\b" + cn + "\\b");
        obj.className = obj.className.replace(reg, "");
    }

    function toggleClass(obj, cn) {
        if (hasClass(obj, cn)) {
            removeClass(obj, cn);
        } else {
            addClass(obj, cn);
        }
    }
};