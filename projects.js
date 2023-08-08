const canvas = document.querySelector(".projectsCanvas");
const contenedor = document.querySelector(".projectsContent");

const navbarAgs = document.getElementById('ags');
const buttonInitialPoint = document.querySelector('.button__initialPoint');

const screenWidth = document.documentElement.clientWidth;
let isMobile = screenWidth <= 768;

let hasDragged = false;

import { mouseCursor, imagesProjects } from './cursor.js';

Draggable.create(".projectsCanvas", {

    zIndexBoost: false, // para que no agregue z-index 1000 por defecto
    bounds: contenedor, // setea el límite hasta donde se puede mover
    edgeResistance: 0.65,

    onDragStart: function () {
        // Cambia el tipo de arrastre en mobile para permitir solo en el eje Y
        this.update(true);
        hasDragged = true;
    },


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

    type: isMobile ? "y" : "x,y"

});



function animateMobile(){

    const timelineMobile = gsap.timeline();
    timelineMobile.fromTo(".imgProjects01", { autoAlpha: 0, x: '40%' }, { autoAlpha: 1, x: '0', ease: 'power2', duration: 1 }, 0)
    .fromTo(".imgProjects02", { autoAlpha: 0, y: '40%' }, { autoAlpha: 1, y: '0', ease: 'power2', duration: 1 }, 0.2)
    .fromTo(".navbar", { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2', duration: 1 }, 0.5)
    .fromTo(".button__initialPoint", { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2', duration: 0.1 }, 0.8)
    // .call(animateScrollMobile)

}

function animateScrollMobile() {

    gsap.fromTo(".imgProjects03",{
        autoAlpha: 0,
        y: '10%'
    },
    {
        autoAlpha: 1,
        y: '0',
        scrollTrigger: {
            trigger: ".imgProjects03",
            start: "top bottom",
            end: "top - 20",
            scrub: 2,
        },
    }) 

    gsap.fromTo(".imgProjects04",{
        autoAlpha: 0,
        y: '10%'
    },
    {
        autoAlpha: 1,
        y: '0',
        scrollTrigger: {
            trigger: ".imgProjects04",
            start: "top bottom",
            end: "top - 60",
            scrub: 2,
        },
    }) 

    gsap.fromTo(".imgProjects05",{
        autoAlpha: 0,
        y: '10%'
    },
    {
        autoAlpha: 1,
        y: '0',
        scrollTrigger: {
            trigger: ".imgProjects05",
            start: "top bottom",
            end: "top - 60",
            scrub: 2,
        },
    }) 

    gsap.fromTo(".imgProjects06",{
        autoAlpha: 0,
        y: '10%'
    },
    {
        autoAlpha: 1,
        y: '0',
        scrollTrigger: {
            trigger: ".imgProjects06",
            start: "top bottom",
            end: "top - 60",
            scrub: 2,
        },
    }) 

    gsap.fromTo(".imgProjects07",{
        autoAlpha: 0,
        y: '10%'
    },
    {
        autoAlpha: 1,
        y: '0',
        scrollTrigger: {
            trigger: ".imgProjects07",
            start: "top bottom",
            end: "top - 60",
            scrub: 2,
        },
    }) 

}

// Initial point button
buttonInitialPoint.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // if (hasDragged) {
    //     console.log("ahre");
    //     gsap.to(canvas, {
    //         scrollTo: { y: 0 },
    //         duration: 0.5,
    //         ease: "power2.out",
    //     });
    // } else {
    //     console.log("no drag");
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // }
    
});



if (isMobile) {
    navbarAgs.remove();
    animateMobile();
}

