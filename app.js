
gsap.registerPlugin(ScrollTrigger);

// creamos una instancia de SplitType, pasando como argumento la clase que corresponde al texto que queremos splitear
// la clase char es asignada automáticamente por la librería SplitType a cada carácter después de hacer el split del texto
// creamos una variable que tome estos char
const agsTittle = new SplitType('.header__tittle');
const chars = document.querySelectorAll('.header__tittle .char');


const navbar = document.querySelector('.navbar');
const ellipse = document.querySelector('.galleryContent__ellipse');
const ellipseArrow = document.querySelector('.galleryContent__ellipse__arrow');
const galleryContainer = document.querySelector('.galleryContent');
const textImg03 = document.querySelector('.galleryContent__img3Text');
const buttonInitialPoint = document.querySelector('.button__initialPoint');
const galleryContentContainer = document.querySelector('.galleryContent__container');
const contenedor = document.querySelector('.galleryContent');
const footer = document.querySelector('.footer');
const footerText = document.querySelector('.footer__text');
const footerTextContent = document.querySelector('.footer__textContent');
const footerAgs = document.querySelector('.footer__assetAgs');
const footerPhotographer = document.querySelector('.footer__assetPhotographer');
const footerItems = document.querySelectorAll('.navbar__item a');
const footerMenu = document.querySelector('.menu a');



const timeline = gsap.timeline();
let timelineScroll;

playInitialAnimaton(timeline);


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
        .to(footerPhotographer, {transform: 'rotate(-27.109deg)', duration: 0.2},">")
        .to(footerPhotographer, {transform: 'rotate(27.109deg)', duration: 0.2},">")
        .to(footerPhotographer, {transform: 'rotate(7.109deg)', duration: 0.1},">")



    buttonInitialPoint.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


}


function printScrollPosition() {
    console.log("Posición del scroll:", window.scrollY);
}


window.addEventListener('scroll', printScrollPosition);


// hover elipse -> la flecha se desplaza
ellipse.addEventListener('mouseleave', () => {
    gsap.to(ellipseArrow, { left: '-14%', ease: 'power2', duration: 0.2 })
});

ellipse.addEventListener('mouseover', () => {
    gsap.to(ellipseArrow, { left: '6%', ease: 'power2', duration: 0.2 })
});



// hover texto de footer -> se desplaza
footerText.addEventListener('mouseover', function (event) {

    let footerInView = false;
    let footerRect = footer.getBoundingClientRect();
    let windowWidth = window.innerWidth;

    if (footerRect.left >= 0 && footerRect.right <= windowWidth) {
        footerInView = true; 
        footerTextContent.style.left = '-32.5%';
        footerAgs.style.transform = 'rotate(45deg)';
    }

})

footerText.addEventListener('mouseleave', function (event) {
    footerTextContent.style.left = '0';
    footerAgs.style.transform = 'rotate(-17.125deg)';

});



// cambiar navbar a blanco cuando aparece el footer
function checkFooterVisibility() {


    footerItems.forEach(function (item) {

        let footerRect = footer.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();

        if (itemRect.right >= footerRect.left && itemRect.left <= footerRect.right) {

            item.classList.remove('blackVersion');
            item.classList.add('whiteVersion');

            if (item.classList.contains('underlineLink--black')) {
                item.classList.remove('underlineLink--black');
                item.classList.add('underlineLink--white');
            }

        } else {

            item.classList.remove('whiteVersion');
            item.classList.add('blackVersion');

            if (item.classList.contains('underlineLink--white')) {
                item.classList.remove('underlineLink--white');
                item.classList.add('underlineLink--black');
            }

        }

    })


}


window.addEventListener('scroll', checkFooterVisibility);
