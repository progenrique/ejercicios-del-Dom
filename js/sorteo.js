export default function sorteoLenguajes(boton, lenguaje) {
  const sorteo = (lenguaje) => {
    let listaParticipantes = document.querySelectorAll(lenguaje);
    let indentificador = Math.floor(Math.random() * listaParticipantes.length),
      ganador = listaParticipantes[indentificador].textContent;
    return `El ganador es ${ganador}`;
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(boton)) {
      let resultado = sorteo(lenguaje);
      alert(resultado);
    }
  });
}
