window.onload = function () {
    // document.onkeydown = function (event) {
    //     // console.log("down");
    //     // console.log(event.keycode);
    //     console.log(event.key + "被按下了");
    //
    //     // CTRL SHIFT ALT 按键和其他键位连按需要用到
    //     // event.ctrlKey;
    //     // event.shiftKey;
    //     // event.altKey;
    // };
    // document.onkeyup = function () {
    //     // console.log("up");
    // };
    //
    // // 无法输入除了数字外的其他字符
    // var input = document.getElementById("input");
    //
    // input.onkeydown = function (event) {
    //     if (event.keyCode >= 48 && event.keyCode <= 57){
    //         console.log(event.key);
    //     }else{
    //         return false;
    //     }
    // };

    // div 用方向键拖动div移动
    div1 = document.getElementById("div1");

    document.onkeydown = function (event) {
        event = event || window.event;
        // console.log(event.key);
        var speed = 20;
        if (event.ctrlKey){
            speed = 50;
        }
        switch(event.key){
            case "ArrowLeft":
                div1.style.left = div1.offsetLeft - speed + "px";
                break;
            case "ArrowRight":
                div1.style.left = div1.offsetLeft + speed + "px";
                break;
            case "ArrowDown":
                div1.style.top = div1.offsetTop + speed + "px";
                break;
            case "ArrowUp":
                div1.style.top = div1.offsetTop - speed + "px";
                break;
        }

    };
};