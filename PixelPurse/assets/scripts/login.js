document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const messageDiv = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // DUMMY USERS FOR DEMO PURPOSES - SINCE WE DON'T HAVE A DATABASE
        const dummyUsers = [
            { username: "juan_pedro", password: "juanpedro123" }, //Main user for demo
            { username: "user2", password: "password2" },
            { username: "user3", password: "password3" }
        ];


        // User creds checker oh yeah
        const user = dummyUsers.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);
            window.location.href = "./pages/Products.html";
        } else {
            messageDiv.textContent = "Invalid username or password.";
        }
    });
});
