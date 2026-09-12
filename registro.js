const registerForm = document.querySelector("#registerForm");
const formMessage = document.querySelector("#formMessage");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const birthDateInput = document.querySelector("#fechaNacimiento");
const nameInput = document.querySelector("#nombre");
const lastNameInput = document.querySelector("#apellido");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#telefono");
const regionInput = document.querySelector("#region");
const termsCheckbox = document.querySelector("#terms");

birthDateInput.max = new Date().toISOString().split("T")[0];

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "";

    if (!registerForm.checkValidity()) {
        registerForm.reportValidity();
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        formMessage.textContent = "Las contraseñas no coinciden.";
        confirmPasswordInput.focus();
        return;
    }

    const user = {
        nombre: nameInput.value.trim(),
        apellido: lastNameInput.value.trim(),
        usuario: document.querySelector("#usuario").value.trim(),
        email: emailInput.value.trim().toLowerCase(),
        password: passwordInput.value,
        fechaNacimiento: birthDateInput.value,
        telefono: phoneInput.value.trim(),
        region: regionInput.value
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUserTimestamp");
    window.location.href = "login.html";
});
