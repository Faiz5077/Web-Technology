document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        document.getElementById("message").innerHTML =
            "Login Successful!";
    } else {
        document.getElementById("message").innerHTML =
            "Invalid Username or Password!";
    }
});
