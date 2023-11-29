# 前端学习

## VScode配置

### 插件安装



## 学习路线

#### **第一步: 掌握 HTML/CSS**

这是你最初必须掌握的

是网站的构建元素

没得选!

随着你前端的学习进程,熟练掌握

HTML/CSS 简单易学

#### **第二步: 使用基础工具**

文本编辑器: Notepad2 / Sublime Text / Atom.io / IDE

图像编辑器:Photoshop, Illustrator, GIMP, Something slse

FTP / SSH 工具 : Filezilla ,Putty

好的浏览器: Chrome

云盘: Dropbox, Google Drive, Box

#### **第三步: 学习原生 JavaScript**

原生 JavaScript(现阶段不需要理会 Node.js 和任何框架)

理解数据类型: String, Number, Arrays, Objects, etc

理解函数, 条件表达式, 循环,操作符等

事件处理

JSON(JavaScript Object Notation), JavaScript 对象表示法

jQuery 框架

#### **第四步:搭建一个基础网站:**

获取一个虚拟主机账户(Hostgator, InMotion, etc)

学习虚拟主机控制系统基础——cPanel (Email ,FTP Setup)

通过 FPT(文件传输协议)上传你的项目

创建域名并和你的主机连接

#### **第五步:恭喜你! 你现在是一个网页设计师了!——(现阶段还不足以称 Web Developer)**

有能力搭建一个专业的简单网站

有能力搭建网页应用的界面

能够把一张 PSD 转化为基于 HTML/CSS 的静态网页

有在公司上班的实力, 或者选择成为一名自由职业者

#### **第六步: 思考接下来的侧重点!**

HTML/CSS 框架: Bootstrap, Foudation(建议优先掌握!)

服务器端语言: PHP, Ruby…

JavaScript 框架: React ,Angular

数据库: MySQL, PostgreSQL

#### **第七步: HTML/CSS 框架**

Bootstrap(强烈推荐学习该框架!)

Zurb Foundation

Skeleton

MUI

Pure

#### **第八步: 服务器端编程语言(专注于一个!)**

PHP(不是最好的语言,但是是最可靠的服务器端语言)

Node.js(一款新型, 强大的后台语言)

Ruby on Rails (最好的框架,但已经到了瓶颈期)

Python(简单易学,但相对于主流语言并不流行)——可现在 AI 的爆红导致 Python 最近很火!

#### **第九步: 数据库(专注于一个!)**

关系型数据库: MySQL 和 PostgreSQL

非机构化数据库: MongoDB 和 CouchDB

建议选择一个以下的组合:

PHP/ MySQL

Node.js/ MongoDB

#### **第十步: 需要学习的一些端技术**

Git & Github

SSH(安全外壳协议) & Basic Command Line

CSS 预编译器: Sass/Less

APIS / REST Service

HTTPS / SSL

#### **第十一步: 部署应用**

专用服务器/ VPS

应用云平台: Heroku, Digital Ocean, AWS

部署工具

Linux 命令行

维护和升级

#### **第十二步:恭喜你,你现在成为一名网页开发者了!**

能够创造出网页引用

能构建后端 APIs

能连接服务器

能够管理数据库

你的选择: 得到一份很好的工作 / 成为自由职业者 / 开始一项事业

#### **第十三步:编程框架**

JavaScript 框架: React, Angular 2, Vue.js, Express(后端)

PHP 框架: Laravel, Codeigniter, Symfony

Ruby on rails

MVC 框架: Routing, Database Mapping, Helpers, Data Binding, Templating & UI

#### **第十四步: 内容管理系统(基于 PHP)**

Wordpress(强烈推荐), Joomla, Drupal

有利用客户更新和维护

丰富的插件

开发速度快

模板的功能有限

#### **第十五步: 移动 App 发展**

这是未来的趋势

你不需要学习 Java 和 C 语言!

你只需要掌握 JavaScript!我们可以使用 React Native, Ionic, Cordova 等框架来构建移动 App

#### **第十六步:现阶段,现在你需要考虑什么?**

专注于你的事业

回去学习更多的数据结构

跟进现在的新技术

学习一门高级语言,类似于 Java, C 语言

## HTML学习

### Web与Web标准

**1、Web标准包括三个方面**：

- 结构标准（HTML）：用于对网页元素进行整理和分类。
- 表现标准（CSS）：用于设置网页元素的版式、颜色、大小等外观样式。
- 行为标准（JS）：用于定义网页的交互和行为。

根据上面的Web标准，可以将 Web前端分为三层，如下。

**2、Web前端分三层**：

- HTML（HyperText Markup Language）：超文本标记语言。从**语义**的角度描述页面的**结构**。相当于人的身体组织结构。
- CSS（Cascading Style Sheets）：层叠样式表。从**审美**的角度美化页面的**样式**。相当于人的衣服和打扮。
- JavaScript（简称JS）：从**交互**的角度描述页面的**行为**，实现业务逻辑和页面控制。相当于人的动作，让人有生命力。

### 浏览器相关知识

浏览器分成两部分：

- 1、渲染引擎（即：浏览器内核）
- 2、JS 引擎

### HTML相关概念

### HTML结构详解

HTML标签通常是成对出现的（**双边标记**），比如 `<div>` 和 `</div>`；也有少部分单标签（**单边标记**），如：`<br />`、`<hr />`和`<img src="images/1.jpg" />`等。

属性与标记之间、各属性之间需要以空格隔开。属性值以双引号括起来。

#### html骨架标签分类

| 标签名            | 定义       | 说明                                                    |
| ----------------- | ---------- | ------------------------------------------------------- |
| `<html></html>`   | HTML标签   | 页面中最大的标签，我们成为根标签                        |
| `<head></head>`   | 文档的头部 | 注意在head标签中我们必须要设置的标签是title             |
| `<title></title>` | 文档的标题 | 让页面拥有一个属于自己的网页标题                        |
| `<body></body>`   | 文档的主体 | 元素包含文档的所有内容，页面内容 基本都是放到body里面的 |
