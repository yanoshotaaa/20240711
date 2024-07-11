$(function() {
    // セルをマウスオーバー
    $("td").hover(function() {
        //親要素にtargetクラスを追加
        $(this).parent().addClass("target");

        //親要素から見て、自分が何番目の子要素なのかを調べる
        var myIndex = $(this).index();

        // myIndexに１プラス
        myIndex ++;

        //かくぎょうのmyindex番目の要素にtargetクラスを追加する
        $("td:nth-child(" + myIndex + ")").addClass("target");
    }, function() {
        //マウスアウト時にtargetクラスを削除
        $(".target").removeClass("target");
    });
});