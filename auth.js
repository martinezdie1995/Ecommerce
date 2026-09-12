const sessionDuration = 30 * 60 * 1000;
const sessionTimestamp = Number(localStorage.getItem("currentUserTimestamp"));
let currentUser = null;

try {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
} catch {
  localStorage.removeItem("currentUser");
}

if (
  currentUser
  && (!sessionTimestamp || Date.now() - sessionTimestamp >= sessionDuration)
) {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentUserTimestamp");
  currentUser = null;
}

const navActions = document.querySelector(".nav-actions");

if (navActions && currentUser) {
  const loginButton = navActions.querySelector(".btn-light");
  const welcomeMessage = document.createElement("span");
  const logoutButton = document.createElement("button");

  welcomeMessage.className = "welcome-message";
  welcomeMessage.textContent = `Bienvenido, ${currentUser.nombre}`;

  if (loginButton) {
    loginButton.remove();
  }

  logoutButton.type = "button";
  logoutButton.className = "btn btn-light";
  logoutButton.textContent = "Cerrar sesión";
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUserTimestamp");
    window.location.href = "inicio.html";
  });

  navActions.prepend(welcomeMessage);
  navActions.append(logoutButton);
}
