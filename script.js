$(function () {
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
  var maxMove = 10;

  //サイコロの結果を取得
  function diceAction() {
    diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
    // alert(diceResult);
    $(`img`).attr(`src`, `${diceResult}.png`);

    // サイコロを振った回数を追加、表示
    diceRollCount++;
    $(`＃count`).text(`${diceRollCount}投目`);
    alert(diceRollCount);
  }

  // マスの位置を取得,コマの移動
  function position() {
    if (mathPosition < 100) {
      // マスの位置を取得
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

      // ゴールまでの残りマスを取得、表示
      goalPosition = goalPosition - diceResult;
      $(`＃toGoal`).text(`ゴールまであと${goalPosition}マス`);
      alert(goalPosition);
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

  // 進むイベント実行
  function fowordEvent() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // alert(moveCount);

    // マスの位置を取得 進む
    mathPosition = mathPosition + moveCount;
    // alert(mathPosition);

    // イベントコメント表示
    // $(`＃toGoal`).text(`イベント発生！${moveCountnt}マス進む！`);

    // コマの移動
    document.getElementById(mathPositionId).innerHTML = "";
    mathPositionId = "math" + mathPosition;
    document.getElementById(
      mathPositionId
    ).innerHTML = `<i id="nowPosition" i class="fas fa-horse"></i>`;

    // 画面を自動スクロール
    let element = document.getElementById("nowPosition");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });

    // ゴールまでの残りマスを取得、表示
    goalPosition = goalPosition - diceResult;
    // $(`＃toGoal`).text(`ゴールまであと${goalPosition}マス`);
    // alert(goalPosition);
  }

  // 戻るイベント実行
  function backEvent() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // alert(moveCount);

    // マスの位置を取得　戻る
    mathPosition = mathPosition - moveCount;
    // alert(mathPosition);

    // イベントコメント表示
    // $(`＃toGoal`).text(`イベント発生！${moveCountnt}マス戻る！`);

    // コマの移動
    document.getElementById(mathPositionId).innerHTML = "";
    mathPositionId = "math" + mathPosition;
    document.getElementById(
      mathPositionId
    ).innerHTML = `<i id="nowPosition" i class="fas fa-horse"></i>`;

    // 画面を自動スクロール
    let element = document.getElementById("nowPosition");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });

    // ゴールまでの残りマスを取得、表示
    goalPosition = goalPosition - diceResult;
    $(`#toGoal`).text(`ゴールまであと${goalPosition}マス`);
    // alert(goalPosition);
  }

  // イベントの選択
  function selectEvent() {
    if (
      document.getElementById(mathPositionId).classList.contains("event") ==
      true
    ) {
      selectId = Math.floor(Math.random() * 2 + 1);
      // alert(selectId);
      if (selectId == 1) {
        fowordEvent();
      } else {
        backEvent();
      }
    }
  }

  // サイコロを振る　まとめ
  $("#dicerollBtn").click(function () {
    diceAction(); //サイコロの結果を取得
    position(); // マスの位置を取得、コマの移動
    selectEvent(); // イベントの選択
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
