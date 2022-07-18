let btn = document.getElementById("toggleBtn");
let bulb = document.getElementById("bulb");
btn.addEventListener("click", toggleBulb);
function toggleBulb() {
  if (btn.textContent.includes("Turn On")) {
    bulb.src = "img/on_bulb.png";
    btn.textContent = "Turn Off";
  } else {
    bulb.src = "img/of_bulb.png";
    btn.textContent = "Turn On";
  }
}
