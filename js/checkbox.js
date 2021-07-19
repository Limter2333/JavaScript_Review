window.onload = function () {
    // 全选
    var checkedAllBtn = document.getElementById("checkedAllBtn");
    var checkedAllBox = document.getElementById("checkedAllBox");
    checkedAllBtn.onclick = function () {
        var items = document.getElementsByName("items");

        for (var i = 0; i < items.length; i++) {
            items[i].checked = true;
        }
        checkedAllBox.checked = true;
    };
    // 全不选
    var checkedNoBtn = document.getElementById("checkedNoBtn");
    var checkedAllBox = document.getElementById("checkedAllBox");
    checkedNoBtn.onclick = function () {
        var items = document.getElementsByName("items");
        for (var i = 0; i < items.length; i++) {
            items[i].checked = false;
        }
        checkedAllBox.checked = false;
    };
    // 反选
    var checkedRevBtn = document.getElementById("checkedRevBtn");
    var checkedAllBox = document.getElementById("checkedAllBox");
    checkedRevBtn.onclick = function () {
        var items = document.getElementsByName("items");
        for (var i = 0; i < items.length; i++) {
            items[i].checked = !items[i].checked;
            if (items[items.length - 1]) {
                checkedAllBox.checked = true;
            }
            if (!items[i].checked) {
                checkedAllBox.checked = false;
            }
        }
    };
    // 提交
    var sendBtn = document.getElementById("sendBtn");
    sendBtn.onclick = function () {
        var items = document.getElementsByName("items");
        for (var i = 0; i < items.length; i++) {
            if (items[i].checked) {
                alert(items[i].value);
            }

        }
    };

    //checkedAllBox 全选 全部不选的chekbox
    var checkedAllBox = document.getElementById("checkedAllBox");
    checkedAllBox.onclick = function () {
        var items = document.getElementsByName("items");
        for (var i = 0; i < items.length; i++) {
            items[i].checked = checkedAllBox.checked;
        }
    };

    //当全选或全不选 checkedAllBox应该可以反映
    var items = document.getElementsByName("items");
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            for (var j = 0; j < items.length; j++) {
                if (items[items.length - 1]) {
                    checkedAllBox.checked = true;
                }
                if (!items[j].checked) {
                    checkedAllBox.checked = false;
                    break;
                }
            }
        }
    }

}