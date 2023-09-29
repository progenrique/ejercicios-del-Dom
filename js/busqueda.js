export default function filtroBusqueda(idInput, idContenedor) {
  const $contenedor = document.getElementById(idContenedor),
    $input = document.getElementById(idInput),
    divs = $contenedor.getElementsByTagName("div"),
    tarjetas = $contenedor.getElementsByTagName("p");

  $input.addEventListener("keyup", (e) => {
    for (let i = 0; i < tarjetas.length; i++) {
      if (!tarjetas[i].innerHTML.includes($input.value)) {
        divs[i].classList.add("none");
      }
    }
  });

  $input.addEventListener("keyup", (e) => {
    for (let i = 0; i < tarjetas.length; i++) {
      if (tarjetas[i].innerHTML.includes($input.value)) {
        divs[i].classList.remove("none");
      }
    }
  });
}
