export default function nocturno(btnNocturno) {
  let $root = document.documentElement,
    $btnNocturno = document.querySelector(btnNocturno),
    $body = document.querySelector(".body"),
    variableControl = 0;

  const darkmode = () => {
      $root.style.setProperty("--first-color", "#353535");
      $root.style.setProperty("--text-color", "#ffff00");
      $body.style.setProperty("background-color", "black");
      variableControl = 1;
      localStorage.setItem("tema", "dark");
    },
    ligthmode = () => {
      $root.style.setProperty("--first-color", "#ffff00");
      $root.style.setProperty("--text-color", "#353535");
      $body.style.setProperty("background-color", "white");
      variableControl = 0;
      localStorage.setItem("tema", "ligth");
    };

  $btnNocturno.addEventListener("click", (e) => {
    if (variableControl === 0) {
      darkmode();
    } else if (variableControl === 1) {
      ligthmode();
    }
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("tema") === null) {
      localStorage.setItem("tema", "ligth");
    }
    if (localStorage.getItem("tema") === "ligth") {
      ligthmode();
    }
    if (localStorage.getItem("tema") === "dark") {
      darkmode();
    }
  });
}
