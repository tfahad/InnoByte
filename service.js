function playVideo(videoUrl) {
    // Retrieve the video container element
    var videoContainer = document.getElementById('video-container');
    
    // Embed the video player with the specified URL
    videoContainer.innerHTML = '<video width="80%" autoplay preload plyasinline><source src="' + videoUrl + '" type="video/mp4"></video>';
  }


  // Play the first video by default when the page loads
  window.onload = function() {
    playVideo('img/video/print.mp4');
  };
