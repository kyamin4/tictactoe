let playerXTurn = true;
let totalTurns = 0;
let gameOver = false;
let xWins = 0;
let oWins = 0;
let draws = 0;

function performLogic(button, tile) {
  if (gameOver == true) {
    $("#playerTurn").text("The game is over!");
    console.log("Game over!");
  } else {
    if (playerXTurn) {
      $(button).hide();
      $(tile).text("X");
      $("#playerTurn").text("The Current Player is Player X");
    } else {
      $(button).hide();
      $(tile).text("O");
      $("#playerTurn").text("The Current Player is Player O");
    }

    playerXTurn = !playerXTurn;
    totalTurns++;
    $("#turnsCounter").text("Total Number of Turns Passed: " + totalTurns);

    if (totalTurns == 9 && gameOver == false) {
      gameOver = true;
      $("#turnsCounter").text("Draw! " + totalTurns + " turns passed!");
      draws++;
      $("#drawsCounter").text("Draws: " + draws);
    }
  }
}

let tile1Value = 0;
let tile2Value = 0;
let tile3Value = 0;
let tile4Value = 0;
let tile5Value = 0;
let tile6Value = 0;
let tile7Value = 0;
let tile8Value = 0;
let tile9Value = 0;

function checkGrid() {
  //horazontals
  console.log("Horazontals");
  checkTiles(tile1Value, tile2Value, tile3Value);
  checkTiles(tile4Value, tile5Value, tile6Value);
  checkTiles(tile7Value, tile8Value, tile9Value);
  //verticals
  console.log("Verticals");
  checkTiles(tile1Value, tile4Value, tile7Value);
  checkTiles(tile2Value, tile5Value, tile8Value);
  checkTiles(tile3Value, tile6Value, tile9Value);
  //diagonals
  console.log("Diagonals");
  checkTiles(tile1Value, tile5Value, tile9Value);
  checkTiles(tile3Value, tile5Value, tile7Value);
}

function checkTiles(tileAValue, tileBValue, tileCValue) {
  let totalValue = tileAValue + tileBValue + tileCValue;
  console.log(totalValue);
  
  if (totalValue == 15) {
    $("#winnerDisplay").text("The winner is: Player O!");
    oWins++;
    $("#winsCounterO").text("Player O win: " + oWins);
    gameOver = true;
    console.log(gameOver);
  } else if (totalValue == 6) {
    $("#winnerDisplay").text("The winner is: Player X!");
    xWins++;
    $("#winsCounterX").text("Player X win: " + xWins);
    gameOver = true;
    console.log(gameOver);
  } else if (gameOver == false) {
    console.log("Game still continues");
  }
}

$("#button1").click(function() {
  performLogic("#button1", "#tile1Text");
  if (playerXTurn) {
    tile1Value = 5;
  } else {
    tile1Value = 2;
  }
  checkGrid();
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2Text");
  if (playerXTurn) {
    tile2Value = 5;
  } else {
    tile2Value = 2;
  }
  checkGrid();
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3Text");
  if (playerXTurn) {
    tile3Value = 5;
  } else {
    tile3Value = 2;
  }
  checkGrid();
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4Text");
  if (playerXTurn) {
    tile4Value = 5;
  } else {
    tile4Value = 2;
  }
  checkGrid();
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5Text");
  if (playerXTurn) {
    tile5Value = 5;
  } else {
    tile5Value = 2;
  }
  checkGrid();
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6Text");
  if (playerXTurn) {
    tile6Value = 5;
  } else {
    tile6Value = 2;
  }
  checkGrid();
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7Text");
  if (playerXTurn) {
    tile7Value = 5;
  } else {
    tile7Value = 2;
  }
  checkGrid();
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8Text");
  if (playerXTurn) {
    tile8Value = 5;
  } else {
    tile8Value = 2;
  }
  checkGrid();
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9Text");
  if (playerXTurn) {
    tile9Value = 5;
  } else {
    tile9Value = 2;
  }
  checkGrid();
});

$("#resetButton").click(function() {
  tile1Value = 0;
  tile2Value = 0;
  tile3Value = 0;
  tile4Value = 0;
  tile5Value = 0;
  tile6Value = 0;
  tile7Value = 0;
  tile8Value = 0;
  tile9Value = 0;
  $("#button1").show();
  $("#button2").show();
  $("#button3").show();
  $("#button4").show();
  $("#button5").show();
  $("#button6").show();
  $("#button7").show();
  $("#button8").show();
  $("#button9").show();
  $("#tile1Text").text("");
  $("#tile2Text").text("");
  $("#tile3Text").text("");
  $("#tile4Text").text("");
  $("#tile5Text").text("");
  $("#tile6Text").text("");
  $("#tile7Text").text("");
  $("#tile8Text").text("");
  $("#tile9Text").text("");

  playerXTurn = true;
  totalTurns = 0;
  gameOver = false;
  $("#winnerDisplay").text(" The winner is: ");
  $("#turnsCounter").text("Total Number of Turns Passed: " + totalTurns);
});
