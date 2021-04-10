var last_page = document.html;　
var animate_now = false;
// ready - function() - load - onload
// 直接隐藏 $('*').hide();

window.alert = function(msg, callback) {
    var div = document.createElement("div");
    div.innerHTML = "<style type=\"text/css\">" +
        ".nbaMask { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); }                                                                                                                                                                       " +
        ".nbaMaskTransparent { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; }                                                                                                                                                                                            " +
        ".nbaDialog { position: fixed; z-index: 5000; width: 80%; max-width: 300px; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #fff; text-align: center; border-radius: 8px; overflow: hidden; opacity: 1; color: white; }" +
        ".nbaDialog .nbaDialogHd { padding: .2rem .27rem .08rem .27rem; }                                                                                                                                                                                                                         " +
        ".nbaDialog .nbaDialogHd .nbaDialogTitle { font-size: 17px; font-weight: 400; }                                                                                                                                                                                                           " +
        ".nbaDialog .nbaDialogBd { padding: 0 .27rem; font-size: 15px; line-height: 1.3; word-wrap: break-word; word-break: break-all; color: #000000; }                                                                                                                                          " +
        ".nbaDialog .nbaDialogFt { position: relative; line-height: 48px; font-size: 17px; display: -webkit-box; display: -webkit-flex; display: flex; }                                                                                                                                          " +
        ".nbaDialog .nbaDialogFt:after { content: \" \"; position: absolute; left: 0; top: 0; right: 0; height: 1px; border-top: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); }               " +
        ".nbaDialog .nbaDialogBtn { display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; color: #09BB07; text-decoration: none; -webkit-tap-highlight-color: transparent; position: relative; margin-bottom: 0; }                                                                       " +
        ".nbaDialog .nbaDialogBtn:after { content: \" \"; position: absolute; left: 0; top: 0; width: 1px; bottom: 0; border-left: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleX(0.5); transform: scaleX(0.5); }             " +
        ".nbaDialog a { text-decoration: none; -webkit-tap-highlight-color: transparent; }" +
        "</style>" +
        "<div id=\"dialogs2\" style=\"display: none\">" +
        "<div class=\"nbaMask\"></div>" +
        "<div class=\"nbaDialog\">" +
        "	<div class=\"nbaDialogHd\">" +
        "		<strong class=\"nbaDialogTitle\"></strong>" +
        "	</div>" +
        "	<div class=\"nbaDialogBd\" id=\"dialog_msg2\"></div>" +
        "	<div class=\"nbaDialogHd\">" +
        "		<strong class=\"nbaDialogTitle\"></strong>" +
        "	</div>" +
        "	<div class=\"nbaDialogFt\">" +
        "		<a href=\"javascript:;\" class=\"nbaDialogBtn nbaDialogBtnPrimary\" id=\"dialog_ok2\">确定</a>" +
        "	</div></div></div>";
    document.body.appendChild(div);

    var dialogs2 = document.getElementById("dialogs2");
    dialogs2.style.display = 'block';

    var dialog_msg2 = document.getElementById("dialog_msg2");
    dialog_msg2.innerHTML = msg;

    // var dialog_cancel = document.getElementById("dialog_cancel");
    // dialog_cancel.onclick = function() {
    // dialogs2.style.display = 'none';
    // };
    var dialog_ok2 = document.getElementById("dialog_ok2");
    dialog_ok2.onclick = function() {
        dialogs2.style.display = 'none';
        callback();
    };
};

$(document).ready(function() { 　　
    // 准备中　


    // 控制全体链接 不跳转
    $("a[id!='online_game']").attr("href", "javascript:void(0);");
    $("a[id!='online_game']").click(function() {
        alert("馒头骑士提醒您：本链接还在开发当中~");
    });
    $("#online_game").attr("href", "./game_set/SLIMU RUSH.html");


    // 背景音乐样式动态改变
    $("#bg_music").mouseenter(function() {
        // 先初始化状态 因为css总是在动态刷新其原有css样式.
        $("#bg_audio").css("opacity", "0");
        $("#bg_audio").stop().animate({
            opacity: "1"
        }, speed = "slow", easing = "swing");


    });

    $("#bg_music").mouseleave(function() {
        $("#bg_audio").stop().animate({
            opacity: "0"
        }, speed = "slow", easing = "swing");
    });


});

$(function() { 　　　
    //执行的一般函数　
    　　});

$(window).load(function() { 　
    // 加载中　　　
    　});


function animate_reloads() {

    if (animate_now == false) {
        // 动画开关器= =  低制作力
        $("#image_set").stop().animate({
            height: "+=8px",
            width: "+=8px",
        }, 200, easing = "swing", function() {
            $("#image_set").css("background-color", "gold");
            animate_now = true;
            animate_reloads();
        });
    } else {
        $("#image_set").stop().animate({
            height: "-=8px",
            width: "-=8px",
        }, 200, easing = "swing", function() {
            $("#image_set").css("background-color", "skyblue");
            animate_now = false;
            animate_reloads();
        });
    }
}


// 对于一些函数 需要在body中才能执行。所以要onload方法加载

window.onload = function() {
    // 加载中 如果onload有指定其他函数则不执行

    // listener永远的神
    var audioplayer = document.querySelector('audio#bg_audio');
    audioplayer.addEventListener('play', function() {
        console.log("正在播放");
        animate_reloads();
    });
    audioplayer.addEventListener('pause', function() {
        console.log("停止了");
        $("#image_set").animate().stop();
        // 重置大小
        $("#image_set").css({
            "height": "50px",
            "width": "50px",
            "background-color": "rgba(0, 0, 0, 0)"
        });
    });

    // 点击前往顶部
    var upper_set = document.querySelector('img#upper_img');
    upper_set.addEventListener('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'normal');
    });

}