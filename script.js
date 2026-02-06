document.getElementById('btnIngresar').addEventListener('click', function() {
    // Agregamos un efecto visual de clic antes de salir
    this.style.innerText = "CARGANDO...";
    
    setTimeout(() => {
        window.location.href = "https://app.jotform.com/250947460889675";
    }, 300); // 300 milisegundos de delay para suavidad
});
