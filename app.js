
gsap.registerPlugin(ScrollTrigger);

// creamos una instancia de SplitType, pasando como argumento la clase que corresponde al texto que queremos splitear
// la clase char es asignada automáticamente por la librería SplitType a cada carácter después de hacer el split del texto
// creamos una variable que tome estos char
const agsTittle = new SplitType('.header__title');
const chars = document.querySelectorAll('.header__title .char');

// definicion de variables
const cover = document.querySelector('.cover');
const navbar = document.querySelector('.navbar');
const navbarAgs = document.getElementById('ags');
const ellipse = document.querySelector('.galleryContent__ellipse');
const ellipseArrow = document.querySelector('.galleryContent__ellipse__arrow');
const galleryContainer = document.querySelector('.galleryContent');
const textImg03 = document.querySelector('.galleryContent__img3Text');
const buttonInitialPoint = document.querySelector('.button__initialPoint');
const galleryContentContainer = document.querySelector('.galleryContent__container');
const contenedor = document.querySelector('.galleryContent');
const footerContact = document.querySelector('.footer__contact');
const footerContactRow1 = footerContact.querySelector(':first-child');

let timelineScroll;
let timelineScrollMobile;

const screenWidth = document.documentElement.clientWidth;


function animationController() {

    if (screenWidth >= 768) {
        animateDesktop();
    } else {
        animateMobile();
        buttonInitialPoint.classList.remove("button__initialPoint--inactive");
        buttonInitialPoint.classList.add("button__initialPoint--active");
        navbarAgs.remove();
        footerContactRow1.remove();
    }

}

function animateMobile() {
    const timeline = gsap.timeline();
    playMobileAnimation(timeline);
}

function playMobileAnimation(timeline) {
    timeline.fromTo(chars, { y: '100vh' }, { y: 0, stagger: 0.1, duration: 0.5 }, 0)
        .fromTo(".imgGallery01", { autoAlpha: 0, top: '26vh' }, { autoAlpha: 1, top: '16vh', ease: 'power2', duration: 1 }, 0.3)
        .fromTo(".imgGallery02", { autoAlpha: 0, top: '30vh' }, { autoAlpha: 1, top: '20vh', ease: 'power2', duration: 1 }, 0.5)
        .fromTo(".imgGallery03", { autoAlpha: 0, top: '-84vh' }, { autoAlpha: 1, top: '-74vh', ease: 'power2', duration: 1 }, 0.2)
        .fromTo(".navbar", { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2', duration: 1 }, 0.5)
        .fromTo(".button__initialPoint", { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2', duration: 0.1 }, 0.8)


    buttonInitialPoint.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    //A DESARROLLAR
    timelineScrollMobile = gsap.timeline({
        scrollTrigger: {
            scrub: 2,
            trigger: "imgGallery04",
            start: "top top",
        }
    })

    timelineScrollMobile.set(".imgGallery02",{x: 0}, 0)
    .to(".imgGallery02", { x: -150, ease: 'power2', duration: 0.4 }, 0.1)
    .to(".galleryContent", {y: 150, ease: 'power2', duration: 0.2 }, 0.1)
    .set(".imgGallery01",{x: 0}, 0)
    .to(".imgGallery01", {x: 100}, 0.1)
    .set(".imgGallery03",{x: 0}, 0)
    .to(".imgGallery03", {x: 100}, 0.1)
    .fromTo(".imgGallery04", { scale: 1, top: '-12vh' }, { scale: 1.2, top: '5vh', ease: 'power2', duration: 1 }, 0.2)
    .fromTo(".footer__assetPhotographer", {scale: 0}, {scale: 1, ease: 'power2', duration: 0.3 }, 1.7)
    .fromTo(".footer__text", {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: 'power2', duration: 0.3 }, 1.5)

}


function animateDesktop() {

    const timeline = gsap.timeline();
    playInitialAnimaton(timeline);

    // hover elipse -> la flecha se desplaza
    ellipse.addEventListener('mouseleave', () => {
        gsap.to(ellipseArrow, { left: '-14%', ease: 'power2', duration: 0.2 })
    });

    ellipse.addEventListener('mouseover', () => {
        gsap.to(ellipseArrow, { left: '6%', ease: 'power2', duration: 0.2 })
    });


}


function playInitialAnimaton(timeline) {

    timeline.fromTo(chars, { y: '100vh' }, { y: 0, stagger: 0.1, duration: 0.5 }, 0)

        .fromTo(".imgGallery01", { top: "100vh", autoAlpha: 0 }, { top: "36vh", autoAlpha: 1, ease: 'power2', duration: 0.4 }, 0.9)
        .fromTo(".imgGallery02", { top: "100vh", autoAlpha: 0 }, { top: "24.29vh", autoAlpha: 1, ease: 'power2', duration: 1.2 }, 0.6)
        .fromTo(".imgGallery03", { top: "-100vh", autoAlpha: 0 }, { top: "14.29vh", autoAlpha: 1, ease: 'power2', duration: 1.2 }, 1)
        .to(chars, { y: '-100vh', stagger: 0.1, duration: 0.8 }, 1.5)
        .fromTo(navbar, { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2', duration: 1 }, 2.3)
        .fromTo(ellipse, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, ease: 'power2', duration: 0.2 }, 2.3)
        .to(".imgGallery02", { left: '36.74vw', ease: 'power2', duration: 1.2 }, 1.5)
        .fromTo(ellipseArrow, { rotation: -60 }, { rotation: 30, ease: 'power2', duration: 0.4 }, 2.5)
        .to(ellipseArrow, { rotation: -30, ease: 'power2', duration: 0.2 }, '-=0.4')
        .to(ellipseArrow, { rotation: 0, ease: 'power2', duration: 0.2 }, '-=0.2')
        .call(enableScrollTrigger) // llama a la función enableScrollTrigger cuando la animación se haya completado

}


function createScrollTrigger() {

    timelineScroll = gsap.timeline({
        scrollTrigger: {
            id: "scrollTrigger",
            pin: "body",
            scrub: 2,
            // markers: true,
            trigger: galleryContainer,
            end: 2500, // nro estimativo a re-ver
            //end: galleryContentContainer.scrollWidth - document.documentElement.clientWidth + galleryContentContainer.offsetWidth,
            yoyo: false,
            toggleActions: "none none none none",
            // invalidateOnRefresh: true,
        },
        invalidateOnRefresh: false, // permite que la línea de tiempo se invalide y actualice cuando se produce una actualización en la página
    })

    return timelineScroll;
}


function enableScrollTrigger() {

    let imgGallery01 = document.querySelector('.imgGallery01 .img');
    let imgGallery02 = document.querySelector('.imgGallery02 .img');

    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    let imgGallery01Width = viewportHeight * (imgGallery01.naturalWidth / imgGallery01.naturalHeight);
    let imgGallery02Width = viewportHeight * (imgGallery02.naturalWidth / imgGallery02.naturalHeight);

    if (!timelineScroll) {
        timelineScroll = createScrollTrigger();
    }


    timelineScroll.to(".imgGallery02", { top: '0vh', height: '100vh', width: imgGallery02Width, ease: 'power2', duration: 0.3 }, 0) // se utiliza la altura de la ventana (viewportHeight) multiplicada por la relación de aspecto de la imagen (imgGallery02.naturalWidth / imgGallery02.naturalHeight) para calcular el ancho deseado
        //.fromTo(ellipse, { autoAlpha: 1, scale: 1 }, { autoAlpha: 0, scale: 0, ease: 'power2', duration: 0.01, onStart: () => { ellipse.style.display = 'flex'; } }, 0)
        .fromTo(ellipse, { autoAlpha: 1, scale: 1 }, { autoAlpha: 0, scale: 0, ease: 'power2', duration: 0.01 }, 0)
        .fromTo(buttonInitialPoint, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, ease: 'power2', duration: 0.01, onStart: () => { buttonInitialPoint.style.display = 'flex'; } }, 0)
        .to(".imgGallery03", { top: '-100%', ease: 'power2', duration: 0.8 }, 0)
        .to(".imgGallery02", { left: '45.74vw', ease: 'power2', duration: 0.6 }, 0.1)
        .to(".imgGallery01", { left: '25vw', top: '50%', transform: `translateY(-50%)`, zIndex: 999, ease: 'power2', duration: 0.3 }, 0)
        .to(".imgGallery01", { width: imgGallery01Width, top: 0, transform: `translateY(0)`, ease: 'power2', duration: 0.4 }, 0.3)
        .to(".imgGallery02", { xPercent: '31', ease: 'power2', duration: 0.3 }, 0.3)
        .to(".imgGallery01", { left: '-100%', ease: 'power2', duration: 2.6 }, 0.7)
        .to(".imgGallery02", { left: '-20vw', ease: 'power2', duration: 1.5 }, 0.7)
        .to(".imgGallery03", { top: '50%', transform: `translateY(-50%)`, ease: 'power2', duration: 0.3 }, 0.7)
        .to(".imgGallery03", { left: '30vw', width: '24vw', ease: 'power2', duration: 1.8 }, 0.9)

        .fromTo(textImg03, { autoAlpha: 0 }, {
            autoAlpha: 1, ease: 'power2', duration: 0.4, onStart: () => {
                textImg03.style.display = 'block';
            }
        }, 1.8)

        .to(".imgGallery04", { left: '66vw', ease: 'power2', duration: 1.6 }, 1)
        .to(galleryContentContainer, { left: "-100%", duration: 1.8 }, ">") //la animación se inserta al final de la anterior
        .to(footer, { left: 0, duration: 1.8 }, "<") //la animación se inserta al principio de la anterior
        .to(footerPhotographer, { transform: 'rotate(-27.109deg)', duration: 0.2 }, ">")
        .to(footerPhotographer, { transform: 'rotate(27.109deg)', duration: 0.2 }, ">")
        .to(footerPhotographer, { transform: 'rotate(7.109deg)', duration: 0.1 }, ">")


    // Initial point button
    buttonInitialPoint.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


}


// ver posición de scroll
// function printScrollPosition() {
//     console.log("Posición del scroll:", window.scrollY);
// }
// window.addEventListener('scroll', printScrollPosition);



window.addEventListener('load', function () {
    // borrar cover (futuro loading)
    cover.remove();
    // permitir scroll
    document.body.classList.remove('no-scroll')
    // llamada a primera función
    animationController();
})




