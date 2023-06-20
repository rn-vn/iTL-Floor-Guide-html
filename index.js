'use strict';

/*
 * 動画の埋め込み：iTL案内
 * JS：最初の画面にiTLの写真を移り変わり形式で載せる
 */

var img = new Array("images/正面玄関.jpg")

var element = document.getElementById("slideshow");
var count = -1;
imgTimer();

function imgTimer() {
  count++;
  if(count == img.length) count = 0;
  element.src = img[count];
  setTimeout("imgTimer()",2000);
}