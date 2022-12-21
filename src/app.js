let win = 0,
  lose = 0,
  draw = 0;

function game(val) {
  let random_num = Math.floor(Math.random() * 3);
  console.log(random_num);
  if (random_num == val) {
    document.querySelector(".draw").innerHTML =
      "Draw : " + (draw += 1).toString();
    document.querySelector(".answer").innerHTML = "computer chose the same";
    document.querySelector(".comment").innerHTML = "It is a draw";
  } else if (random_num == 0) {
    if (val == 2) {
      document.querySelector(".lose").innerHTML =
        "Lose : " + (lose += 1).toString();
      document.querySelector(".answer").innerHTML = "computer chose 'Rock'";
      document.querySelector(".comment").innerHTML = "OOps! You lose..";
    } else if (val == 1) {
      document.querySelector(".win").innerHTML =
        "Win : " + (win += 1).toString();
      document.querySelector(".answer").innerHTML = "computer chose 'Rock'";
      document.querySelector(".comment").innerHTML = "Yahh!! You Win";
    }
  } else if (random_num == 1) {
    if (val == 0) {
      document.querySelector(".lose").innerHTML =
        "Lose : " + (lose += 1).toString();
      document.querySelector(".answer").innerHTML = "computer chose 'Paper'";
      document.querySelector(".comment").innerHTML = "OOps! You lose..";
    } else if (val == 2) {
      document.querySelector(".win").innerHTML =
        "Win : " + (win += 1).toString();
      document.querySelector(".answer").innerHTML = "computer chose 'Paper'";
      document.querySelector(".comment").innerHTML = "Yahh!! You Win";
    }
  } else if (random_num == 2) {
    if (val == 1) {
      document.querySelector(".lose").innerHTML =
        "Lose : " + (lose += 1).toString();
      document.querySelector(".answer").innerHTML = "computer chose 'Scissor'";
      document.querySelector(".comment").innerHTML = "OOps! You lose..";
    } else if (val == 0) {
      document.querySelector(".win").innerHTML =
        "Win : " + (win += 1).toString();
      document.querySelector(".answer").innerHTML = "computer chose 'Scissor'";
      document.querySelector(".comment").innerHTML = "Yahh!! You Win";
    }
  }
}

let open = false;

function view_RPS() {
  if (open == false) {
    document.querySelector(".rock_paper_scissor_game").style.display = "flex";
    open = true;
  } else if (open == true) {
    document.querySelector(".rock_paper_scissor_game").style.display = "none";
    open = false;
  }
}
