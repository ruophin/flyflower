var commonAction = (function() {

    var __ISDEBUG = false,
        // 接口
        remote = {
            //接口根目录
             _urlRoot: "",
            _traditional: false,
            _doAjax: function(url, data, success, error) {
                error = typeof error === "function" ? error : this.ajaxError;
                return $.ajax({
                    url: commonAction.remote._urlRoot + url,
                    data: data,
                    traditional: commonAction.remote._traditional,
                    dataType: "jsonp",
                    success: function(result) {

                        if (result.success == true || result.status == true) {
                            success && success(result)

                        } else {
                            error && error(result)
                        }
                    },
                    error: function() {
                        error && error({
                            msg: '网络错误，请刷新重试'
                        });
                    }
                });
            },
            _fakeAjax: function(callback, data) {
                return setTimeout(function() {
                    callback(data);
                }, 500);
            },
            ajaxError: function(data) {
                alert(data.msg);
            },

            activecdkey: function(account, code, success, error) {
                if (__ISDEBUG) {
                    return this._fakeAjax(success, {
                        "status": true,
                        "msg": "激活失败~"
                    });
                } else {
                    return this._doAjax('active_cdkey', {
                        account: account,
                        code: code
                    }, success, error);
                }
            }
        },

        _fn = {
            initScreen: function(callback) { //初始化html  font-size
                //$("html").css("font-size", document.documentElement.clientHeight / document.documentElement.clientWidth < 1.5 ? (document.documentElement.clientHeight / 603 * 312.5 + "%") : (document.documentElement.clientWidth / 375 * 312.5 + "%")); //单屏全屏布局时使用,短屏下自动缩放
                $("html").css("font-size", document.documentElement.clientWidth / 375 * 312.5 + "%"); //长页面时使用,不缩放
                if (callback) callback();
            },
            onorientationchange: function() {
                if ($("#forhorview").length == 0) {
                    $("body").append("<div id='forhorview'><p>推荐使用竖屏浏览哦~</p></div>")
                }

                function _onorientationchange(e) {
                    if (window.orientation == 90 || window.orientation == -90) {
                        $("#forhorview").css("display", "block"); //显示竖屏浏览提示框
                    } else { //竖屏下恢复默认显示效果                      
                        var st = setTimeout(_fn.initScreen, 300);
                        $("#forhorview").css("display", "none");
                    }
                }

                window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(e) {
                    _onorientationchange(e);
                }, false);
            },
            preloadImg: function() {
                var loadList = [],
                    list = $('#preload_list img');

                for (var i = list.length; i--;) {
                    loadList.push(list.eq(i).data('src'));
                }
                var Loadmark = $('#LoadingMark');

                if (loadList.length) {
                    fn.imgLoader.init(loadList, function() {
                        if (window.Page) {
                            new Page();
                        }
                        Loadmark.addClass('remove');
                    }, function(percent) {
                        Loadmark.find('.value').text(percent + '%')
                        Loadmark.find('i').width(percent + '%')
                    }).load();
                } else {
                    Loadmark.remove();

                    if (window.Page) {
                        new Page();
                    }
                }
            },
            fixList: function() {
                $('.newsList').each(function(i, n) {
                    var _list = $(n);
                    var newsEls = _list.find('li'),
                        text,
                        textLength = 20,
                        rows = 4;

                    textLength = _list.attr('data-textLength') === undefined ? textLength : _list.attr('data-textLength');
                    rows = _list.attr('data-rows') === undefined ? rows : _list.attr('data-rows');

                    if (newsEls.length >= rows) {
                        _list.find(".newsMore").show();
                    } else {
                        _list.find(".newsMore").hide();
                    }

                    function fixLength(str) {

                        if (str.length < textLength) {
                            return str;
                        } else {
                            return str.substr(0, textLength - 2) + '...';
                        }
                    }

                    for (var i = newsEls.length; i--;) {
                        text = $.trim(newsEls.eq(i).find('a').html());
                        newsEls.eq(i).find('a').html(fixLength(text));
                    }
                })
            },
            fixBanner: function() {
                var len = $("#slideBox .bd li").length;
                var str = "";
                for (var i = 0; i < len; i++) {
                    str += "<li></li>";
                }
                $("#slideBox .hd ul").html(str);

                $(".slideTxtBox ul").each(function(i, n) {
                    if ($(n).find("li").length < 4) {
                        $(n).find(".more").hide();
                    }
                });
            },
            bindPrototype: function() {
                Number.prototype.pad2 = function() {
                    return this.pad();
                };

                Number.prototype.pad = function(length) {
                    if (!length) length = 2;
                    var val = String(this);
                    for (var i = 0, zeros = ''; i < (length - val.length); i++) {
                        zeros += '0';
                    }
                    return zeros + val;
                }

                Date.prototype.format = function(fmt) {
                    var it = new Date();
                    var it = this;
                    var M = it.getMonth() + 1,
                        H = it.getHours(),
                        m = it.getMinutes(),
                        d = it.getDate(),
                        s = it.getSeconds();
                    var n = {
                        'yyyy': it.getFullYear(),
                        'yy': String(it.getFullYear()).substr(2),
                        'MM': M.pad2(),
                        'M': M,
                        'dd': d.pad2(),
                        'd': d,
                        'HH': H.pad2(),
                        'H': H,
                        'mm': m.pad2(),
                        'm': m,
                        'ss': s.pad2(),
                        's': s,
                        'fff': it.getMilliseconds().pad(3)
                    };
                    return fmt.replace(/([a-zA-Z]+)/g, function(s, $1) {
                        return n[$1] === undefined ? $1 : n[$1];
                    });
                };
            }
        },

        fn = {
            imgLoader: {

                _srcs: [],
                _onLoaded: null,
                _onLoading: null,

                load: function() {

                    var srcs = this._srcs,
                        l = srcs.length,
                        loadCount = 0,
                        that = this,
                        tmp,
                        i;

                    function onImgLoad() {
                        if (++loadCount === l) {
                            that._onLoaded && that._onLoaded();
                        } else {
                            that._onLoading && that._onLoading(Math.floor(loadCount / l * 100));
                        }
                    }

                    if (!l) {
                        that._onLoaded && that._onLoaded();
                        return this;
                    }

                    for (i = l; i--;) {
                        tmp = new Image();
                        tmp.src = srcs[i];
                        tmp.onload = onImgLoad;
                    }

                    return this;
                },

                init: function(arrSrcs, onLoaded, onLoading) {

                    this._srcs = arrSrcs.slice(0);
                    this._onLoaded = onLoaded;
                    this._onLoading = onLoading;

                    return this;
                }
            },
            validPhone: function(num) {
                return /^(13|14|15|17|18)\d{9}$/.test(num);
            },
            validAccount: function(name) {
                return !(!name || !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ig.test(name));
            },
            validMail: function(name) {
                return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(name);
            },
            queryString: function(key, href) {
                href = href === undefined ? location.search : href;
                var m = new RegExp("(?:&|/?)" + key + "=([^&$]+)").exec(href);
                return m ? m[1] : '';
            },
            stringFormat: function(obj) {
                var type = typeof obj;
                var args = arguments;
                var format;
                switch (type) {
                    case 'string':
                        format = obj.replace(/({(\d+?)})/g, function(s, $1, $2) {
                            return args[$2 * 1.0 + 1];
                        });
                        break;
                }
                return format;
            },
            isWeiXin: function() {
                var ua = navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        browser = {
            versions: function() {
                var u = navigator.userAgent,
                    app = navigator.appVersion;
                return { //移动终端浏览器版本信息
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        },
        debug = function(isdebug) {
            if (isdebug !== undefined) {
                __ISDEBUG = !!isdebug;
            }
            return __ISDEBUG;
        },
        init = function() {
            //_fn.initScreen(); //pc中不需要
            //_fn.onorientationchange(); //pc中不需要
            _fn.preloadImg();
            //_fn.fixList();
            _fn.fixBanner();
            _fn.bindPrototype();
        };

    return {
        browser: browser,
        debug: debug,
        remote: remote,
        fn: fn,
        init: init
    }
})();
var ca = commonAction;
$(function() {
    commonAction.init();
});
