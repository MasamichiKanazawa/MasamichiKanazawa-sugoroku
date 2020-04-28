$(function () {
  // プレイヤー 1〜4
  var player = 1;
  // プレイヤー人数
  // var playerId;
  //現在のマス　サイコロの結果　減少していく,イベントの結果　増減していく
  var mathPosition1 = 0;
  var mathPositionId1 = "math" + mathPosition1;
  var mathPosition2 = 0;
  var mathPositionId2 = "math" + mathPosition2;
  var mathPosition3 = 0;
  var mathPositionId3 = "math" + mathPosition3;
  var mathPosition4 = 0;
  var mathPositionId4 = "math" + mathPosition4;
  //ゴールまでのマス サイコロの結果　減少していく,イベントの結果　増減していく
  var goalPosition1 = 100;
  var goalPosition2 = 100;
  var goalPosition3 = 100;
  var goalPosition4 = 100;
  //サイコロを振った結果
  var min = 1;
  var max = 6;
  // //サイコロを振るのが何回目か 加算していく
  var diceRollCount1 = 1;
  var diceRollCount2 = 1;
  var diceRollCount3 = 1;
  var diceRollCount4 = 1;
  // コマが移動する数（イベント用）
  var moveCount;
  var minMove = 1;
  var maxMove = 4;
  // コマの位置が変わるキー
  var randomChange;
  var minRandomChange = 1;
  // var maxRandomChange; HTMLで指定

  // プレイヤー１
  //　1①サイコロの結果を取得
  function diceAction1() {
    diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
    $(`img`).attr(`src`, `${diceResult}.png`);
    // サイコロを振った回数を追加、表示
    diceRollCount1++;
    $("#count").text(`${diceRollCount1}投目`);
    // イベント表示リセット
    $("#eventText").text(``);
  }
  // 1②マスの位置を取得,コマの移動
  function position1() {
    // マスの位置を取得
    mathPosition1 = mathPosition1 + diceResult;
    goalPosition1 = goalPosition1 - diceResult;
    // alert(mathPosition);
    if (mathPosition1 < 100) {
      // コマの移動
      $(".pl1").remove();
      mathPositionId1 = "math" + mathPosition1;
      document
        .getElementById(mathPositionId1)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition1")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを表示
      $("#toGoal").text(`ゴールまであと${goalPosition1}マス`);
    } else {
      //ゴール コマを変化させる、コメント表示
      $(".pl1").remove();
      mathPosition1 = 100;
      mathPositionId1 = "math100";
      document
        .getElementById(mathPositionId1)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
        );
      //  `<i id="nowPosition" i class="pl1 fas fa-chess-knight"></i>`;
      // ゴールを表示
      $("#toGoal").text(`プレイヤー1の勝利です!`);
    }
  }
  // 1③-１進むイベント実行
  function fowordEvent1() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス進む！`);
    // マスの位置を取得 進む
    mathPosition1 = mathPosition1 + moveCount;
    // コマの移動
    $(".pl1").remove();
    mathPositionId1 = "math" + mathPosition1;
    document
      .getElementById(mathPositionId1)
      .insertAdjacentHTML(
        "afterbegin",
        '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
      );
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition1");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示 減少
    goalPosition1 = goalPosition1 - moveCount;
    $("#toGoal").text(`ゴールまであと${goalPosition1}マス`);
  }
  // 1③-2戻るイベント実行
  function backEvent1() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス戻る！`);
    // マスの位置を取得　戻る
    mathPosition1 = mathPosition1 - moveCount;
    // コマの移動
    $(".pl1").remove();
    mathPositionId1 = "math" + mathPosition1;
    document
      .getElementById(mathPositionId1)
      .insertAdjacentHTML(
        "afterbegin",
        '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
      );
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition1");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示　増加
    goalPosition1 = goalPosition1 + moveCount;
    $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);
  }
  // 1③イベントの選択
  function selectEvent1() {
    // プレイヤー位置変更なし
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
  // 1④プレイヤー変更
  function playerChange1() {
    player++;
    setTimeout(playerChangeText1, 2000);
  }
  function playerChangeText1() {
    // 次プレイヤーコメント
    $("#playNum").text(`プレイヤー${player}の順番です`);
    $("#count").text(`${diceRollCount2}投目`);
    $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);
    document
      .getElementById("nowPosition2")
      .scrollIntoView({ behavior: "smooth", inline: "start" });
  }
  // 1⑤プレイヤー位置変更
  function chageEvent1() {
    if (
      document
        .getElementById(mathPositionId1)
        .classList.contains("changeEvent") == true
    ) {
      randomChange =
        Math.floor(Math.random() * (maxRandomChange + 1 - minRandomChange)) +
        minRandomChange;
      // alert(randomChange);
      if (randomChange == 1) {
        [mathPosition1, mathPosition2] = [mathPosition2, mathPosition1];
        [goalPosition1, goalPosition2] = [goalPosition2, goalPosition1];
        // イベントコメント表示
        $("#eventText").text(`イベント発生！プレイヤー２と位置が入れ替わる！`);

        $(".pl1").remove();
        mathPositionId1 = "math" + mathPosition1;
        document
          .getElementById(mathPositionId1)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition1")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);

        // マスの位置を取得　戻る
        $(".pl2").remove();
        mathPositionId2 = "math" + mathPosition2;
        document
          .getElementById(mathPositionId2)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition2")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);
      } else if (randomChange == 2) {
        [mathPosition1, mathPosition3] = [mathPosition3, mathPosition1];
        [goalPosition1, goalPosition3] = [goalPosition3, goalPosition1];
        // イベントコメント表示
        $("#eventText").text(`イベント発生！プレイヤー3と位置が入れ替わる！`);

        $(".pl1").remove();
        mathPositionId1 = "math" + mathPosition1;
        document
          .getElementById(mathPositionId1)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition1")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);

        // マスの位置を取得　戻る
        $(".pl3").remove();
        mathPositionId3 = "math" + mathPosition3;
        document
          .getElementById(mathPositionId3)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition3")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition3}マス`);
      } else {
        [mathPosition1, mathPosition4] = [mathPosition4, mathPosition1];
        [goalPosition1, goalPosition4] = [goalPosition4, goalPosition1];
        // イベントコメント表示
        $("#eventText").text(`イベント発生！プレイヤー4と位置が入れ替わる！`);

        $(".pl1").remove();
        mathPositionId1 = "math" + mathPosition1;
        document
          .getElementById(mathPositionId1)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition1")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);

        // マスの位置を取得　戻る
        $(".pl4").remove();
        mathPositionId4 = "math" + mathPosition4;
        document
          .getElementById(mathPositionId4)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition4")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition4}マス`);
      }
    }
  }

  // プレイヤー２
  //　2①サイコロの結果を取得
  function diceAction2() {
    diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
    $(`img`).attr(`src`, `${diceResult}.png`);
    // サイコロを振った回数を追加、表示
    diceRollCount2++;
    $("#count").text(`${diceRollCount2}投目`);
    // イベント表示リセット
    $("#eventText").text(``);
  }
  // 2②マスの位置を取得,コマの移動
  function position2() {
    // プレイヤー位置変更なし
    // マスの位置を取得
    mathPosition2 = mathPosition2 + diceResult;
    goalPosition2 = goalPosition2 - diceResult;
    // alert(mathPosition);
    if (mathPosition2 < 100) {
      // コマの移動
      $(".pl2").remove();
      mathPositionId2 = "math" + mathPosition2;
      document
        .getElementById(mathPositionId2)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition2")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを表示
      $("#toGoal").text(`ゴールまであと${goalPosition2}マス`);
    } else {
      //ゴール コマを変化させる、コメント表示
      $(".pl2").remove();
      mathPosition2 = 100;
      mathPositionId2 = "math100";
      document
        .getElementById(mathPositionId2)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
        );
      //  `<i id="nowPosition" i class="fas fa-chess-knight"></i>`;
      // ゴールを表示
      $("#toGoal").text(`ゴール!!プレイヤー2の勝利です!!`);
    }
  }
  // 2③-１進むイベント実行
  function fowordEvent2() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス進む！`);
    // マスの位置を取得 進む
    mathPosition2 = mathPosition2 + moveCount;
    // コマの移動
    $(".pl2").remove();
    mathPositionId2 = "math" + mathPosition2;
    document
      .getElementById(mathPositionId2)
      .insertAdjacentHTML(
        "afterbegin",
        '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
      );
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition2");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示 減少
    goalPosition2 = goalPosition2 - moveCount;
    $("#toGoal").text(`ゴールまであと${goalPosition2}マス`);
  }
  // 2③-2戻るイベント実行
  function backEvent2() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス戻る！`);
    // マスの位置を取得　戻る
    mathPosition2 = mathPosition2 - moveCount;
    // コマの移動
    $(".pl2").remove();
    mathPositionId2 = "math" + mathPosition2;
    document
      .getElementById(mathPositionId2)
      .insertAdjacentHTML(
        "afterbegin",
        '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
      );
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition2");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示　増加
    goalPosition2 = goalPosition2 + moveCount;
    $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);
  }
  // 2③イベントの選択
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
  // 2④プレイヤー変更
  function playerChange2() {
    if (playerId == 2) {
      player--;
      setTimeout(playerChangeText2, 2000);
    } else if (playerId >= 3) {
      player++;
      setTimeout(playerChangeText2, 2000);
    }
  }
  function playerChangeText2() {
    // 次プレイヤーコメント
    $("#playNum").text(`プレイヤー${player}の順番です`);
    if (playerId == 2) {
      $("#count").text(`${diceRollCount1}投目`);
      $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);
      document
        .getElementById("nowPosition1")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
    } else if (playerId >= 2) {
      $("#count").text(`${diceRollCount3}投目`);
      $(`#toGoal`).text(`ゴールまであと${goalPosition3}マス`);
      document
        .getElementById("nowPosition3")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }
  // 2⑤プレイヤー位置変更
  function chageEvent2() {
    if (
      document
        .getElementById(mathPositionId2)
        .classList.contains("changeEvent") == true
    ) {
      randomChange =
        Math.floor(Math.random() * (maxRandomChange + 1 - minRandomChange)) +
        minRandomChange;
      if (randomChange == 1) {
        [mathPosition2, mathPosition1] = [mathPosition1, mathPosition2];
        [goalPosition2, goalPosition1] = [goalPosition1, goalPosition2];
        // イベントコメント表示
        $("#eventText").text(`イベント発生！プレイヤー1と位置が入れ替わる！`);

        $(".pl2").remove();
        mathPositionId2 = "math" + mathPosition2;
        document
          .getElementById(mathPositionId2)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition2")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);

        // マスの位置を取得
        $(".pl1").remove();
        mathPositionId1 = "math" + mathPosition1;
        document
          .getElementById(mathPositionId1)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition1")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);
      } else if (randomChange == 2) {
        [mathPosition2, mathPosition3] = [mathPosition3, mathPosition2];
        [goalPosition2, goalPosition3] = [goalPosition3, goalPosition2];
        // イベントコメント表示
        $("#eventText").text(`イベント発生！プレイヤー3と位置が入れ替わる！`);

        $(".pl2").remove();
        mathPositionId2 = "math" + mathPosition2;
        document
          .getElementById(mathPositionId2)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition2")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);

        // マスの位置を取得　戻る
        $(".pl3").remove();
        mathPositionId3 = "math" + mathPosition3;
        document
          .getElementById(mathPositionId3)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition3")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition3}マス`);
      } else {
        [mathPosition2, mathPosition4] = [mathPosition4, mathPosition2];
        [goalPosition2, goalPosition4] = [goalPosition4, goalPosition2];
        // イベントコメント表示
        $("#eventText").text(`イベント発生！プレイヤー4と位置が入れ替わる！`);

        $(".pl2").remove();
        mathPositionId2 = "math" + mathPosition2;
        document
          .getElementById(mathPositionId2)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition2")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);

        // マスの位置を取得　戻る
        $(".pl4").remove();
        mathPositionId4 = "math" + mathPosition4;
        document
          .getElementById(mathPositionId4)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition4")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition4}マス`);
      }
    }
  }

  // プレイヤー3
  //　3①サイコロの結果を取得
  function diceAction3() {
    diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
    $(`img`).attr(`src`, `${diceResult}.png`);
    // サイコロを振った回数を追加、表示
    diceRollCount3++;
    $("#count").text(`${diceRollCount3}投目`);
    // イベント表示リセット
    $("#eventText").text(``);
  }
  // 3②マスの位置を取得,コマの移動
  function position3() {
    // マスの位置を取得
    mathPosition3 = mathPosition3 + diceResult;
    goalPosition3 = goalPosition3 - diceResult;
    // alert(mathPosition);
    if (mathPosition3 < 100) {
      // コマの移動
      $(".pl3").remove();
      mathPositionId3 = "math" + mathPosition3;
      document
        .getElementById(mathPositionId3)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition3")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを表示
      $("#toGoal").text(`ゴールまであと${goalPosition3}マス`);
    } else {
      //ゴール コマを変化させる、コメント表示
      $(".pl3").remove();
      mathPosition3 = 100;
      mathPositionId3 = "math100";
      document
        .getElementById(mathPositionId3)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
        );
      //  `<i id="nowPosition" i class="fas fa-chess-knight"></i>`;
      // ゴールを表示
      $("#toGoal").text(`ゴール!!プレイヤー3の勝利です!!`);
    }
  }
  // 3③-１進むイベント実行
  function fowordEvent3() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス進む！`);
    // マスの位置を取得 進む
    mathPosition3 = mathPosition3 + moveCount;
    // コマの移動
    $(".pl3").remove();
    mathPositionId3 = "math" + mathPosition3;
    document
      .getElementById(mathPositionId3)
      .insertAdjacentHTML(
        "afterbegin",
        '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
      );
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition3");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示 減少
    goalPosition3 = goalPosition3 - moveCount;
    $("#toGoal").text(`ゴールまであと${goalPosition3}マス`);
    t(`ゴールまであと${goalPosition1}マス`);
  }
  // 3③-2戻るイベント実行
  function backEvent3() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス戻る！`);
    // マスの位置を取得　戻る
    mathPosition3 = mathPosition3 - moveCount;
    // コマの移動
    $(".pl3").remove();
    mathPositionId3 = "math" + mathPosition3;
    document
      .getElementById(mathPositionId3)
      .insertAdjacentHTML(
        "afterbegin",
        '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
      );
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition3");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示　増加
    goalPosition3 = goalPosition3 + moveCount;
    $(`#toGoal`).text(`ゴールまであと${goalPosition3}マス`);
  }
  // 3③イベントの選択
  function selectEvent3() {
    if (
      document.getElementById(mathPositionId3).classList.contains("event") ==
      true
    ) {
      selectId = Math.floor(Math.random() * 2 + 1);
      if (selectId == 1) {
        // ③-１進むイベント実行
        setTimeout(fowordEvent3, 1300);
      } else {
        // ③-２戻るイベント実行
        setTimeout(backEvent3, 1300);
      }
    }
  }
  // 3④プレイヤー変更
  function playerChange3() {
    if (playerId == 3) {
      player = 1;
      setTimeout(playerChangeText3, 2000);
    } else {
      player++;
      setTimeout(playerChangeText3, 2000);
    }
  }
  function playerChangeText3() {
    // 次プレイヤーコメント
    $("#playNum").text(`プレイヤー${player}の順番です`);
    if (playerId == 3) {
      $("#count").text(`${diceRollCount1}投目`);
      $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);
      document
        .getElementById("nowPosition1")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
    } else if (playerId >= 4) {
      $("#count").text(`${diceRollCount4}投目`);
      $(`#toGoal`).text(`ゴールまであと${goalPosition4}マス`);
      document
        .getElementById("nowPosition4")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }
  // 3⑤プレイヤー位置変更
  function chageEvent3() {
    if (
      document
        .getElementById(mathPositionId3)
        .classList.contains("changeEvent") == true
    ) {
      randomChange =
        Math.floor(Math.random() * (maxRandomChange + 1 - minRandomChange)) +
        minRandomChange;
      if (randomChange == 1) {
        [mathPosition3, mathPosition1] = [mathPosition1, mathPosition3];
        [goalPosition3, goalPosition1] = [goalPosition1, goalPosition3];
        // イベントコメント表示
        $("#eventText").text(`イベント発生！プレイヤー1と位置が入れ替わる！`);

        $(".pl3").remove();
        mathPositionId3 = "math" + mathPosition3;
        document
          .getElementById(mathPositionId3)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition3")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition3}マス`);

        // マスの位置を取得
        $(".pl1").remove();
        mathPositionId1 = "math" + mathPosition1;
        document
          .getElementById(mathPositionId1)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition1")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);
      } else if (randomChange == 2) {
        [mathPosition3, mathPosition2] = [mathPosition2, mathPosition3];
        [goalPosition3, goalPosition2] = [goalPosition2, goalPosition3];
        // イベントコメント表示
        $("#eventText").text(`イベント発生！プレイヤー2と位置が入れ替わる！`);

        $(".pl3").remove();
        mathPositionId3 = "math" + mathPosition3;
        document
          .getElementById(mathPositionId3)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition3")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition3}マス`);

        // マスの位置を取得　戻る
        $(".pl2").remove();
        mathPositionId2 = "math" + mathPosition2;
        document
          .getElementById(mathPositionId2)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition2")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);
      } else {
        [mathPosition3, mathPosition4] = [mathPosition4, mathPosition3];
        [goalPosition3, goalPosition4] = [goalPosition4, goalPosition3];
        // イベントコメント表示
        $("#eventText").text(`イベント発生！プレイヤー4と位置が入れ替わる！`);
        $(".pl3").remove();
        mathPositionId3 = "math" + mathPosition3;
        document
          .getElementById(mathPositionId3)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition3")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition3}マス`);

        // マスの位置を取得　戻る
        $(".pl4").remove();
        mathPositionId4 = "math" + mathPosition4;
        document
          .getElementById(mathPositionId4)
          .insertAdjacentHTML(
            "afterbegin",
            '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
          );
        // 画面を自動スクロール
        document
          .getElementById("nowPosition4")
          .scrollIntoView({ behavior: "smooth", inline: "start" });
        // ゴールまでの残りマスを取得
        $(`#toGoal`).text(`ゴールまであと${goalPosition4}マス`);
      }
    }
  }

  // プレイヤー4
  //　4①サイコロの結果を取得
  function diceAction4() {
    diceResult = Math.floor(Math.random() * (max + 1 - min)) + min;
    $(`img`).attr(`src`, `${diceResult}.png`);
    // サイコロを振った回数を追加、表示
    diceRollCount4++;
    $("#count").text(`${diceRollCount4}投目`);
    // イベント表示リセット
    $("#eventText").text(``);
  }
  // 4②マスの位置を取得,コマの移動
  function position4() {
    // マスの位置を取得
    mathPosition4 = mathPosition4 + diceResult;
    goalPosition4 = goalPosition4 - diceResult;
    // alert(mathPosition);
    if (mathPosition4 < 100) {
      // コマの移動
      $(".pl4").remove();
      mathPositionId4 = "math" + mathPosition4;
      document
        .getElementById(mathPositionId4)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition4")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを表示
      $("#toGoal").text(`ゴールまであと${goalPosition4}マス`);
    } else {
      //ゴール コマを変化させる、コメント表示
      $(".pl4").remove();
      mathPosition4 = 100;
      mathPositionId4 = "math100";
      document
        .getElementById(mathPositionId4)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
        );
      //  `<i id="nowPosition" i class="fas fa-chess-knight"></i>`;
      // ゴールを表示
      $("#toGoal").text(`ゴール!!プレイヤー4の勝利です!!`);
    }
  }

  // 4③-１進むイベント実行
  function fowordEvent4() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス進む！`);
    // プレイヤー位置変更なし
    // if (changePlayer == 1) {
    // マスの位置を取得 進む
    mathPosition4 = mathPosition4 + moveCount;
    // コマの移動
    $(".pl4").remove();
    mathPositionId4 = "math" + mathPosition4;
    document
      .getElementById(mathPositionId4)
      .insertAdjacentHTML(
        "afterbegin",
        '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
      );
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition4");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示 減少
    goalPosition4 = goalPosition4 - moveCount;
    $("#toGoal").text(`ゴールまであと${goalPosition4}マス`);
  }
  // 4③-2戻るイベント実行
  function backEvent4() {
    moveCount = Math.floor(Math.random() * (maxMove + 1 - minMove)) + minMove;
    // イベントコメント表示
    $("#eventText").text(`イベント発生！${moveCount}マス戻る！`);
    // マスの位置を取得　戻る
    mathPosition4 = mathPosition4 - moveCount;
    // コマの移動
    $(".pl4").remove();
    mathPositionId4 = "math" + mathPosition4;
    document
      .getElementById(mathPositionId4)
      .insertAdjacentHTML(
        "afterbegin",
        '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
      );
    // 画面を自動スクロール
    let element = document.getElementById("nowPosition4");
    element.scrollIntoView({ behavior: "smooth", inline: "start" });
    // ゴールまでの残りマスを取得、表示　増加
    goalPosition4 = goalPosition4 + moveCount;
    $(`#toGoal`).text(`ゴールまであと${goalPosition4}マス`);
    // }
  }
  // 4③イベントの選択
  function selectEvent4() {
    if (
      document.getElementById(mathPositionId4).classList.contains("event") ==
      true
    ) {
      selectId = Math.floor(Math.random() * 2 + 1);
      if (selectId == 1) {
        // ③-１進むイベント実行
        setTimeout(fowordEvent4, 1300);
      } else {
        // ③-２戻るイベント実行
        setTimeout(backEvent4, 1300);
      }
    }
  }
  // 4④プレイヤー変更
  function playerChange4() {
    if (playerId == 4) {
      player = 1;
      setTimeout(playerChangeText4, 2000);
    }
  }
  function playerChangeText4() {
    // 次プレイヤーコメント
    $("#playNum").text(`プレイヤー${player}の順番です`);
    if (playerId == 4) {
      $("#count").text(`${diceRollCount1}投目`);
      $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);
      document
        .getElementById("nowPosition1")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }
  // // 4⑤プレイヤー位置変更
  if (
    document
      .getElementById(mathPositionId4)
      .classList.contains("changeEvent") == true
  ) {
    randomChange =
      Math.floor(Math.random() * (maxRandomChange + 1 - minRandomChange)) +
      minRandomChange;
    if (randomChange == 1) {
      [mathPosition4, mathPosition1] = [mathPosition1, mathPosition4];
      [goalPosition4, goalPosition1] = [goalPosition1, goalPosition4];
      // イベントコメント表示
      $("#eventText").text(`イベント発生！プレイヤー1と位置が入れ替わる！`);

      $(".pl4").remove();
      mathPositionId4 = "math" + mathPosition4;
      document
        .getElementById(mathPositionId4)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition4")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを取得
      $(`#toGoal`).text(`ゴールまであと${goalPosition4}マス`);

      // マスの位置を取得
      $(".pl1").remove();
      mathPositionId1 = "math" + mathPosition1;
      document
        .getElementById(mathPositionId1)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition1" i class="pl1 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition1")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを取得
      $(`#toGoal`).text(`ゴールまであと${goalPosition1}マス`);
    } else if (randomChange == 2) {
      [mathPosition4, mathPosition2] = [mathPosition2, mathPosition4];
      [goalPosition4, goalPosition2] = [goalPosition2, goalPosition4];
      // イベントコメント表示
      $("#eventText").text(`イベント発生！プレイヤー2と位置が入れ替わる！`);

      $(".pl4").remove();
      mathPositionId4 = "math" + mathPosition4;
      document
        .getElementById(mathPositionId4)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition4")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを取得
      $(`#toGoal`).text(`ゴールまであと${goalPosition4}マス`);

      // マスの位置を取得　戻る
      $(".pl2").remove();
      mathPositionId2 = "math" + mathPosition2;
      document
        .getElementById(mathPositionId2)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition2" i class="pl2 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition2")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを取得
      $(`#toGoal`).text(`ゴールまであと${goalPosition2}マス`);
    } else {
      [mathPosition4, mathPosition3] = [mathPosition3, mathPosition4];
      [goalPosition4, goalPosition3] = [goalPosition3, goalPosition4];
      // イベントコメント表示
      $("#eventText").text(`イベント発生！プレイヤー3と位置が入れ替わる！`);

      // マスの位置を取得　戻る
      $(".pl4").remove();
      mathPositionId4 = "math" + mathPosition4;
      document
        .getElementById(mathPositionId4)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition4" i class="pl4 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition4")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを取得
      $(`#toGoal`).text(`ゴールまであと${goalPosition4}マス`);

      $(".pl3").remove();
      mathPositionId3 = "math" + mathPosition3;
      document
        .getElementById(mathPositionId3)
        .insertAdjacentHTML(
          "afterbegin",
          '<i id="nowPosition3" i class="pl3 fas fa-horse"></i>'
        );
      // 画面を自動スクロール
      document
        .getElementById("nowPosition3")
        .scrollIntoView({ behavior: "smooth", inline: "start" });
      // ゴールまでの残りマスを取得
      $(`#toGoal`).text(`ゴールまであと${goalPosition3}マス`);
    }
  }

  // サイコロを振る　まとめ
  $("#dicerollBtn").click(function () {
    if (player == 1) {
      // プレイヤー１
      diceAction1(); //①サイコロの結果を取得
      position1(); // ②マスの位置を取得、コマの移動
      selectEvent1(); //③イベントの選択
      if (playerId >= 2) {
        playerChange1(); //④プレイヤー変更
        chageEvent1(); // ⑤プレイヤー位置変更
      }
    } else if (player == 2) {
      // プレイヤー２
      diceAction2(); //①サイコロの結果を取得
      position2(); // ②マスの位置を取得、コマの移動
      selectEvent2(); //③イベントの選択
      playerChange2(); //④プレイヤー変更
      chageEvent2(); // ⑤プレイヤー位置変更
    } else if (player == 3) {
      // プレイヤー3
      diceAction3(); //①サイコロの結果を取得
      position3(); // ②マスの位置を取得、コマの移動
      selectEvent3(); //③イベントの選択
      playerChange3(); //④プレイヤー変更
      chageEvent3(); // ⑤プレイヤー位置変更
    } else {
      // プレイヤー4
      diceAction4(); //①サイコロの結果を取得
      position4(); // ②マスの位置を取得、コマの移動
      selectEvent4(); //③イベントの選択
      playerChange4(); //④プレイヤー変更
      chageEvent4(); // ⑤プレイヤー位置変更
    }
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
