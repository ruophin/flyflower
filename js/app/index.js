nie.define('index', function() {
    var videoModule = nie.require("nie.util.videoV2"),
        PopDialog = nie.require("nie.util.PopDialog"),
        niedownload = nie.require("nie.util.niedownload"),
        shareMoudel = nie.require("nie.util.shareV5"),
        userAgent = navigator.userAgent,
        isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1,
        demo1,demo2;
    if (isIE) {
        $('.layer').addClass('ie')
        $('.piaoluo').hide()
        $('.flyflower').show()
    }
    var fn = {
        showPop: function(className){
            $('.Layer').addClass("on");
            var obj = $('.' + className);
            obj.show();
            var popTop = obj.height() / 2;
            var popLeft = obj.width()/2; 
            obj.css({'margin-top': -popTop,'margin-left': -popLeft});            
            // $(document.body).css("overflow-y","hidden"); // 阻止页面滑动
        },
        hidePop: function() {
            $('.pop').hide();
            $('.Layer').removeClass("on");
            // $(document.body).css("overflow-y","auto");
        },
        shareFn: function(){
            var shareUrl = $("#share_url").html(),
                sharePic = $("#share_pic").attr("src"),
                shareTitle = $("#share_title").html(),
                shareTxt = $("#share_desc").html();
            shareMoudel({
                fat: "#NIE-share", //分享组件插入父级（dom或选择器），默认："#NIE-share"
                type: 1, //分享组件类别，默认:1（1：小icon，2：大icon，3：右侧滚动条分享，4：图片分享，5：文本分享，6：带文字的小icon）
                defShow: [23, 22, 2], //默认展示的分享按钮
                title: shareTitle, //分享的标题,默认：当前页面的title
                //url: shareUrl, //分享的链接，默认：当前页面的url
                img: sharePic, //分享的图片，默认：null
                content: shareTxt //分享的正文内容，只有部分平台支持。默认：当前页面的title
            });
        },
        yingxiaoFn: function(){
            function rand(num) {
                return Math.floor(Math.random() * num) + 1;
            }
            $("body").append("<iframe src='" + $("#js_yingxiao").html() + "&cache=" + rand(9999999) + "&pre=" + escape(document.referrer) + "' width='0' height='0' style='display: none'></iframe>")
        },
        slide: function() {
            $('.new-slide').slide({
                mainCell:".bd ul",
                defaultIndex:1,
                autoPlay:true,
                delayTime: 1000,
                interTime:'2500',
                startFun:function(i){
                    $('.new-slide .bd li').eq(i).addClass('on').siblings().removeClass('on')
                }
            })
        },
        parallaxPic: function(){
            if (!isIE) {
                var roleScene = document.getElementById('wrap'),
                    parallax = new Parallax(roleScene);
            }
        },
        piaoluo: function() {
            var FallingPetals = wy.effect.FallingPetals;
            demo1 = new FallingPetals($('#piaoluo_a'), {
                images: ['img/hb_l1.png', 'img/hb_l2.png', 'img/hb_l3.png', 'img/hb_l4.png', 'img/hb_l5.png'],
                count: 15, // 花瓣数量
                rotation: true, // 花瓣可以旋转
                direction: -1, // 1：从左向右飘；-1：从右向左飘
                speedRange: [3, 2], // 调节横向速度范围 （值越大越快）
                fallingConstance: 3, // 调节纵向掉落速度 （值越大越快）
                onClick: function($img) { // 任意花瓣的点击事件
                }
            });
            demo2 = new FallingPetals($('#piaoluo_b'), {
                images: ['img/hb_h1.png', 'img/hb_h2.png', 'img/hb_h3.png', 'img/hb_h4.png', 'img/hb_h5.png'],
                count: 15, // 花瓣数量
                rotation: true, // 花瓣可以旋转
                direction: 1, // 1：从左向右飘；-1：从右向左飘
                speedRange: [3, 2], // 调节横向速度范围 （值越大越快）
                fallingConstance: 3, // 调节纵向掉落速度 （值越大越快）
                onClick: function($img) { // 任意花瓣的点击事件
                }
            });
            demo1.start();
            demo2.start();
        },
        bindFn: function(){

        },
        init: function(){
            var that = this;  
            that.shareFn();
            that.bindFn();
            that.slide();
            that.piaoluo();
            setTimeout(that.parallaxPic, 200);
        }
    };
    fn.init();
})
nie.config.stats.clickStats = true;
nie.config.stats.clickStatsPrecent = 1;
nie.config.copyRight.setWhite();
