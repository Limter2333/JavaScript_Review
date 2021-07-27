window.onload = function () {
    var input = document.getElementById("input")
    document.getElementById("btn").onclick = function (){
        var number = input.value
        //
        var worker =new Worker('js/web_workers_B.js')
        // var worker =new Worker('worker.js')

        worker.onmessage = function (event){
            console.log("主线程接收分线程返回的数据:" + event.data)
            alert(event.data)
        }
        // 向分线程发送消息
        worker.postMessage(number)
        console.log("主线程向分线程发送数据:" + number)
    }
}
