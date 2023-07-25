gsap.registerPlugin(ScrollTrigger);

const bigContainer = document.querySelector(".aboutMeMainContent");
const aboutMeSection1 = document.querySelector(".aboutMeSection1");
const assetPhotographer = document.querySelector(".aboutMeMainContent__assetPhotographer");
const aboutMeSection3 = document.querySelector(".aboutMeSection3");
const buttonInitialPoint = document.querySelector('.button__initialPoint');


const timeline = gsap.timeline();
let timelineScroll;

timeline.fromTo(assetPhotographer, { rotation: -60 }, { rotation: 30, ease: 'power2', duration: 1.5 }, 0)
    .fromTo(".aboutMeMainContent__img01", { top: '200vh' }, { top: '-16vh', ease: 'power2', duration: 1.5 }, "<")
    .fromTo(".aboutMeMainContent__img02", { top: '-100vh' }, { top: '10vh', ease: 'power2', duration: 1.5 }, "<")
    .call(enableScrollTrigger)



function createScrollTrigger() {

    timelineScroll = gsap.timeline({
        scrollTrigger: {
            pin: "body",
            scrub: 5,
            // trigger: bigContainer,
        }
    })

    return timelineScroll;
}


function enableScrollTrigger() {


    if (!timelineScroll) {
        timelineScroll = createScrollTrigger();
    }

    // el bigContainer se desplaza en su ancho
    console.log(bigContainer.offsetWidth - window.innerWidth);
    timelineScroll.to(bigContainer, { x: () => -(bigContainer.offsetWidth - window.innerWidth), duration: 1.8 })
        .fromTo(assetPhotographer, { rotation: 30, right: '34vw' }, { rotation: -80, right: '50vw', ease: 'power2', duration: 1.5 }, 0)


    let tlScroll2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".aboutMeMainContent__img01",
            start: "right right",
            end: 3000,
            scrub: 5,
            markers: true,
        }
    })

    // ver acá qué pasa que cuando veo en f11 img01 e img02 se mueven solas
    tlScroll2.to(".aboutMeMainContent__img02", { top: '0vh', ease: 'power2', duration: 0.01 }, 0)
        .to(".aboutMeMainContent__img01", { top: '10vh', x: '-3vw', ease: 'power2', duration: 0.1 }, "<")
        .fromTo(".aboutMeSection2", { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power1', duration: 0.0 }, 0.001)
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
});




// function printScrollPosition() {
//     console.log("Posición del scroll:", window.scrollY);
// }

// window.addEventListener('scroll', printScrollPosition);