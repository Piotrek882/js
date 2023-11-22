
const section = document.getElementById("section");

function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
  section.style.display = 'none';
  canvas.setAttribute('height', rightCanvasheight);
  canvas.setAttribute('width', rightCanvaswidth);
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
function handleFullscreenChange() {
  if (document.fullscreenElement === null) {
    section.style.display = 'flex';
    canvas.setAttribute('width', canvas.primeWidth);
    canvas.setAttribute('height', canvas.primeHeight);
  }
}