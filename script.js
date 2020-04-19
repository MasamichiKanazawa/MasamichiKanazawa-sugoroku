$(function () {
  //現在のマス　サイコロの結果を加算していく
  var mathPosition = 0;
  var mathPositionId = "math" + mathPosition;
  //ゴールまでのマス
  var goalPosition = 20;
  //サイコロを振った結果
  var min = 1;
  var max = 6;
  // var diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
  //サイコロの画像
  var resultImage = "1.png";
  //サイコロを振るのが何回目か
  var diceRollCount = 1;
  // コマが移動する数
  var moveCount;

  //サイコロの結果を取得
  function diceAction() {
    diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
    $(`img`).attr(`src`, `${diceResult}.png`);
  }

  // マスの位置を取得1,駒の移動
  function position() {
    mathPosition = mathPosition + diceResult;
    document.getElementById(math0).innerHTML = "";
    document.getElementById(mathPositionId).innerHTML = "";
    document.getElementById(
      mathPositionId
    ).innerHTML = `<i id="nowPosition" i class="fas fa-horse"></i>`;
  }

  // サイコロを振る
  $("#dicerollBtn").click(function () {
    diceAction(); //サイコロの結果を取得
    position(); // マスの位置を取得
    // function move();// 駒を動かす
    // diceAnimation();//サイコロの動き
  });

  //サイコロの動き
  // function diceAnimation() {
  //   var pics_src = new Array(
  //     "1.png",
  //     "2.png",
  //     "3.png",
  //     "4.png",
  //     "5.png",
  //     "6.png"
  //   );
  //   var num = -1;

  //   slideshow_timer();

  //   function slideshow_timer() {
  //     if (num == 2) {
  //       num = 0;
  //     } else {
  //       num++;
  //     }
  //     document.getElementById("resultImage").src = pics_src[num];
  //     setTimeout("slideshow_timer()", 50);
  //   }
  // }
});
