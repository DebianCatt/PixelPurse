


setTimeout(function() {
    const container = document.getElementById('creatorsContainer');
    container.style.animation = 'scrollRight 20s linear infinite'; // 17s = 25s (total duration) - 8s (initial delay)
  }, 1); // 1000ms = 1s



  document
    .getElementById("loginLink")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("loginPopup").style.display = "block"; // Show the login popup
      document.getElementById("overlay").style.display = "block"; //dark overlay
    });

  //when user click outside the form
  document.getElementById("overlay").addEventListener("click", function () {
    document.getElementById("loginPopup").style.display = "none"; // Hide the login popup
    document.getElementById("overlay").style.display = "none"; // Hide the overlay
  });