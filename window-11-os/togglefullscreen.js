function toggleFullScreen(element) {
    if (!document.fullscreenElement) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        /* Firefox */
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        /* IE 11 */
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozExitFullscreen) {
        /* Firefox */
        document.mozExitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE 11 */
        document.msExitFullscreen();
      }
    }
  }
  
  let button = document.getElementById("fullscreenButton");
  button.addEventListener("click", () => {
    toggleFullScreen(document.documentElement); 
  });
  