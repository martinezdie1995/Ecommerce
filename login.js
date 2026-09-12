const loginForm = document.querySelector(".auth-form");
const emailInput = document.getElementById("emailLogin");
const passwordInput = document.getElementById("passwordLogin");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;

    if (!user || email !== user.email || password !== user.password) {
        alert("Usuario o contraseña incorrectos");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("currentUserTimestamp", Date.now().toString());
    window.location.href = "inicio.html";
});

