export default function videoWeb(id) {
  const $video = document.getElementById(id);
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((resultadoPromesaVideo) => {
      $video.srcObject = resultadoPromesaVideo;
      $video.play();
    })
    .catch((err) => {
      //console.log(`sucedio el siguente error ${err}`);
    });
}
