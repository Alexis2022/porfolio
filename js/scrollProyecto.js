const cajaProyecto = document.querySelectorAll(".flex-proyectos");

const mostrarProyecto = (entradas, observador)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting) entrada.target.classList.add("visible");
        else entrada.target.classList.remove("visible");
    });
}

const observador = new IntersectionObserver(mostrarProyecto, {
    root: null,
    rootMargin: "20px",
    threshold: 1
});

observador.observe(cajaProyecto[0]);
observador.observe(cajaProyecto[1]);
observador.observe(cajaProyecto[2]);