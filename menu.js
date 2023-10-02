// Detecta quando a página é rolada
window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var menu = document.getElementById("menu");

    // Verifica a posição atual da rolagem
    if (window.scrollY > 0) {
        header.style.backgroundColor = "#ffffff90"; // Define o fundo como branco
    } else {
        header.style.backgroundColor = "transparent"; // Mantém o fundo transparente
    }
});
