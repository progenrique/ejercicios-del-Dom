export default function formulario(form) {
  const $form = document.getElementById(form);
  let ventana;

  document.addEventListener("submit", (e) => {
    e.preventDefault();
    ventana = window.open(
      $form.direccion.value,
      "ventana",
      `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
    );
  });

  document.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      ventana.close();
      console.log("cerrar");
    }
  });
}
