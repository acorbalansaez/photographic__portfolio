const canvas = document.querySelector(".projectsCanvas");
const contenedor = document.querySelector(".projectsContent");

import { mouseCursor, imagesProjects } from './cursor.js';

Draggable.create(".projectsCanvas", {

    zIndexBoost: false, // para que no agregue z-index 1000 por defecto
    bounds: contenedor, // setea el límite hasta donde se puede mover

    onDrag: function () {

        // actualiza la posición del cursor personalizado mientras se arrastra
        const pointerX = this.pointerX;
        const pointerY = this.pointerY;
        mouseCursor.style.left = `${pointerX}px`;
        mouseCursor.style.top = `${pointerY}px`;

        // achica las imgs mientras se produce el arrastre
        imagesProjects.forEach(imgOnHover => {
            const img = imgOnHover.querySelector('.img');
            img.style.transform = 'scale(0.92)';
        });

    },

    onDragEnd: function () {
        imagesProjects.forEach(imgOnHover => {
            const img = imgOnHover.querySelector('.img');
            img.style.transform = 'scale(1)';
        });
    }

});
