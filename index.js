let hscore = 0;
let gscore = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function add1h() {
  hscore += 1;
  homeScore.textContent = hscore;
}
function add2h() {
  hscore += 2;
  homeScore.textContent = hscore;
}
function add3h() {
  hscore += 3;
  homeScore.textContent = hscore;
}
function add1g() {
  gscore += 1;
  guestScore.textContent = gscore;
}
function add2g() {
  gscore += 2;
  guestScore.textContent = gscore;
}
function add3g() {
  gscore += 3;
  guestScore.textContent = gscore;
}

function reset() {
  hscore = 0;
  gscore = 0;
  homeScore.textContent = hscore;
  guestScore.textContent = gscore;
}
