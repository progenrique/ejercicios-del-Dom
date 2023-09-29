export default function relojAlarma(
  iniReloj = null,
  detReloj,
  iniAlarma,
  detAlarma,
  temporizador
) {
  let reloj;
  let audio = new Audio("../asets/Demon.mp3");
  document.addEventListener("click", (e) => {
    if (e.target.matches(iniReloj)) {
      document.querySelector(temporizador).classList.remove("none");
      document.querySelector(iniReloj).disabled = true;

      reloj = setInterval(() => {
        document.querySelector(temporizador).textContent =
          new Date().toLocaleTimeString();
      }, 1000);
    }
    if (e.target.matches(detReloj)) {
      clearInterval(reloj);
      document.querySelector(temporizador).classList.add("none");
      document.querySelector(iniReloj).disabled = false;
    }
    if (e.target.matches(iniAlarma)) {
      audio.play();
      document.querySelector(iniAlarma).disabled = true;
    }
    if (e.target.matches(detAlarma)) {
      audio.pause();
      document.querySelector(iniAlarma).disabled = false;
    }
  });
}
