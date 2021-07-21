var timer;
window.onload = function () {
    var box1 = document.getElementById("box1");
    var btn01 = document.getElementById("btn01");
    var btn02 = document.getElementById("btn02");
    var btnP = document.getElementsByTagName("btnP");

    // var speed = 10;
    // var dir = 0;
    //
    // setInterval(function () {
    //     switch (dir) {
    //         case "ArrowLeft":
    //             box1.style.left = box1.offsetLeft - speed + "px";
    //             break;
    //         case "ArrowRight":
    //             box1.style.left = box1.offsetLeft + speed + "px";
    //             break;
    //         case "ArrowDown":
    //             box1.style.top = box1.offsetTop + speed + "px";
    //             break;
    //         case "ArrowUp":
    //             box1.style.top = box1.offsetTop - speed + "px";
    //             break;
    //     }
    // }, 30);
    //
    // document.onkeydown = function (event) {
    //     event = event || window.event;
    //
    //     if (event.shiftKey) {
    //         speed = 20;
    //     } else if (event.ctrlKey){
    //         dir = 0;
    //     } else {
    //         speed = 10;
    //     }
    //
    //     dir = event.key;
    // }


    btn01.onclick = function () {
        move(box1, "left", 0, 10);

    };
    btn02.onclick = function () {
        move(box1, "top", 800, 10);
    };

    btnP.onclick = function () {
        // move(box1, 0, 0);
    };


    function getStyle(obj, name){
        if(window.getComputedStyle){
            return getComputedStyle(obj, null)[name];
        }else{
            return getComputedStyle[name];
        }
    }

    function move(obj, attr, target, speed){
        clearInterval(obj.timer);

        var current = parseInt(getStyle(obj, attr));

        if (current > target){
            speed = -speed;
        }

        // console.log(obj, target, speed);

        obj.timer = setInterval(function (){

            var oldValue = parseInt(getStyle(obj, attr));
            var newValue = oldValue + speed;
            if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
                newValue = target;
            }
            obj.style[attr] = newValue + "px";
            if(newValue == target){
                clearInterval(obj.timer);
                // callback && callback();
            }
        },30);
    }
};