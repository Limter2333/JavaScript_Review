// window.onload = function (){
//     var box1 = document.getElementById("box1");
//     var btn01 = document.getElementById("btn01");
//     var flag = true;
//
//     btn01.onclick  = function (){
//         if(flag){
//             box1.style.width = "300px";
//             box1.style.height = "300px";
//             box1.style.backgroundColor = "yellow";
//             flag = !flag;
//         }else{
//             box1.style.width = "300px";
//             box1.style.height = "300px";
//             box1.style.backgroundColor = "red";
//             flag = !flag;
//         }
//         //  获取当前css中参数
//         // alert(box1.currentStyle.width); 只有IE支持
//         // alert(getComputedStyle(box1, null).width); 除了IE以外的浏览器支持的方法
//         alert(box1.style.width);
//         // 自定义一个方法
//         alert(getStyle(box1, "width"));
//     };
// };
// function getStyle(obj, name){
//     if(window.getComputedStyle){
//         return getComputedStyle(obj, null)[name];
//     }else{
//         return obj.currentStyle[name];
//     }
// }
window.onload = function (){
    var btn01 = document.getElementById("btn01");
    var box1 = document.getElementById("box1")
    btn01.onclick = function (){
        // 可见宽度
        alert(box1.clientWidth);
    };
}
