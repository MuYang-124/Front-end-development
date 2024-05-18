// 该文件的作用是创建一个异步加载进程，异步加载的意义是在不刷新页面的情况下，向服务器发送请求，获取数据，然后将数据显示在页面上。
// 创建一个IIFE
(function(global) {
    // 创建一个异步加载对象
    var ajaxUtils = {};
    // 该方法用于创建一个XMLHttpRequest对象，XMLHttpRequest的作用是在浏览器和服务器之间异步交换数据。
    function getRequestObject() {
        // 判断浏览器是否支持XMLHttpRequest对象
        if (global.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else if (global.ActiveXObject) {
            // For very old IE browsers (optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        } else {
            global.alert("Ajax is not supported!");
            return (null);
        }
    }
    // 该方法用于发送一个GET请求，并处理响应
    // 三个参数：请求的URL，处理响应的回调函数，是否响应为JSON格式
    ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse) {
        // 创建一个XMLHttpRequest对象
        var request = getRequestObject();
        // 定义一个方法用于处理响应
        request.onreadystatechange = function() {
            // 三个参数：请求对象，处理响应的回调函数，是否响应为JSON格式
            handleResponse(request, responseHandler, isJsonResponse);
        };
        // 三个参数：请求的类型，请求的URL，是否异步
        request.open("GET", requestUrl, true);
        request.send(null);
    };
    // 该方法用于处理响应，被ajaxUtils.sendGetRequest调用
    // 三个参数：请求对象，处理响应的回调函数，是否响应为JSON格式
    function handleResponse(request, responseHandler, isJsonResponse) {
        // 判断请求是否完成，并且响应是否成功
        if ((request.readyState == 4) && (request.status == 200)) {
            // 默认为JSON格式
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }
            // 如果响应为JSON格式，调用JSON.parse()方法解析JSON字符串，否则直接返回对象的字符串形式
            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText));
            } else {
                responseHandler(request.responseText);
            }
        }
    }
    // 暴露给全局对象
    global.$ajaxUtils = ajaxUtils;
})(window);