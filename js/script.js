// $的作用是引入jQuery库，这样就可以使用jQuery的方法了
// 相当于类似于原生JavaScript中的document.addEventListener("DOMContentLoaded", function() {...});。
$(function() {
    // 相当于document.querySelector("#navbarToggle").addEventListener("blur", ...
    // 当按钮失去焦点时
    // console.log("页面加载完成！");
    $("#navbarToggle").blur(function(event) {
        // console.log("失去焦点！");
        // 获取屏幕的宽度
        var screenWidth = window.innerWidth;
        // 如果屏幕的宽度小于768px
        if (screenWidth < 768) {
            // 隐藏导航栏
            // console.log("隐藏导航栏");
            $("#collapsable-nav").collapse("hide");
        }
    });
    // 在Firefox和Safari中， 点击事件不会保持焦点在被点击的按钮上，
    // 因此， 如果用户点击了页面的其他地方， 上面设置的失焦事件处理器不会被调用。 
    // 为了解决这个问题， 这个处理器强制将焦点设置在触发点击事件的元素上。
    // 当按钮被点击时
    $("#navbarToggle").click(function(event) {
        // 为按钮添加焦点
        // console.log("添加焦点！");
        $(event.target).focus();
    });
});
// 创建一个IIFE，IIFE是立即调用的函数表达式，它将被立即调用
(function(global) {
    // 创建一个对象，用于存储方法，并暴露给全局对象，方便其他地方调用
    var dc = {};
    // 主页的HTML文件
    var homeHtml = "snippets/home-snippet.html";
    // var homeHtml = "snippets/home-snippet-float.html";
    // 所有菜单分类的URL
    var allCategoriesUrl = "data/categories.json";
    // 主菜单页的标题HTML文件
    var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    // 一级菜单页下的每个单独菜单部分的HTML文件
    var categoryHtml = "snippets/category-snippet.html";
    // 菜单项的URL
    var menuItemsUrl = "data/";
    // 二级菜单项的标题HTML文件
    var menuItemsTitleHtml = "snippets/menu-items-title.html";
    // 二级菜单页下每个单独菜单项的HTML文件
    var menuItemHtml = "snippets/menu-item.html";
    // 关于页面的HTML文件
    var aboutHtml = "snippets/about-snippet.html";
    // 关键方法，用于将HTML插入到指定的元素中
    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };
    // 关键方法，用于替换字符串中的占位符
    // 参数：替换字符串，占位符名称如shortname，占位符值（实际的html内容 回替换后的字符串（这里指替换字符串后的html）
    var insertProperty = function(string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        // 使用正则表达式替换字符串中的占位符，g表示全局匹配
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    };
    // 插入价格符号
    function insertItemPrice(html, pricePropName, priceValue) {
        if (!priceValue) {
            return insertProperty(html, pricePropName, "");
        }
        // toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
        priceValue = "$" + priceValue.toFixed(2);
        html = insertProperty(html, pricePropName, priceValue);
        return html;
    }
    // 插入菜单项名称
    function insertItemPortionName(html, portionPropName, portionValue) {
        if (!portionValue) {
            return insertProperty(html, portionPropName, "");
        }
        portionValue = "(" + portionValue + ")";
        html = insertProperty(html, portionPropName, portionValue);
        return html;
    }
    // 加载过程中显示加载动画
    var showLoading = function(selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };
    // 用于切换激活样式 
    var switchMenuToActive = function() {
        // 移除Home按钮的激活样式
        var classes = document.querySelector("#navHomeButton").className;
        classes = classes.replace(new RegExp("active", "g"), "");
        document.querySelector("#navHomeButton").className = classes;
        document.querySelector("#navAboutButton").className = classes;
        // 为menu按钮添加激活样式
        classes = document.querySelector("#navMenuButton").className;
        if (classes.indexOf("active") == -1) {
            classes += " active";
            document.querySelector("#navMenuButton").className = classes;
        }
    };
    // 用于切换激活样式 
    var switchAboutToActive = function() {
        // 移除Home按钮的激活样式
        var classes = document.querySelector("#navHomeButton").className;
        classes = classes.replace(new RegExp("active", "g"), "");
        document.querySelector("#navHomeButton").className = classes;
        document.querySelector("#navMenuButton").className = classes;
        // 为About按钮添加激活样式
        classes = document.querySelector("#navAboutButton").className;
        if (classes.indexOf("active") == -1) {
            classes += " active";
            document.querySelector("#navAboutButton").className = classes;
        }
    };
    // 当页面加载时，显示主页的HTML文件
    document.addEventListener("DOMContentLoaded", function(event) {
        // 显示加载动画
        showLoading("#main-content");
        // 从服务器获取主页的HTML文件，并将其插入到页面中
        $ajaxUtils.sendGetRequest(homeHtml, function(responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    });
    // 加载菜单分类视图
    dc.loadMenuCategories = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
    };
    // 加载菜单项视图
    dc.loadMenuItems = function(categoryShort) {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(menuItemsUrl + categoryShort + ".json", buildAndShowMenuItemsHTML);
    };
    // 加载关于页面
    dc.loadAbout = function() {
        showLoading("#main-content");
        switchAboutToActive();
        $ajaxUtils.sendGetRequest(aboutHtml, function(responseText) {
            document.querySelector("#main-content").innerHTML = responseText;
        }, false);
    }
    // 使用服务器数据和片段HTML构建类别页面的HTML
    function buildAndShowCategoriesHTML(categories) {
        // 加载主菜单页的标题HTML文件
        $ajaxUtils.sendGetRequest(categoriesTitleHtml, function(categoriesTitleHtml) {
            // 加载一级菜单页下的每个单独菜单部分的HTML文件
            $ajaxUtils.sendGetRequest(categoryHtml, function(categoryHtml) {
                // 切换CSS类active到菜单按钮
                switchMenuToActive();
                // 构建基于json数据的HTML
                var categoriesViewHtml = buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
                // 将HTML插入到页面中
                insertHtml("#main-content", categoriesViewHtml);
            }, false);
        }, false);
    }
    // 使用服务器数据和片段HTML构建类别页面的HTML
    // 构建基于服务器数据的类别页面的HTML，并返回最终的HTML
    function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {
        var finalHtml = categoriesTitleHtml;
        finalHtml += "<section class='row'>";
        // 循环遍历类别
        for (var i = 0; i < categories.length; i++) {
            // 基础html为categoryHtml
            var html = categoryHtml;
            // 将categories[i].name转换为字符串
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;
            // 替换字符串中的占位符
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            // 将html添加到finalHtml中
            finalHtml += html;
        }
        finalHtml += "</section>";
        // 返回最终的HTML
        return finalHtml;
    }
    // 构建基于服务器数据的菜单项视图的HTML，并将其插入到页面中
    function buildAndShowMenuItemsHTML(categoryMenuItems) {
        // 异步加载二级菜单页下的每个单独菜单项的标题HTML文件
        $ajaxUtils.sendGetRequest(menuItemsTitleHtml, function(menuItemsTitleHtml) {
            // 异步加载二级菜单页下每个单独菜单项的HTML文件
            $ajaxUtils.sendGetRequest(menuItemHtml, function(menuItemHtml) {
                // 切换CSS类active到菜单按钮
                switchMenuToActive();
                // 使用类别和菜单项数据和片段HTML构建菜单项视图HTML
                var menuItemsViewHtml = buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml);
                // 将HTML插入到页面中
                insertHtml("#main-content", menuItemsViewHtml);
            }, false);
        }, false);
    }
    // 使用基于服务器数据的类别和菜单项数据和片段HTML构建菜单项视图的HTML
    function buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {
        menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "name", categoryMenuItems.category.name);
        menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "special_instructions", categoryMenuItems.category.special_instructions);
        var finalHtml = menuItemsTitleHtml;
        finalHtml += "<section class='row'>";
        var menuItems = categoryMenuItems.menu_items;
        var catShortName = categoryMenuItems.category.short_name;
        // 循环，使用数据中的每一项替换占位符
        for (var i = 0; i < menuItems.length; i++) {
            var html = menuItemHtml;
            html = insertProperty(html, "short_name", menuItems[i].short_name);
            html = insertProperty(html, "catShortName", catShortName);
            html = insertItemPrice(html, "price_small", menuItems[i].price_small);
            html = insertItemPortionName(html, "small_portion_name", menuItems[i].small_portion_name);
            html = insertItemPrice(html, "price_large", menuItems[i].price_large);
            html = insertItemPortionName(html, "large_portion_name", menuItems[i].large_portion_name);
            html = insertProperty(html, "name", menuItems[i].name);
            html = insertProperty(html, "description", menuItems[i].description);
            // 每行两个菜单项添加clearfix，解决浮动问题
            if (i % 2 != 0) {
                html += "<div class='clearfix visible-lg-block visible-md-block'></div>";
            }
            finalHtml += html;
        }
        finalHtml += "</section>";
        return finalHtml;
    }
    // 暴露给全局对象
    global.$dc = dc;
})(window);