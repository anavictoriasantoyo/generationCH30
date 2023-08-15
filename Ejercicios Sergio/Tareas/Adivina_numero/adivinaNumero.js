document.addEventListener("DOMContentLoaded", function () {
    const empezarBtn = document.getElementById("empezar");
    const resultadoP = document.getElementById("resultado");

    empezarBtn.addEventListener("click", function () {
        let min = 1;
        let max = 100;
        let adivinado = 50;
        let confirmacion = confirm(`¿Es el número que estás pensando ${adivinado}?`);

        while (!confirmacion) {
            const mayorMenor = confirm(`¿Es el número que estás pensando mayor que ${adivinado}?`);
            if (mayorMenor) {
                min = adivinado + 1;
            } else {
                max = adivinado - 1;
            }
            adivinado = Math.floor((min + max) / 2);
            confirmacion = confirm(`¿Es el número que estás pensando ${adivinado}?`);
        }

        resultadoP.textContent = `Tu número es el ${adivinado}, ¡excelente decisión!`;
    });
});