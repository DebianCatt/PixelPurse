function handleLogout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "../../index.html";
}

// Checker shits
document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener("click", handleLogout);
  }

  const username = localStorage.getItem("username");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userSpan = document.getElementById("user");

  if (isLoggedIn !== "true" || !username) {
    window.location.href = "../../index.html";
  } else {
    userSpan.textContent = username;
  }
});
