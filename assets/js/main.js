/*カルーセルスライド設定*/
$(function () {
  $(".slide-items").slick({
    autoplay: true, // 自動再生
    speed: 3000, // スライドが流れる速度
    infinite: true // 無限スライド
  });
});
