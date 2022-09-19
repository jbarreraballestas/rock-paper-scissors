draws = 0;
wins = 0;
losses = 0;
document.addEventListener("DOMContentLoaded", () => {
  if (('wins' in localStorage)) {
    wins = localStorage.wins
  } else {
    localStorage.wins = wins
  }
  if (('losses' in localStorage)) {
    losses = localStorage.losses
  } else {
    localStorage.losses = losses
  }
  if (('draws' in localStorage)) {
    draws = localStorage.draws
  } else {
    localStorage.draws = draws
  }
  setData();
});

function play(player) {
  // 0 = rock; 1 = paper; 2 = scissors
  pc = Math.floor(Math.random() * 3);
  pc_img = pc === 0 ? "Rock" : (pc === 1 ? "Paper" : "Scissors")
  p1_img = player === 0 ? "Rock" : (player === 1 ? "Paper" : "Scissors")
  content = '<div class="flex items-center justify-center"><img src="img/'+p1_img+'.png" alt="Rock" width="100" height="" /> <span class="m-3">VS</span> <img src="img/'+pc_img+'.png" alt="Rock" width="100" height="" /> </div>';


  if (pc === player) {//tie
    draws++;
    Swal.fire({ html: content+"<h1>Tie</h1>", confirmButtonColor: '#000000', confirmButtonText: '<i class="fa-solid fa-face-grin-beam-sweat fa-2xl"></i>' });
  } else if ((player === 0 && pc === 2) || (player === 1 && pc === 0) || (player === 2 && pc === 1)) {//you win
    wins++;
    Swal.fire({ html: content+"<h1>You Win</h1>", confirmButtonColor: '#007c43', confirmButtonText: '<i class="fa-solid fa-face-laugh-beam fa-2xl"></i>' });
  } else {//you lose
    losses++;
    Swal.fire({ html: content+"<h1>You Lose</h1>", confirmButtonColor: '#bf0000', confirmButtonText: '<i class="fa-solid fa-face-sad-cry fa-2xl"></i>' });
  }
}
function setData() {
  localStorage.wins = wins
  localStorage.losses = losses
  localStorage.draws = draws

  document.getElementById('txt_wins').innerHTML = wins;
  document.getElementById('txt_losses').innerHTML = losses;
  document.getElementById('txt_draws').innerHTML = draws;
}