export default function deteccionVideo() {
  const $videos = document.querySelectorAll("video[data-vodeo-deteccion]");
  const $video = document.querySelector("video[data-vodeo-deteccion]");
  window.addEventListener("visibilitychange", (e) => {
    $videos.forEach((el) => {
      if (document.hidden) {
        // es un bool es parte del evento visibilitychange si esta en esa pestaña es falso pero si no estamos en la pagina es verdadero
        el.pause();
      } else {
        el.play();
      }
    });
  });
  const cb = (entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    threshold: [0.5, 0.75],
  });

  $videos.forEach((el) => {
    observer.observe(el);
  });
}
