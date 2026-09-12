const contactForm = document.querySelector(".contact-form");
const claimForm = document.querySelector("#claimForm");
const claimType = document.querySelector("#claimType");
const claimMessage = document.querySelector("#claimMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    contactForm.reset();
});

const requestedType = new URLSearchParams(window.location.search).get("tipo");
if (["envios", "pagos", "devoluciones"].includes(requestedType)) {
    claimType.value = requestedType;
}

claimForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!claimForm.checkValidity()) {
        claimForm.reportValidity();
        return;
    }

    const name = claimForm.elements.nombre.value.trim();
    claimMessage.textContent = `Gracias, ${name}. Recibimos tu reclamo y nos comunicaremos a la brevedad.`;
    claimForm.reset();
});