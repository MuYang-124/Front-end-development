(function(global) {
    var fl = {};
    fl.slideLeft = function() {
        // 获取img的宽度
        var imgWidth = document.querySelector('img.img-responsive');
        if (imgWidth) {
            console.log(imgWidth.offsetWidth);
        } else {
            console.log("获取img的宽度失败！");
        }
        return null;
    }
    fl.set1 = function() {
        var imgElement = document.querySelector('img.img-responsive');
        console.log(imgElement);
        if (imgElement) {
            // 获取img的宽度和高度
            var imgWidth = imgElement.offsetWidth;
            var imgHeight = imgElement.offsetHeight;
            // 获取div.jumbotron元素
            var jumbotronElement = document.querySelector('div.jumbotron');
            if (jumbotronElement) {
                // 设置div.jumbotron的宽度和高度
                jumbotronElement.style.width = imgWidth + 'px';
                jumbotronElement.style.height = imgHeight + 'px';
                console.log("设置div.jumbotron的宽度和高度成功！");
            }
        }
    }
    fl.name = 'zmy'
    global.$fl = fl;
})(window)