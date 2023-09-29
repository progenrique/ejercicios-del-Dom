export default function formularioValidaciones() {
  const $form = document.querySelector(".form-validaciones"),
    $inputs = document.querySelectorAll(".form-validaciones [required]");

  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.textContent = input.title;
    $span.id = input.name;
    $span.classList.add("mensaje-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".form-validaciones [required]")) {
      let pattern = e.target.pattern || e.target.dataset.pattern,
        regexPattern = new RegExp(pattern);

      if (pattern) {
        const $spanError = document.getElementById(e.target.name);
        regexPattern.test(e.target.value)
          ? $spanError.classList.add("none")
          : $spanError.classList.remove("none");
      }

      if (!pattern) {
        const $spanError = document.getElementById(e.target.name);
        console.log(e.target.value);

        e.target.value == ""
          ? $spanError.classList.remove("none")
          : $spanError.classList.add("none");
      }
    }
  });
}

/* export default function formularioValidaciones(form) {
  const regexNombre =
      /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
    regexComentarios = /^.{1,250}$/,
    regexAsunto = /^.{1,15}$/,
    regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
    $form = document.querySelector(form);

  document.addEventListener("keyup", (e) => {
    const $mensajeError = document.querySelector(".mensaje-error");
    if (e.target === $form.nombre) {
      if (!regexNombre.test($form.nombre.value)) {
        $form.nombre.classList.remove("correcto");
        if (!$mensajeError) {
          $form.nombre.insertAdjacentHTML(
            "afterend",
            `<div class="mensaje-error">el campo nombre es incorrecto</div>`
          );
        }
      } else {
        $form.nombre.classList.add("correcto");
        if ($mensajeError) $mensajeError.remove();
      }
    }
    if (e.target === $form.email) {
      if (!regexEmail.test($form.email.value)) {
        $form.email.classList.remove("correcto");
        if (!$mensajeError) {
          $form.email.insertAdjacentHTML(
            "afterend",
            `<div class="mensaje-error">el campo email es incorrecto</div>`
          );
        }
      } else {
        $form.email.classList.add("correcto");
        if ($mensajeError) $mensajeError.remove();
      }
    }
    if (e.target === $form.asunto) {
      if (!regexAsunto.test($form.asunto.value)) {
        $form.asunto.classList.remove("correcto");
        if (!$mensajeError) {
          $form.asunto.insertAdjacentHTML(
            "afterend",
            `<div class="mensaje-error">el campo asunto no debe exceder los 15 caracteres</div>`
          );
        }
      } else {
        $form.asunto.classList.add("correcto");
        if ($mensajeError) $mensajeError.remove();
      }
    }
    if (e.target === $form.comentarios) {
      if (!regexComentarios.test($form.comentarios.value)) {
        $form.comentarios.classList.remove("correcto");
        if (!$mensajeError) {
          $form.comentarios.insertAdjacentHTML(
            "afterend",
            `<div class="mensaje-error">el campo comentarios no debe exceder los 250 caracteres</div>`
          );
        }
      } else {
        $form.comentarios.classList.add("correcto");
        if ($mensajeError) $mensajeError.remove();
      }
    }
  });
} */

/*  */
