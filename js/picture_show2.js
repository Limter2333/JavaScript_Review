window.onload = function () {
    var imgList = document.getElementById("imgList");
    var imgArr = document.getElementsByTagName("img");
    imgList.style.width = 420 * imgArr.length + "px";

    var navDiv = document.getElementById("navDiv");
    var outer = document.getElementById("outer");
    // navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";
    var allA = document.getElementsByTagName('a');
    var index = 0;
    var timer;
    allA[index].style.backgroundColor = "grey";

    // 1. 点击超链接显示第n个图片
    for (var i = 0; i < allA.length; i++) {
        allA[i].num = i;

        allA[i].onclick = function () {
            clearInterval(timer);
            index = this.num;
            // imgList.style.left = -420*index + "px";
            setA();
            move(imgList, "left", -420 * index, 30, function () {
                autoChange();
            });
        };
    }

    autoChange();

    // 设置导航标识符的颜色
    function setA() {
        // 判断是否为最后一张图片
        if (index >= imgArr.length - 1) {
            // 将导航符号放到第一张位置
            index = 0;

            // 此时跳转回第一张
            imgList.style.left = 0;
        }
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = "";
        }

        allA[index].style.backgroundColor = "grey";
    }

    // 图片自动切换动画
    function autoChange() {
        timer = setInterval(function () {
            // 索引自增
            index++;
            // 判断是否最后一张
            index %= imgArr.length;
            // 执行动画
            move(imgList, "left", -420 * index, 30, function () {
                setA();
            });
        }, 3000);
    }

    function move(obj, attr, target, speed, callback) {
        clearInterval(obj.timer);

        var current = parseInt(getStyle(obj, attr));

        if (current > target) {
            speed = -speed;
        }

        obj.timer = setInterval(function () {

            var oldValue = parseInt(getStyle(obj, attr));
            var newValue = oldValue + speed;
            if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                newValue = target;
            }
            obj.style[attr] = newValue + "px";
            if (newValue == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
        }, 30);
    }

    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            return getComputedStyle(obj, null)[name];
        } else {
            return getComputedStyle[name];
        }
    }
};