$(function () {
  // プレイヤー
  var player = 1;
  // プレイヤー人数
  var playerId = 2;
  //現在のマス　サイコロの結果　減少していく,イベントの結果　増減していく
  var mathPosition1 = 0;
  var mathPositionId1 = "math" + mathPosition1;
  var mathPosition2 = 0;
  var mathPositionId2 = "math" + mathPosition2;
  //ゴールまでのマス サイコロの結果　減少していく,イベントの結果　増減していく
  var goalPosition1 = 100;
  var goalPosition2 = 100;
  //サイコロを振った結果
  var min = 1;
  var max = 6;
  // //サイコロを振るのが何回目か 加算していく
  var diceRollCount1 = 1;
  var diceRollCount2 = 1;
  // コマが移動する数（イベント用）
  var moveCount;
  var minMove = 1;
  var maxMove = 4;

  // プレイヤー１
  //　①サイコロの結果を取得
  function diceAction1() {
    diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
    $(`img`).attr(`src`, `${diceResult}.png`);
    // サイコロを振った回数を追加、表示
    diceRollCount1++;
    $("#count").text(`${diceRollCount1}投目`);
    // イベント表示リセット
    $("#eventText").text(``);
  }
  // ②マスの位置を取得,コマの移動
  function position1() {
    // マスの位置を取得
    mathPosition1 = mathPosition1 + diceResult;
    goalPosition1 = goalPosition1 - diceResult;
    // alert(mathPosition);
    if (mathPosition1 < 100) {
      // コマの移動
      document.getElementById(mathPositionId1).innerHTML = "";
      mathPositionId1 = "math" + mathPosition1;
      document.getElementById(
        mathPositionId1
      ).innerHTML = `<i id="nowPosition1" i class="pl1 fas fa-horse"></i>`;
      // 画面を自動スクロール
      document
        .getElementById("nowPosition1")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを表示
      $("#toGoal").text(`ゴールまであと${goalPosition1}マス`);
    } else {
      //ゴール コマを変化させる、コメント表示
      document.getElementById(mathPositionId1).innerHTML = "";
      mathPosition1 = 100;
      mathPositionId1 = "math100";
      document.getElementById(
        mathPositionId1
      ).innerHTML = `<i id="nowPosition1" i class="pl1 fas fa-horse"></i>`;
      //  `<i id="nowPosition" i class="fas fa-chess-knight"></i>`;
      // ゴールを表示
      $("#toGoal").text(`プレイヤー1の勝利です!`);
    }
  }
  // ③-１進むイベント実行
  function fowordEvent1() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス進む！`);
    // マスの位置を取得 進む
    mathPosition1 = mathPosition1 + moveCount;
    // コマの移動
    document.getElementById(mathPositionId1).innerHTML = "";
    mathPositionId1 = "math" + mathPosition1;
    document.getElementById(
      mathPositionId1
    ).innerHTML = `<i id="nowPosition1" i class="pl1 fas fa-horse"></i>`;
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition1");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示 減少
    goalPosition1 = goalPosition1 - moveCount;
    $("#toGoal").text(`ゴールまであと${goalPosition1}マス`);
  }
  // ③-2戻るイベント実行
  function backEvent1() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス戻る！`);
    // マスの位置を取得　戻る
    mathPosition1 = mathPosition1 - moveCount;
    // コマの移動
    document.getElementById(mathPositionId1).innerHTML = "";
    mathPositionId1 = "math" + mathPosition1;
    document.getElementById(
      mathPositionId1
    ).innerHTML = `<i id="nowPosition1" i class="pl1 fas fa-horse"></i>`;
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition1");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示　増加
    goalPosition1 = goalPosition1 + moveCount;
    $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);
  }
  // ③イベントの選択
  function selectEvent1() {
    if (
      document.getElementById(mathPositionId1).classList.contains("event") ==
      true
    ) {
      selectId = Math.floor(Math.random() * 2 + 1);
      if (selectId == 1) {
        // ③-１進むイベント実行
        setTimeout(fowordEvent1, 1300);
      } else {
        // ③-２戻るイベント実行
        setTimeout(backEvent1, 1300);
      }
    }
  }
  //④プレイヤー変更
  function playerChange1() {
    player++;
    setTimeout(playerChangeText1, 2000);
  }
  function playerChangeText1() {
    // プレイヤーコメント
    $("#playNum").text(`プレイヤー${player}の順番です`);
    $("#count").text(`${diceRollCount2}投目`);
    $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);
    document
      .getElementById("nowPosition2")
      .scrollIntoView({ behavior: "smooth", inline: "start" });
  }

  // プレイヤー２
  //　①サイコロの結果を取得
  function diceAction2() {
    diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
    $(`img`).attr(`src`, `${diceResult}.png`);
    // サイコロを振った回数を追加、表示
    diceRollCount2++;
    $("#count").text(`${diceRollCount2}投目`);
    // イベント表示リセット
    $("#eventText").text(``);
  }
  // ②マスの位置を取得,コマの移動
  function position2() {
    // マスの位置を取得
    mathPosition2 = mathPosition2 + diceResult;
    goalPosition2 = goalPosition2 - diceResult;
    // alert(mathPosition);
    if (mathPosition2 < 100) {
      // コマの移動
      document.getElementById(mathPositionId2).innerHTML = "";
      mathPositionId2 = "math" + mathPosition2;
      document.getElementById(
        mathPositionId2
      ).innerHTML = `<i id="nowPosition2" i class="pl2 fas fa-horse"></i>`;

      // 画面を自動スクロール
      document
        .getElementById("nowPosition2")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを表示
      $("#toGoal").text(`ゴールまであと${goalPosition2}マス`);
    } else {
      //ゴール コマを変化させる、コメント表示
      document.getElementById(mathPositionId2).innerHTML = "";
      mathPosition2 = 100;
      mathPositionId2 = "math100";
      document.getElementById(
        mathPositionId2
      ).innerHTML = `<i id="nowPosition2" i class="pl2 fas fa-horse"></i>`;
      //  `<i id="nowPosition" i class="fas fa-chess-knight"></i>`;
      // ゴールを表示
      $("#toGoal").text(`ゴール!!プレイヤー2の勝利です!!`);
    }
  }
  // ③-１進むイベント実行
  function fowordEvent2() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス進む！`);
    // マスの位置を取得 進む
    mathPosition2 = mathPosition2 + moveCount;
    // コマの移動
    document.getElementById(mathPositionId2).innerHTML = "";
    mathPositionId2 = "math" + mathPosition2;
    document.getElementById(
      mathPositionId2
    ).innerHTML = `<i id="nowPosition2" i class="pl2 fas fa-horse"></i>`;
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition2");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示 減少
    goalPosition2 = goalPosition2 - moveCount;
    $("#toGoal").text(`ゴールまであと${goalPosition2}マス`);
  }
  // ③-2戻るイベント実行
  function backEvent2() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス戻る！`);
    // マスの位置を取得　戻る
    mathPosition2 = mathPosition2 - moveCount;
    // コマの移動
    document.getElementById(mathPositionId2).innerHTML = "";
    mathPositionId2 = "math" + mathPosition2;
    document.getElementById(
      mathPositionId2
    ).innerHTML = `<i id="nowPosition2" i class="pl2 fas fa-horse"></i>`;
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition2");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示　増加
    goalPosition2 = goalPosition2 + moveCount;
    $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);
  }
  // ③イベントの選択
  function selectEvent2() {
    if (
      document.getElementById(mathPositionId2).classList.contains("event") ==
      true
    ) {
      selectId = Math.floor(Math.random() * 2 + 1);
      if (selectId == 1) {
        // ③-１進むイベント実行
        setTimeout(fowordEvent2, 1300);
      } else {
        // ③-２戻るイベント実行
        setTimeout(backEvent2, 1300);
      }
    }
  }
  //④プレイヤー変更
  function playerChange2() {
    if ((playerId = 2)) {
      player--;
      setTimeout(playerChangeText2, 2000);
    }
  }
  function playerChangeText2() {
    // プレイヤーコメント
    $("#playNum").text(`${player}の順番です`);
    $("#count").text(`${diceRollCount1}投目`);
    $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);
    document
      .getElementById("nowPosition1")
      .scrollIntoView({ behavior: "smooth", inline: "start" });
  }

  // サイコロを振る　まとめ
  $("#dicerollBtn").click(function () {
    if (player == 1) {
      diceAction1(); //①サイコロの結果を取得
      position1(); // ②マスの位置を取得、コマの移動
      selectEvent1(); //③イベントの選択
      // player++; // プレイヤー変更
      if (playerId == 2) {
        playerChange1(); //④プレイヤー変更
      }
    } else {
      diceAction2(); //①サイコロの結果を取得
      position2(); // ②マスの位置を取得、コマの移動
      selectEvent2(); //③イベントの選択
      // player--; // プレイヤー変更
      playerChange2(); //④プレイヤー変更
    }
  });

  // プレイヤー人数の決定
  $("#plb1").click(function () {
    playerId = 1;
  });

  $("#plb2").click(function () {
    playerId = 2;
  });

  // function plb1() {
  //   playerId = 1;
  // }

  // function plb2() {
  //   playerId = 2;
  // }
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
