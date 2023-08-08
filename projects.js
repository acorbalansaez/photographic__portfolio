const canvas = document.querySelector(".projectsCanvas");
const contenedor = document.querySelector(".projectsContent");

// let isDragging = false;
// let lastX = 0;
// let lastY = 0;

// let translateXInicial = -200 * document.documentElement.clientWidth / 100; // -500vw en px
// let translateYInicial = -200 * document.documentElement.clientHeight / 100; // -500vh en px
// let translateX = translateXInicial;
// let translateY = translateYInicial;

// canvas.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     lastX = e.clientX;
//     lastY = e.clientY;
// });

// canvas.addEventListener('mouseup', () => {
//     isDragging = false;
// })

// canvas.addEventListener('mousemove', (e) => {

//     if (isDragging) {
//         const deltaX = e.clientX - lastX;
//         const deltaY = e.clientY - lastY;
//         lastX = e.clientX;
//         lastY = e.clientY;

//         // translateX += deltaX;
//         // translateY += deltaY;

//         // Calcular las nuevas coordenadas de translación
//         let newTranslateX = translateX + deltaX;
//         let newTranslateY = translateY + deltaY;

//         // Verificar si las nuevas coordenadas están dentro de los límites del viewport
//         const maxTranslateX = 0;
//         const maxTranslateY = 0;
//         const minTranslateX = -(canvas.clientWidth - document.documentElement.clientWidth);
//         const minTranslateY = -(canvas.clientHeight - document.documentElement.clientHeight);

//         // Limitar las coordenadas de translación a los límites del viewport
//         newTranslateX = Math.max(minTranslateX, Math.min(maxTranslateX, newTranslateX));
//         newTranslateY = Math.max(minTranslateY, Math.min(maxTranslateY, newTranslateY));

//         // Actualizar las coordenadas de translación
//         translateX = newTranslateX;
//         translateY = newTranslateY;

//         canvas.style.transform = `translate(${translateX}px, ${translateY}px)`;

//     }

// })

Draggable.create(".projectsCanvas", {

    zIndexBoost:false, // para que no agregue z-index 1000 por defecto
    bounds: contenedor, //setea el límite hasta donde se puede mover

});
