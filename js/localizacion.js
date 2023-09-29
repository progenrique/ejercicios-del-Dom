export default function getGeoLocation(id) {
  const $div = document.getElementById(id);
  const opciones = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };
  const success = (posicion) => {
    let latitud = posicion.coords.latitude;
    let longitud = posicion.coords.longitude;
    let precicion = posicion.coords.accuracy;

    $div.innerHTML = `
    <p>Tu posicion actual es:</p>
    <ul>
    <li>Latitud <b>${latitud}</b></li>
    <li>Longitud <b>${longitud}</b></li>
    <li>Precicion <b>${precicion}</b></li>
    </ul>
    <a href="https://www.google.com.mx/maps/@${latitud},${longitud},15z" target=_"blank" rel="noopener">Ver en google maps</a>
    `;
  };
  const error = (err) => {
    console.log(err.code, err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, opciones);
}
