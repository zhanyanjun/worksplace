---
layout: post
title: 任务二：零基础HTML及CSS编码（一）
category: html&css
---

## Lesson

* [任务二：零基础HTML及CSS编码（一）](http://ife.baidu.com/course/detail/id/92)

## References

* [MDN CSS 入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started)
* [CSS Navigation Bar](https://www.w3schools.com/css/css_navbar.asp)

## Task

* [HTML & CSS preview](https://codepen.io/discountry/pen/QpwmMb?editors=1100)
* [HTML & CSS source code](https://github.com/discountry/my-baidu-ife/blob/master/codes/html&css/2-html-css.html)

**html**

```html
    <header>
        <nav>
            <ul>
                <li class="logo"><img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png" alt="" /></li>
                <li class="right">
                    <ul>
                        <li><a href="">首页</a></li>
                        <li><a href="">博客</a></li>
                        <li><a href="">关于</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <H1>This is h1 title</H1>
        <h2>This is h2 title</h2>
        <h3>This is h3 title</h3>
        <h4>This is h4</h4>
        <h5>This is h5</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat earum similique sunt, facilis eos, neque vitae aut magnam, eius saepe culpa aliquid iure soluta expedita amet incidunt tempora! Quasi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At <a href="">perspiciatis</a> eveniet, doloribus odit hic magni <b>excepturi</b> harum nam sint error quos <strong>reprehenderit</strong> tempora! Maxime, quod, consequuntur. <i>Minus eius et aliquid!</i></p>
        <p>Lorem <small>ipsum dolor sit amet</small>, consectetur adipisicing elit. Quia, similique. Esse dolor placeat <em>quisquam ut temporibus voluptatum</em>, doloribus expedita, saepe provident architecto iusto beatae obcaecati modi cum excepturi.
            <abbr title="attribute">Est, esse.</abbr>
        </p>
    </div>
    <div class="container">
        <!--address-->
        <address>
            You can contact author at <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.
            <br> If you see any bugs, please <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.
            <br> You may also want to visit us:
            <br> Mozilla Foundation
            <br> 1981 Landings Drive
            <br> Building K
            <br> Mountain View, CA 94043-0801
            <br> USA
        </address>
        <!--area-->
        <map name="primary">
            <area shape="circle" coords="75,75,75" onclick="alert('left')">
            <area shape="circle" coords="275,75,75" onclick="alert('right')">
        </map>
        <img usemap="#primary" src="http://placehold.it/350x150" alt="350 x 150 pic">
    </div>
    <div class="container">
        <!--article-->
        <article class="film_review">
            <header>
                <h2>Jurassic Park</h2>
            </header>
            <section class="main_review">
                <p>Dinos were great!</p>
                <aside>
                    <p>
                        The movie earned $87 million during its initial release.
                    </p>
                </aside>
            </section>
            <article class="user_review">
                <p>I agree, dinos are my favorite.</p>
                <footer>
                    <p>
                        Posted on
                        <time datetime="2015-05-17 19:00">May 17</time> by Tom.
                    </p>
                </footer>
            </article>
            </section>
            <footer>
                <p>
                    Posted on
                    <time datetime="2015-05-15 19:00">May 15</time> by Staff.
                </p>
            </footer>
        </article>
        <!-- Simple audio playback -->
        <audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" controls="controls">
            Your browser does not support the <code>audio</code> element.
        </audio>
        <p dir="ltr">This arabic word
            <bdi>ARABIC_PLACEHOLDER</bdi> is automatically displayed right-to-left.</p>
        <p>This text will go left to right.</p>
        <p>
            <bdo dir="rtl">This text will go right to left.</bdo>
        </p>
        <blockquote cite="http://developer.mozilla.org">
            <p>This is a quotation taken from the Mozilla Developer Center.</p>
        </blockquote>
        <button name="button">Click me</button>
        <br />
        <canvas id="canvas" width="300" height="300">
            An alternative text describing what your canvas displays.
        </canvas>
        <p>More information can be found in
            <cite>[ISO-0000]</cite>.</p>
        <p>This is how we declare a Javascript variable:
            <br/>
                <code>var i = 0;</code>
        </p>
    </div>
    <div class="container">
        <p>Table with colgroup and col</p>
        <table>
            <caption>Awesome caption</caption>
            <colgroup>
                <col style="background-color: #0f0">
                <col span="1">
                <col style="background-color: red">
            </colgroup>
            <tr>
                <th>Lime</th>
                <th>Lemon</th>
                <th>Orange</th>
            </tr>
            <tr>
                <td>Green</td>
                <td>Yellow</td>
                <td>Orange</td>
            </tr>
        </table>
        <p>A common form that includes input tags</p>
        <form action="#" method="get">
            <div class="form-control">
                <label for="fname">First name:</label>
                <input id="fname" type="text">
            </div>
            <div class="form-control">
                <label for="lname">Last name: </label>
                <input id="lname" type="text">
            </div>
            <div class="form-control">
                <label for="email">E-mail: </label>
                <input id="email" type="email">
            </div>
            <input type="submit" value="Submit">
        </form>
        <p>Type the following in the Run dialog:
            <kbd>cmd</kbd>
            <br />Then click the OK button.</p>
        <!-- Form with fieldset, legend, and label -->
        <form action="" method="post">
            <fieldset>
                <legend>Title</legend>
                <input type="radio" id="radio">
                <label for="radio">Click me</label>
            </fieldset>
        </form>
    </div>
    <div class="container">
        <p>你<em>开始</em>学习HTML了.</p>
        <article>
            <h3>This is a title.</h3>
        </article>
        <div class="thumbnail">
            <p class="caption">百度Logo</p>
            <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png" alt="" />
        </div>
    </div>
    <footer>
        <p>Copyright &copy;
            <script type="text/javascript">
            document.write(new Date().getFullYear());
            </script> All rights reserved, Discountry</p>
    </footer>
```

**css**

```css
body {
  margin: 0;
  padding: 0;
  background-color: #efefef;
}

header nav {
  background-color: black;
  height: 40px;
}

header nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 40px
}

.logo {
  width: 80px;
  float: left;
}

.logo img {
  height: 40px;
}

.right {
  float: right;
}

.right li {
  float: left;
}

li a {
  display: block;
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 10px;
  padding: 14px 16px;
  text-decoration: none;
}

div.form-control {
  margin: 0;
  padding: 0;
  padding-bottom: 1.25em;
}

div.form-control label {
  margin: 0;
  padding: 0;
  display: block;
  font-size: 100%;
  padding-top: .1em;
  padding-right: .25em;
  width: 6em;
  text-align: right;
  float: left;
}

.container {
  margin: 2rem;
  padding: 2rem;
  background-color: white;
  border: #9e9e9e 1px solid;
  box-shadow: #000000 1px 1px 1px;
}

.thumbnail {
  text-align: center;
  font-size: 12px;
  border: #9e9e9e 1px solid;
  width: 20rem
}

.thumbnail img {
  width: 15rem;
}

footer {
  background-color: black;
  color: white;
  height: 50px;
  text-align: center;
  padding: 2px 5px;
}
```

## Note

**css for form input & label**

```html
<div class="form-control">
    <label for="fname">First name:</label>
    <input id="fname" type="text">
</div>

<style type="text/css">
    div.form-control {
      margin: 0;
      padding: 0;
      padding-bottom: 1.25em;
    }

    div.form-control label {
      margin: 0;
      padding: 0;
      display: block;
      font-size: 100%;
      padding-top: .1em;
      padding-right: .25em;
      width: 6em;
      text-align: right;
      float: left;
    }
</style>
```

**copyright time auto update.**

```js
document.write(new Date().getFullYear());
```

