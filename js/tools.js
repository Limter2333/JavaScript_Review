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

// 移除class
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
}

// 如果有则删除class，没有则添加
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}

// class元素
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return getComputedStyle[name];
    }
}

// div移动动画
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);

    var current = parseInt(getStyle(obj, attr));

    if (current > target) {
        speed = -speed;
    }

    // console.log(obj, target, speed);

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