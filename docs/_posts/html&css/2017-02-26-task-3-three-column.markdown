---
layout: post
title: 任务三：三栏式布局
category: html&css
---

## Lesson

* [任务三：三栏式布局](http://ife.baidu.com/course/detail/id/94)

## References

* [MDN：position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
* [MDN：float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
* [Learn CSS Positioning in Ten Steps](http://www.barelyfitz.com/screencast/html-training/css/positioning/)
* [清除浮动（clearfix hack）](http://zh.learnlayout.com/clearfix.html)
* [StackOverflow：Which method of ‘clearfix’ is best?](http://stackoverflow.com/questions/211383/which-method-of-clearfix-is-best)

## Demo

* [Three Columns using Flex](http://codepen.io/discountry/pen/MpYLLg)
* [Three Columns using Grid](https://codepen.io/discountry/pen/VpYRYy)

## Task

* [Three Columns preview](http://codepen.io/discountry/pen/zZxeYQ?editors=1100)
* [Three Columns source code](https://github.com/discountry/my-baidu-ife/blob/master/codes/html&css/3-three-columns.html)

**html**

```html
<div class="container clearfix">
  <div class="left team clearfix">
    <div class="left thumbnail">
      <p>团队logo</p>
      <p>80x80</p>
    </div>
    <p class="right">团队名称</p>
  </div>
  <div class="right staff">
    <div class="thumbnail">
      <p>个人logo</p>
      <p>80x80</p>
    </div>
    <div class="thumbnail">
      <p>个人logo</p>
      <p>80x80</p>
    </div>
    <div class="thumbnail">
      <p>个人logo</p>
      <p>80x80</p>
    </div>
    <div class="thumbnail">
      <p>个人logo</p>
      <p>80x80</p>
    </div>
  </div>
  <div class="main">
    <p>FCC知乎学习小组。</p>
    <p>FCC知乎学习小组是由知乎上学习FCC课程的同学组建起来的团队。</p>
    <p>(以下为简介)</p>
    <p>FreeCodeCamp（以下简称FCC）是全球最火的Web开发学习平台，鼓励Learning by Doing的学习方式。你可以在这里学习到前端、后端、数据可视化等几乎涵盖所有的Web开发知识。通过完成一个个循序渐进的开发小项目，像打游戏闯关一样来学习。你还可以加入聊天室或论坛和同学们交流，还可以加入学习小组，现在全球160多个国家已经有超过1000个学习小组，几乎覆盖了全球所有主要城市，国内各大城市也几乎都有自己的学习小组。</p>
    <p>百度前端技术学院的课程任务是由百度前端工程师专为对前端不同掌握程度的同学设计。我们尽力保证课程内容的质量以及学习难度的合理性，但即使如此，真正决定课程效果的，还是你的每一次思考和实践。</p>
    <p>课程多数题目的解决方案都不是唯一的，这和我们在实际工作中的情况也是一致的。因此，我们的要求不仅仅是实现设计稿的效果，更是要多去思考不同的解决方案，评估不同方案的优劣，然后使用在该场景下最优雅的方式去实现。那些最终没有被我们采纳的方案，同样也可以帮助我们学到很多知识。所以，我们列出的参考资料未必是实现需求所必须的。有的时候，实现题目的要求很简单，甚至参考资料里就有，但是背后的思考和亲手去实践却是任务最关键的一部分。在学习这些资料时，要多思考，多提问，多质疑。相信通过和小伙伴们的交流，能让你的学习事半功倍。</p>
    <p>learning by doing是最高效最有效的学习方法，fcc也为此提供了一个最优的平台，但最后通过这种最好的学习方法，真正能够掌握到多少还是要看你自己的努力，这就好像原来上学的时候同样的老师，同样的教学环境但是有成绩好坏不同的学生一样。不要好高骛远，不要心浮气躁，不要自欺欺人。</p>
  </div>
</div>
```

**css**

```css
body {
  margin: 0;
  padding: 0;
}

p {
  font-size: 13px;
  margin-top: 0;
}

.container {
  margin: 20px;
  padding: 20px;
  background-color: #eee;
  border: #999 1px solid;
}

.team {
  width: 160px;
  padding: 20px;
  background-color: #fff;
  border: #999 1px solid;
}

.main {
  width: auto;
  margin-left: 220px;
  margin-right: 140px;
  padding: 20px;
  background-color: #fff;
  border: #999 1px solid;
}

.staff {
  width: 80px;
  padding: 20px;
  background-color: #fff;
  border: #999 1px solid;
}

.staff .thumbnail {
  margin-top: 15px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 5px;
  background-color: #eee;
  border: #999 1px solid;
}

.thumbnail p:first-child {
  margin-top: 30px;
}

.clearfix {
  overflow: auto;
}

.left {
  float: left;
}

.right {
  float: right;
}

/*响应式*/
@media screen and (max-width:768px) {
  .team,
  .staff,
  .main {
    float: none;
    width: auto;
    margin-bottom: 20px;
  }
  .main {
    margin: 0 auto;
  }
}
```

## Note

* [三栏布局的n种实现](https://segmentfault.com/a/1190000005721963)
* [两栏布局，三栏布局，等高布局，流式布局](http://www.cnblogs.com/jununx/p/3336553.html)
* [Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
* [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

**三栏浮动布局要点**

如果使用浮动来进行三栏布局，则浮动的列要写在固定列的前面：

```html
<div class="container">
    <div style="float: left;" class="team"></div>
    <div style="float: right;" class="staff"></div>
    <div class="main"></div>
</div>
```

**Flex属性说明**

flex属性是`flex-grow`, `flex-shrink` 和 `flex-basis` 的简写，默认值为 `0 1 auto` 后两个属性可选。

该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
