$(function () {
  //現在のマス　サイコロの結果　加算していく
  var mathPosition = 0;
  var mathPositionId = "math" + mathPosition;
  //ゴールまでのマス サイコロの結果　減少していく
  var goalPosition = 100;
  //サイコロを振った結果
  var min = 1;
  var max = 6;
  //サイコロの画像
  // var resultImage = "1.png";
  // //サイコロを振るのが何回目か
  var diceRollCount = 1;
  // コマが移動する数
  var moveCount;

  //サイコロの結果を取得
  function diceAction() {
    diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
    // alert(diceResult);
    $(`img`).attr(`src`, `${diceResult}.png`);
  }

  // マスの位置を取得,コマの移動
  function position() {
    if (mathPosition < 100) {
      mathPosition = mathPosition + diceResult;
      // alert(mathPosition);
      // コマの移動
      document.getElementById(mathPositionId).innerHTML = "";
      mathPositionId = "math" + mathPosition;
      document.getElementById(
        mathPositionId
      ).innerHTML = `<i id="nowPosition" i class="fas fa-horse"></i>`;
      // 画面を自動スクロール
      let element = document.getElementById("nowPosition");
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでのマスを取得、表示
      goalPosition = goalPosition - diceResult;
      // alert(goalPosition);
      $(`＃toGoal`).text(`ゴールまであと${goalPosition}マス`);
      // サイコロを振った回数を追加、表示
      diceRollCount++;
      // alert(diceRollCount);
      $(`＃count`).text(`${diceRollCount}投目`);
    } else {
      // // ゴール コマを変化させる、コメント表示
      // document.getElementById(mathPositionId).innerHTML = "";
      // mathPositionId = "math" + mathPosition;
      // document.getElementById(
      //   mathPositionId
      // ).innerHTML = `<i id="nowPosition" i class="fas fa-chess-knigh"></i>`;
      $(`＃toGoal`).text(`ゴール！！`);
    }
  }

  // サイコロを振る
  $("#dicerollBtn").click(function () {
    diceAction(); //サイコロの結果を取得
    position(); // マスの位置を取得、コマの移動
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
