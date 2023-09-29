const ua = navigator.userAgent;

export default function dispositivo(id) {
  const $ventana = document.querySelector(id),
    movil = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    so = {
      windows: () => ua.match(/windows nt/i),
      mac: () => ua.match(/mac os/i),
      linux: () => ua.match(/linux/i),
      any: function () {
        return this.mac() || this.linux() || this.windows();
      },
    },
    navegador = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edg/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };
  $ventana.innerHTML = `
  <h4> ${ua} </h4> 
  <h4> el sistema operativo en el que estas es ${
    movil.any() ? movil.any() : so.any()
  } </h4>
  <br>
  <h4> el navegador en el que estas es ${navegador.any()} </h4>
  `;
}
