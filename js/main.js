document.addEventListener("DOMContentLoaded", () => {
    const bienvenida = document.getElementById("bienvenida");
    const login = document.getElementById("login");

    // Espera 3 segundos y cambia a login
    setTimeout(() => {
        bienvenida.style.opacity = "0";
        setTimeout(() => {
            bienvenida.classList.add("oculto");
            login.classList.remove("oculto");
        }, 1000);
    }, 3000);
});