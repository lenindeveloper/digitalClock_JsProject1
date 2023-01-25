const hourel = document.getElementById("hour");
const minuteel = document.getElementById("minute");
const secondsel = document.getElementById("seconds");
const ampmel = document.getElementById("ampm");

function updateClock() {
  let hr = new Date().getHours();
  let mint = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "AM";

  if (hr > 12) {
    hr = hr - 12;
    ampm = "PM";
  }
  hr = hr < 10 ? "0" + hr : hr;
  hourel.innerText = hr;
  minuteel.innerText = mint;
  secondsel.innerText = sec;
  ampmel.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
