import cuentaRegresiva from "./cuentaRegresiva.js";
import hamburger from "./hamburger.js";
import nocturno from "./nocturno.js";
import relojAlarma from "./reloj.js";
import desplazamiento from "./scroll.js";
import teclado from "./teclado.js";
import responsive from "./responsive.js";
import formulario from "./formulario.js";
import dispositivo from "./identificar-navegador.js";
import networkStatus from "./network.js";
import videoWeb from "./webcam.js";
import getGeoLocation from "./localizacion.js";
import filtroBusqueda from "./busqueda.js";
import sorteoLenguajes from "./sorteo.js";
import carrusel from "./carrusel.js";
import scrollEspia from "./scrol-espia.js";
import deteccionVideo from "./deteccion-video.js";
import formularioValidaciones from "./validaciones.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburger(".btn-menu", ".menu", ".menu-nav");
  relojAlarma(
    ".iniciar-reloj",
    ".detener-reloj",
    ".iniciar-alarma",
    ".detener-alarma",
    ".reloj"
  );
  teclado(".circulo", ".fondo");
  cuentaRegresiva(2024, 0, 2);
  desplazamiento(".btn-up");
  responsive(
    "youtube",
    "(min-width:750px)",
    `<a href="https://www.youtube.com/watch?v=yYAgBRO-aT8">Enlace a Youtube</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/yYAgBRO-aT8?si=L6as3P3J1OMihMVB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsive(
    "gmaps",
    "(min-width:750px)",
    `<a href="https://www.google.com.mx/maps/preview">Enlace a google maps</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15050.945407402258!2d-99.09028805!3d19.4237942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1694105763546!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  formulario("formulario");
  dispositivo(".ventana");
  videoWeb("webcam");
  getGeoLocation("mapa");
  filtroBusqueda("input-busqueda", "contenedor-etiquetas");
  sorteoLenguajes("#boton-ganador", ".lenguaje");
  carrusel();
  scrollEspia();
  deteccionVideo();
  formularioValidaciones();
});

nocturno(".btn-nocturno");
networkStatus("contenedor-etiquetas");
