gsap.registerPlugin(ScrollTrigger);

const bigContainer = document.querySelector(".aboutMeMainContent");
const aboutMeContainer = document.querySelector(".aboutMeContainer");
const assetPhotographer = document.querySelector(".aboutMeMainContent__assetPhotographer");

const timeline = gsap.timeline();
let timelineScroll;

timeline.fromTo(assetPhotographer, { rotation: -60 }, { rotation: 30, ease: 'power2', duration: 1.5 }, 0)
.fromTo(".aboutMeMainContent__img01", { top: '200vh' }, { top: '-16vh', ease: 'power2', duration: 1.5 }, "<")
.fromTo(".aboutMeMainContent__img02", { top: '-100vh' }, { top: '10vh', ease: 'power2', duration: 1.5 }, "<")
.call(enableScrollTrigger)


function createScrollTrigger(){

    timelineScroll = gsap.timeline({
        scrollTrigger: {
            pin: "body",
            scrub: 2,
            trigger: aboutMeContainer,
            //end: 2500, // nro estimativo
            end: aboutMeContainer.scrollWidth - document.documentElement.clientWidth + aboutMeContainer.offsetWidth,
        }
    })

    return timelineScroll;
}


function enableScrollTrigger() {

    if (!timelineScroll) {
        timelineScroll = createScrollTrigger();
    }

    timelineScroll.to(bigContainer, { x: "-100%", duration: 1.8 }, 0)
    .fromTo(assetPhotographer, { rotation: 30, right: '34vw' }, { rotation: -80, right: '50vw', ease: 'power2', duration: 1.5 }, 0)


    let tlScroll2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".aboutMeMainContent__img02",
            start: "right left+=600vw",
            end: "left left",
            scrub: 2,
        }
    })

    tlScroll2.to(".aboutMeMainContent__img02", { top: '0vh', ease: 'power2', duration: 1.5 }, 0)
    .to(".aboutMeMainContent__img01", { top: '10vh', ease: 'power2', duration: 1.5}, "<")
    .fromTo(".aboutMeMainContent__text02", {autoAlpha: 0}, {autoAlpha: 1, ease: 'power2', duration: 1.5})


}











// function printScrollPosition() {
//     console.log("Posición del scroll:", window.scrollY);
// }

// window.addEventListener('scroll', printScrollPosition);