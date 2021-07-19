window.onload = function () {
    var info = document.getElementById("info");
    var confirm1 = document.getElementById("confirm1");
    var confirm2 = document.getElementById("confirm2");
    info.onscroll = function () {
        if (info.scrollHeight == info.clientHeight + info.scrollTop) {
            confirm1.disabled = false;
            console.log("!");
        }
    };
    confirm1.onclick = function () {
        confirm2.disabled = !confirm2.disabled;
    };
};