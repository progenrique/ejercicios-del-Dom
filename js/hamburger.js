// esta parte es mi forma de hacerlo

/* export default function hamburger() {
  const $btnMenu = document.querySelector(".btn-menu"),
    $menu = document.querySelector(".menu"),
    $btnOpen = $btnMenu.firstElementChild,
    $btnClose = $btnMenu.lastElementChild;

  const mostrar = (e) => {
    $menu.classList.toggle("nodal");
    $btnOpen.classList.toggle("none");
    $btnClose.classList.toggle("none");
  };

  $btnMenu.addEventListener("click", mostrar);
  $menu.addEventListener("click", mostrar);
} */

//***********esta parte es la de el maestro*************

//en el if se puso || porque no se activava la ventana modal cuando se daba clic en el centro del boton solo en las orillas
//se puso el * para que cuando se da click en el boton y en todos los hijos del boton aplique los cambios
export default function hamburger(selector, elementoMover, menuLink) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(`${selector} *`) || e.target.matches(selector)) {
      document.querySelector(elementoMover).classList.toggle("nodal");
      document
        .querySelector(selector)
        .firstElementChild.classList.toggle("none");
      document
        .querySelector(selector)
        .lastElementChild.classList.toggle("none");
    }
    if (e.target.matches(menuLink) || e.target.matches(`${menuLink} *`)) {
      document.querySelector(elementoMover).classList.toggle("nodal");
      document
        .querySelector(selector)
        .firstElementChild.classList.toggle("none");
      document
        .querySelector(selector)
        .lastElementChild.classList.toggle("none");
    }
  });
}
