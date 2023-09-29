export default function cuentaRegresiva(anio, mes, dia) {
  const fechaCumple = new Date(anio, mes, dia),
    $regresiva = document.querySelector(".regresiva");

  setInterval(() => {
    const fechaHoy = new Date();

    let tiempoFaltante = fechaCumple - fechaHoy,
      dias = tiempoFaltante / 86400000,
      horas = (dias - Math.trunc(dias)) * 24,
      minutos = (horas - Math.trunc(horas)) * 60,
      segundos = (minutos - Math.trunc(minutos)) * 60;

    $regresiva.innerHTML = `<h4> 
    ${Math.trunc(dias)} Dias 
    ${Math.trunc(horas)} Horas 
    ${Math.trunc(minutos)} Minutos y 
    ${Math.trunc(segundos)} Segundos  
    </h4>`;
  }, 1000);
}
