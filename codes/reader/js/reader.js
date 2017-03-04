/*
 * @Author: Archer
 * @Date:   2017-02-26 16:01:20
 * @Last Modified by:   Archer
 * @Last Modified time: 2017-03-03 12:10:12
 * @email:  zxchcyc@gmail.com
 * @github: https://github.com/zxchcyc
 * @blog:   https://zxchcyc.github.io/
 */

'use strict';
(function() {
    var Util = (function() {
        var prefix = 'html5_reader_';
        var StorageGetter = function(key) {
            console.log("StorageGetter");
            return localStorage.getItem(prefix + key);
        }
        var StorageSetter = function(key, val) {
            console.log("StorageSetter");
            return localStorage.setItem(prefix + key, val);
        }

        var getBSONP = function(url, callback) {
            return $.jsonp({
                url: url,
                cache: true,
                callback: 'duokan_fiction_chapter',
                success: function(result) {
                    // debugger
                    var data = $.base64.decode(result);
                    var json = decodeURIComponent(escape(data));
                    callback(json);
                }
            })
        }

        return {
            StorageSetter: StorageSetter,
            StorageGetter: StorageGetter,
            getBSONP: getBSONP
        }
    })();

    var Dom = {
        top_nav: $('#top-nav'),
        bottom_nav: $('.bottom_nav'),
        font_container: $('.font-container'),
        font_button: $('#font-button')
    }

    var Win = $(window);
    var Doc = $(document);
    var readerModel;
    var readerUI;
    var RootContainer = $('#fiction_chapter_container');
    var initFontSize = Util.StorageGetter('font_size') || 14;
    initFontSize = parseInt(initFontSize);
    // console.log(initFontSize);
    // if (!initFontSize) {
    //   initFontSize = 14;
    // }
    RootContainer.css('font-size', initFontSize);

    function main() {
        //todo 整个项目的入口函数

        readerModel = ReaderModel();
        readerUI = ReaderBaseFrame(RootContainer);
        readerModel.init(function(data) {
            readerUI(data);
        });
        EventHandler();

    }

    function ReaderModel() {
        //todo 实现和阅读器相关的数据交互的方法

        var Chapter_id;
        var ChapterTotal;

        var init = function(UIcallback) {
            // getFictionInfo(function() {
            //
            //   getCurChapterContent(Chapter_id, function(data) {
            //     //todo
            //     UIcallback && UIcallback(data);
            //   })
            // })

            getFictionInfoPromise().then(function() {
                return getCurChapterContentPromise();
            }).then(function(data) {
                UIcallback && UIcallback(data);
            });
        }

        var getFictionInfoPromise = function() {
            return new Promise(function(resolve, reject) {
                $.get('data/chapter.json', function(data) {
                    //todo获得当前章节的内容
                    // debugger
                    // Util.StorageGetter('last_chapter_id');
                    if (data.result == 0) {
                        Chapter_id = Util.StorageGetter('last_chapter_id') || data.chapters[1].chapter_id;
                        ChapterTotal = data.chapters.length;
                        resolve();
                    } else {
                        reject();
                    }

                }, 'json');

            });
        }

        var getFictionInfo = function(callback) {
            $.get('data/chapter.json', function(data) {
                //todo获得当前章节的内容
                // debugger
                // Util.StorageGetter('last_chapter_id');

                Chapter_id = Util.StorageGetter('last_chapter_id') || data.chapters[1].chapter_id;
                ChapterTotal = data.chapters.length;

                callback && callback();
            }, 'json');
        }

        var getCurChapterContentPromise = function() {
            return new Promise(function(resolve, reject) {
                $.get('data/data' + Chapter_id + '.json', function(data) {
                    if (data.result == 0) {
                        var url = data.jsonp;
                        Util.getBSONP(url, function(data) {
                            resolve(data);
                        });
                    } else {
                        reject({
                            msg: 'fail'
                        });
                    }
                }, 'json');

            });
        }

        var getCurChapterContent = function(chapter_id, callback) {
            $.get('data/data' + chapter_id + '.json', function(data) {
                if (data.result == 0) {
                    var url = data.jsonp;
                    Util.getBSONP(url, function(data) {
                        callback && callback(data);
                    });
                }
            }, 'json')
        }

        var prevChapter = function(UIcallback) {
            Chapter_id = parseInt(Chapter_id, 10);
            if (Chapter_id == 0) {
                return;
            }
            --Chapter_id;
            getCurChapterContent(Chapter_id, UIcallback);
            Util.StorageSetter('last_chapter_id', Chapter_id);
        }

        var nextChapter = function(UIcallback) {
            Chapter_id = parseInt(Chapter_id, 10);
            console.log(ChapterTotal);
            if (Chapter_id == ChapterTotal) {
                return;
            }
            ++Chapter_id;
            getCurChapterContent(Chapter_id, UIcallback);
            Util.StorageSetter('last_chapter_id', Chapter_id);

        }


        return {
            init: init,
            prevChapter: prevChapter,
            nextChapter: nextChapter
        }
    }

    function ReaderBaseFrame(container) {
        //todo 渲染基本的UI结构
        //
        function parseChapterData(jsonData) {
            var jsonObj = JSON.parse(jsonData);
            var html = '<h4>' + jsonObj.t + '</h4>';
            for (var i = 0; i < jsonObj.p.length; i++) {
                html += '<p>' + jsonObj.p[i] + '</p>';
            }

            return html;
        }
        return function(data) {
            container.html(parseChapterData(data));
            Win.scrollTop(0);
        }

    }

    function EventHandler() {
        //todo 交互的事件绑定
        //touch
        //zepto tap
        //4.0 click 300ms
        $('#action_mid').click(function() {
            /* Act on the event */
            if (Dom.top_nav.css('display') == 'none') {
                Dom.bottom_nav.show();
                Dom.top_nav.show();
            } else {
                Dom.bottom_nav.hide();
                Dom.top_nav.hide();
                Dom.font_container.hide();
                Dom.font_button.removeClass('current');
            }
        });

        $('#font-button').click(function(event) {
            if (Dom.font_container.css('display') == 'none') {
                Dom.font_container.show();
                Dom.font_button.addClass('current');
            } else {
                Dom.font_container.hide();
                Dom.font_button.removeClass('current');

            }

        });

        $('night-button').click(function(event) {
            //todo 触发背景切换事件

        });

        $('#large-font').click(function(event) {
            /* Act on the event */
            if (initFontSize > 20) {
                return;
            }
            initFontSize += 1;
            RootContainer.css('font-size', initFontSize);
            Util.StorageSetter('font_size', initFontSize);
        });

        $('#samll-font').click(function(event) {
            /* Act on the event */
            if (initFontSize < 12) {
                return;
            }
            initFontSize -= 1;
            RootContainer.css('font-size', initFontSize);
            Util.StorageSetter('font_size', initFontSize);

        });


        $('#prev_button').click(function(event) {
            readerModel.prevChapter(function(data) {
                readerUI(data);
            });
        });


        $('#next_button').click(function(event) {
            readerModel.nextChapter(function(data) {
                readerUI(data);
            });
        });

        Win.scroll(function(event) {
            /* Act on the event */
            Dom.bottom_nav.hide();
            Dom.top_nav.hide();
            Dom.font_container.hide();
            Dom.font_button.removeClass('current');
        });
    }

    main();

})();
