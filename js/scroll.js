export default function desplazamiento(btn) {
  const $botonUp = document.querySelector(btn);

  $botonUp.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
  });
  document.addEventListener("scroll", (e) => {
    if (window.scrollY < 300) {
      $botonUp.classList.remove("mostrar-btn-up");
    }
    if (window.scrollY >= 300) {
      $botonUp.classList.add("mostrar-btn-up");
    }
  });
}
