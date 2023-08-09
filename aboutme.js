gsap.registerPlugin(ScrollTrigger);

// definición de variables
const cover = document.querySelector('.cover--white');
const bigContainer = document.querySelector(".aboutMeContent");
const aboutMeSection1 = document.querySelector(".aboutMeSection1");
const assetPhotographer = document.querySelector(".aboutMeSection1__assetPhotographer");
const aboutMeSection3 = document.querySelector(".aboutMeSection3");
const buttonInitialPoint = document.querySelector('.button__initialPoint');
const navbarAgs = document.getElementById('ags');
const footerContact = document.querySelector('.footer__contact');
const footerContactRow1 = footerContact.querySelector(':first-child');

const timelineDesktop = gsap.timeline();
const timelineMobile = gsap.timeline();
let timelineScrollDesktop;

const screenWidth = document.documentElement.clientWidth;


function animationController(){

    if (screenWidth >= 768) {
        animateDesktop();
    } else {
        navbarAgs.remove();
        footerContactRow1.remove();
        animateMobile();
    }
}

function animateDesktop() {

    console.log("working");
    
    timelineDesktop.fromTo(assetPhotographer, { rotation: -60 }, { rotation: 30, ease: 'power2', duration: 1.5 }, 0)
        .fromTo(".aboutMeSection1__img01", { top: '200vh' }, { top: '-16vh', ease: 'power2', duration: 1.5 }, "<")
        .fromTo(".aboutMeSection1__img02", { top: '-100vh' }, { top: '10vh', ease: 'power2', duration: 1.5 }, "<")
        .call(enableScrollTrigger)

}

function animateMobile(){

    timelineMobile.fromTo(".aboutMeSection1__title", { autoAlpha: 0, x: '-40%' }, { autoAlpha: 1, x: '0', ease: 'power2', duration: 1 }, 0)
    .fromTo(".aboutMeSection1__img01", { autoAlpha: 0, left: '27.2vw' }, { autoAlpha: 1, left: '7.2vw', ease: 'power2', duration: 1 }, 0.3)
    .fromTo(".aboutMeSection1__img02", { autoAlpha: 0, top: '-8vh' }, { autoAlpha: 1, top: '-16vh', ease: 'power2', duration: 0.8 }, 0.4)
    .fromTo(".navbar", { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2', duration: 1 }, 0.5)
    

    let timelineScrollMobile1 = gsap.timeline({
        scrollTrigger: {
            scrub: 2,
            trigger: "aboutMeSection1__title",
            start: "top top",
            end: "+300vh",
        }
    })

    timelineScrollMobile1.to(".aboutMeSection1__img01", { left:'0', ease: 'power2', duration: 0.4 }, 0)


    let timelineScrollMobile2 = gsap.timeline({
        scrollTrigger: {
            scrub: 2,
            trigger: "aboutMeSection1__img01",
            start: "left left",
            end: "+1200vh",
        }
    })

    timelineScrollMobile2.to(".aboutMeSection1__assetPhotographer", { right:'calc(100% - 36vw)', rotation: 180, ease: 'power2'}, 0.1)

    let timelineScrollMobile3 = gsap.timeline({
        scrollTrigger: {
            scrub: 2,
            trigger: "aboutMeSection1__text01",
            end: "+1100vh",
        }
    })

    timelineScrollMobile3.fromTo(".aboutMeSection1__text01", { autoAlpha: 0, top: '0vh' }, { autoAlpha: 1, top: '-7vh', ease: 'power2' }, 0)

    let timelineScrollMobile4 = gsap.timeline({
        scrollTrigger: {
            scrub: 2,
            trigger: "aboutMeSection3__img01",
            end: "+2900vh",
        }
    })

    timelineScrollMobile4.fromTo(".aboutMeSection3__img01", { left: "-10vw" }, { left: "7.2vw", ease: 'power2', duration: 0.5 }, 0.1)
    .to(".aboutMeSection3__assetWow", { rotation: 180, ease: 'power2', translateY: "150%", duration: 1.4}, 0.4)
    .to(".aboutMeSection3__assetAgs", { rotation: 360, ease: 'power2', translateY: "190%", duration: 1}, 0.4)

    let timelineScrollMobile5 = gsap.timeline({
        scrollTrigger: {
            scrub: 2,
            trigger: "aboutMeSection3__img02",
            end: "+3300vh",
            // markers: true
        }
    })

    timelineScrollMobile5.fromTo(".aboutMeSection2__h2", { autoAlpha: 0}, { autoAlpha: 1, ease: 'power2', duration: 0.3 }, 0.3)
    timelineScrollMobile5.fromTo(".aboutMeSection2__p", { autoAlpha: 0}, { autoAlpha: 1, ease: 'power2', duration: 0.3 }, 0.4)
    timelineScrollMobile5.fromTo(".aboutMeSection2__chips", { autoAlpha: 0}, { autoAlpha: 1, ease: 'power2', duration: 0.3 }, 0.5)


    let timelineScrollMobile6 = gsap.timeline({
        scrollTrigger: {
            scrub: 2,
            trigger: "footer",
            end: "bottom bottom",
            //markers: true
        }
    })

    timelineScrollMobile6.fromTo(".footer__assetPhotographer", {scale: 0}, {scale: 1, ease: 'power2', duration: 0.3 }, 0.2)
    .fromTo(".footer__text", {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: 'power2', duration: 0.3 }, 0)


}


function createScrollTrigger() {

    timelineScrollDesktop = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            pin: "body",
            scrub: 5,
        }
    })

    return timelineScrollDesktop;
}


function enableScrollTrigger() {

    console.log("activado");

    if (!timelineScrollDesktop) {
        timelineScrollDesktop = createScrollTrigger();
    }

    // el bigContainer se desplaza en su ancho
    //console.log(bigContainer.offsetWidth - window.innerWidth);
    timelineScrollDesktop.to(bigContainer, { x: () => -(bigContainer.offsetWidth - window.innerWidth), duration: 1.8 })
        .fromTo(assetPhotographer, { rotation: 30, right: '34vw' }, { rotation: -80, right: '50vw', ease: 'power2', duration: 1.5 }, 0)


    let tlScroll2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".aboutMeSection1__img01",
            start: "right right",
            end: 3000,
            scrub: 5,
            // markers: true,
        }
    })

    // ver acá qué pasa que cuando veo en f11 img01 e img02 se mueven solas
    tlScroll2.to(".aboutMeSection1__img02", { top: '0vh', ease: 'power2', duration: 0.01 }, 0)
        .to(".aboutMeSection1__img01", { top: '10vh', x: '-3vw', ease: 'power2', duration: 0.1 }, "<")
        .fromTo(".aboutMeSection2", { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power1', duration: 0.01 }, 0.001)
        .fromTo(".aboutMeSection3__assetAgs", { rotation: 0 }, { rotation: 360, ease: 'power2', duration: 0.1 }, "<")
        .fromTo(".aboutMeSection3__assetWow", { rotation: 0 }, { rotation: 360, ease: 'power2', duration: 0.01 }, "<")
        .fromTo(".aboutMeSection3__img01", { y: '-40vh' }, { y: '-12vh', ease: 'power2', duration: 0.03 }, "<")
        .to(".aboutMeSection3__assetAgs", { y: '22vh', ease: 'power2', duration: 0.1 }, "<")
        .to(".aboutMeSection3__assetWow", { y: '22vh', ease: 'power2', duration: 0.1 }, "<")
        .to(".aboutMeSection3__img02", { scale: 2, ease: 'power2', duration: 0.1 }, "<")


}


// Initial point button
buttonInitialPoint.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log("click");
});


window.addEventListener('load', function () {
    // borrar cover (futuro loading)
    cover.remove();
    // permitir scroll
    document.body.classList.remove('no-scroll')
    // llamada a primera función
    animationController();
})
