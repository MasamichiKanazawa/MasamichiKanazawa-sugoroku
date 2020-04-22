$(function () {
  // プレイヤー
  var player = 1;
  //現在のマス　サイコロの結果　減少していく,イベントの結果　増減していく
  var mathPosition = 0;
  var mathPositionId = "math" + mathPosition;
  //ゴールまでのマス サイコロの結果　減少していく,イベントの結果　増減していく
  var goalPosition = 100;
  //サイコロを振った結果
  var min = 1;
  var max = 6;
  // //サイコロを振るのが何回目か 加算していく
  var diceRollCount = 1;
  // コマが移動する数（イベント用）
  var moveCount;
  var minMove = 1;
  var maxMove = 4;

  //　①サイコロの結果を取得
  const diceAction = {
    [player]: () => {
      diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
      $(`img`).attr(`src`, `${diceResult}.png`);
      // alert(diceResult);
      // サイコロを振った回数を追加、表示
      diceRollCount++;
      $("#count").text(`${diceRollCount}投目`);
      // alert(diceRollCount);
      // イベント表示リセット
      $("#eventText").text(``);
      // player = player * -1;
    },
  };

  // ②マスの位置を取得,コマの移動
  const position = {
    [player]: () => {
      // マスの位置を取得
      mathPosition = mathPosition + diceResult;
      goalPosition = goalPosition - diceResult;
      alert(mathPosition);

      if (mathPosition < 100) {
        // コマの移動
        document.getElementById(mathPositionId).innerHTML = "";
        mathPositionId = "math" + mathPosition;
        document.getElementById(
          mathPositionId
        ).innerHTML = `<i id="nowPosition" i class="fas fa-horse"></i>`;
        // 画面を自動スクロール
        document
          .getElementById("nowPosition")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを表示
        $("#toGoal").text(`ゴールまであと${goalPosition}マス`);
      } else {
        //ゴール コマを変化させる、コメント表示
        document.getElementById(mathPositionId).innerHTML = "";
        mathPosition = 100;
        mathPositionId = "math100";
        document.getElementById(
          mathPositionId
        ).innerHTML = `<i id="nowPosition" i class="fas fa-horse"></i>`;
        //  `<i id="nowPosition" i class="fas fa-chess-knight"></i>`;
        // ゴールを表示
        $("#toGoal").text(`ゴール!!`);
      }
    },
  };

  // ③-１進むイベント実行
  const fowordEvent = {
    [player]: () => {
      moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
      // イベントコメント表示
      $("#eventText").text(`イベント発生！${moveCount}マス進む！`);
      // マスの位置を取得 進む
      mathPosition = mathPosition + moveCount;
      // コマの移動
      document.getElementById(mathPositionId).innerHTML = "";
      mathPositionId = "math" + mathPosition;
      document.getElementById(
        mathPositionId
      ).innerHTML = `<i id="nowPosition" i class="fas fa-horse"></i>`;
      // 画面を自動スクロール
      let element = document.getElementById("nowPosition");
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを取得、表示 減少
      goalPosition = goalPosition - moveCount;
      $("#toGoal").text(`ゴールまであと${goalPosition}マス`);
    },
  };

  // ③-2戻るイベント実行
  const backEvent = {
    [player]: () => {
      moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
      // イベントコメント表示
      $("#eventText").text(`イベント発生！${moveCount}マス戻る！`);
      // マスの位置を取得　戻る
      mathPosition = mathPosition - moveCount;
      // コマの移動
      document.getElementById(mathPositionId).innerHTML = "";
      mathPositionId = "math" + mathPosition;
      document.getElementById(
        mathPositionId
      ).innerHTML = `<i id="nowPosition" i class="fas fa-horse"></i>`;
      // 画面を自動スクロール
      let element = document.getElementById("nowPosition");
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを取得、表示　増加
      goalPosition = goalPosition + moveCount;
      $(`#toGoal`).text(`ゴールまであと${goalPosition}マス`);
    },
  };

  // ③イベントの選択
  const selectEvent = {
    [player]: () => {
      if (
        document.getElementById(mathPositionId).classList.contains("event") ==
        true
      ) {
        selectId = Math.floor(Math.random() * 2 + 1);
        if (selectId == 1) {
          // ③-１進むイベント実行
          setTimeout(fowordEvent[player], 1300);
        } else {
          // ③-２戻るイベント実行
          setTimeout(backEvent[player], 1300);
        }
      }
    },
  };

  // サイコロを振る　まとめ
  $("#dicerollBtn").click(function () {
    diceAction[player](); //①サイコロの結果を取得
    position[player](); // ②マスの位置を取得、コマの移動
    selectEvent[player](); //③ イベントの選択
    // diceAnimation();//サイコロの動き
  });
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
