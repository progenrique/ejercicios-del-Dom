export default function responsive(id, mq, contentMovil, contentDesktop) {
  let mediaQuerry = window.matchMedia(mq);

  const mostrarElementos = (listaMQ) => {
    if (listaMQ.matches) {
      document.getElementById(id).innerHTML = contentDesktop;
    } else {
      document.getElementById(id).innerHTML = contentMovil;
    }
  };

  mediaQuerry.addListener(mostrarElementos);
  mostrarElementos(mediaQuerry);
}
