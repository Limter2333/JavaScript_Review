window.onload = function (){
    // 全选
    var checkedAllBtn = document.getElementById("checkedAllBtn");
    checkedAllBtn.onclick = function (){
        var items = document.getElementsByName("items");

        for(var i=0; i<items.length; i++){
            items[i].checked = true;
        }
    };
    // 全不选
    var checkedNoBtn = document.getElementById("checkedNoBtn");
    checkedNoBtn.onclick = function(){
        var items = document.getElementsByName("items");
        for(var i=0; i<items.length; i++){
            items[i].checked = false;
        }
    };
    // 反选
    var checkedRevBtn = document.getElementById("checkedRevBtn");
    checkedRevBtn.onclick = function(){
        var items = document.getElementsByName("items");
        for(var i=0; i<items.length; i++){
            if(items[i].checked) {
                items[i].checked = false;
            }else{
                items[i].checked = true;
            }
        }
    };
    // 提交
    var sendBtn = document.getElementById("sendBtn");
    sendBtn.onclick = function (){
        var items = document.getElementsByName("items");
        for(var i=0; i<items.length; i++){
            if(items[i].checked){
                alert(items[i].value);
            }

        }
    }
}