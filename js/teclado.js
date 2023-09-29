export default function teclado(circulo, fondo) {
  let down = 0;
  let rigth = 0;
  const velocidad = 30;
  const $pelota = document.querySelector(circulo),
    $fondo = document.querySelector(fondo);

  document.addEventListener("keydown", (e) => {
    const limitePelota = $pelota.getBoundingClientRect(),
      limiteFondo = $fondo.getBoundingClientRect();

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (limitePelota.bottom < limiteFondo.bottom) {
        down += velocidad;
        $pelota.style.top = `${down}px`;
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (limitePelota.top > limiteFondo.top) {
        down -= velocidad;
        $pelota.style.top = `${down}px`;
      }
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (limiteFondo.right > limitePelota.right) {
        rigth += velocidad;
        $pelota.style.left = `${rigth}px`;
      }
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (limiteFondo.left < limitePelota.left) {
        rigth -= velocidad;
        $pelota.style.left = `${rigth}px`;
      }
    }
    if (e.altKey && e.key === "a") {
      alert("se ejecuto la alerta ");
    }
    if (e.altKey && e.key === "p") {
      prompt("se ejecuto el prompt ");
    }
    if (e.altKey && e.key === "c") {
      confirm("se ejecuto la confirm ");
    }
  });
}
