function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

function printClock() {
  clock.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.add("animate__animated", "animate__fadeInDown");
  getClock();
  setInterval(getClock, 1000);
}

if (savedUsername) {
  printClock();
}
