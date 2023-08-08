const canvas = document.querySelector(".projectsCanvas");
const contenedor = document.querySelector(".projectsContent");

const navbarAgs = document.getElementById('ags');

import { mouseCursor, imagesProjects } from './cursor.js';

Draggable.create(".projectsCanvas", {

    zIndexBoost: false, // para que no agregue z-index 1000 por defecto
    bounds: contenedor, // setea el límite hasta donde se puede mover
    edgeResistance: 0.65,


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

        // cambia cursor
        mouseCursor.classList.remove('cursor-projects');
        mouseCursor.classList.add('cursor-projects-little');

    },

    onDragEnd: function () {

        imagesProjects.forEach(imgOnHover => {
            const img = imgOnHover.querySelector('.img');
            img.style.transform = 'scale(1)';

        });

        // cambia cursor
        mouseCursor.classList.remove('cursor-projects-little');
        mouseCursor.classList.add('cursor-projects');
    },

});

const screenWidth = document.documentElement.clientWidth;

if (screenWidth <= 768) {
    navbarAgs.remove();
}