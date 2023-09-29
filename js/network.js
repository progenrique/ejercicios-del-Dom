export default function networkStatus() {
  const status = () => {
    let $div = document.createElement("div");
    if (navigator.onLine) {
      $div.classList.add("online");
      $div.classList.remove("ofline");
      $div.textContent = `CONEXION RESTABLECIDA`;
    } else {
      $div.classList.add("ofline");
      $div.classList.remove("online");
      $div.textContent = `CONEXION PERDIDA`;
    }

    document.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => {
      document.body.removeChild($div);
    }, 1500);
  };

  window.addEventListener("online", status);
  window.addEventListener("offline", status);
}
