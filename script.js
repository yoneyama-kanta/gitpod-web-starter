function omikujifun() {
  let l = Math.random();
  if (l < 0.2) {
    omikuji_result.textContent = "大吉";
  } else if (l >= 0.2 && l < 0.7) {
    omikuji_result.textContent = "吉";
  } else {
    omikuji_result.textContent = "凶";
  }
}
let omikuji_result = document.getElementById("result");
let omikuji = document.getElementById("omikuji");
omikuji.onclick = omikujifun;

let t = -1;
let start_button = document.getElementById("start");
let times = document.getElementById("time");
function countup() {
  t++;
  times.textContent = t;
}
start_button.onclick = setInterval(countup, 1000);
