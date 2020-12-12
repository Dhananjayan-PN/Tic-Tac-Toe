let data = ["", "", "", "", "", "", "", "", ""];
let winner = "";
let tie = false;
let player1_turn = true;
let player2_turn = false;
let game_status = document.getElementById("turn");
let player_coin = {
  X: "Player 1",
  O: "Player 2"
};

window.addEventListener("load", function () {
  for (let i = 0; i < data.length; i++) {
    document.getElementById(i.toString()).setAttribute("onclick", "cellClickHandler(" + i + ");");
  }
});

document.getElementById("restart-button").addEventListener("click", () => restart());

function render() {
  for (let i = 0; i < data.length; i++) {
    document.getElementById(i.toString()).innerHTML = data[i];
  }
  winner = checkForWinner();
  tie = checkDataFull();
  if (winner !== "") {
    game_status.innerHTML = "Game Over! " + winner + " wins!";
    return;
  }
  if (tie && winner === "") {
    game_status.innerHTML = "Game Over! It is a tie!";
    return;
  }
  if (player1_turn) {
    game_status.innerHTML = "Player 1's turn!";
  } else {
    game_status.innerHTML = "Player 2's turn!";
  }
}

function updateData(index, newData) {
  data[index] = newData;
}

function cellClickHandler(id) {
  if (winner !== "" || tie) {
    return;
  }
  if (data[parseInt(id)] !== "") {
    alert("Invalid location! Choose another!");
  } else {
    if (player1_turn) {
      updateData(parseInt(id), "X");
    } else {
      updateData(parseInt(id), "O");
    }
    player1_turn = !player1_turn;
    player2_turn = !player2_turn;
    render();
  }
}
function checkForWinner() {
  if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
    return player_coin[data[0]];
  }
  if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
    return player_coin[data[3]];
  }
  if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
    return player_coin[data[6]];
  }
  if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
    return player_coin[data[0]];
  }
  if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
    return player_coin[data[1]];
  }
  if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
    return player_coin[data[2]];
  }
  if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
    return player_coin[data[0]];
  }
  if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
    return player_coin[data[2]];
  }
  return "";
}

function checkDataFull() {
  let dataFull = true;
  data.forEach((element) => {
    if (element === "") {
      dataFull = false;
    }
  });
  return dataFull;
}

function restart() {
  data = ["", "", "", "", "", "", "", "", ""];
  winner = "";
  player1_turn = true;
  player2_turn = false;
  render();
}

render();
