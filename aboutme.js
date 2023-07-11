gsap.registerPlugin(ScrollTrigger);

const bigContainer = document.querySelector(".aboutMeMainContent");
const aboutMeSection1 = document.querySelector(".aboutMeSection1");
const assetPhotographer = document.querySelector(".aboutMeMainContent__assetPhotographer");
const aboutMeSection3 = document.querySelector(".aboutMeSection3");

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
            scrub: 2,
            trigger: aboutMeSection1,
            //end: 2500, // nro estimativo
            //end: bigContainer.scrollWidth - document.documentElement.clientWidth + bigContainer.offsetWidth,
        }
    })

    return timelineScroll;
}


function enableScrollTrigger() {

    let aboutMeMainContent__img02 = document.querySelector('.aboutMeMainContent__img02');
    const viewportHeight = window.innerHeight;
    let imgAboutMe02Width = viewportHeight * (aboutMeMainContent__img02.naturalWidth / aboutMeMainContent__img02.naturalHeight);

    if (!timelineScroll) {
        timelineScroll = createScrollTrigger();
    }

    console.log(bigContainer.offsetWidth);

    // se desplaza el ancho del contenedor, se supone que se debería ver hasta el final pero el footer no se ve bien
    timelineScroll.to(bigContainer, { x: `-=${bigContainer.offsetWidth}`, duration: 1.8 }, 0)
        .fromTo(assetPhotographer, { rotation: 30, right: '34vw' }, { rotation: -80, right: '50vw', ease: 'power2', duration: 1.5 }, 0)


    let tlScroll2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".aboutMeMainContent__img02",
            start: "right right",
            //end: "left left",
            end: 2000,
            scrub: 2,
        }
    })

    tlScroll2.to(".aboutMeMainContent__img02", { top: '0vh', ease: 'power2', duration: 0.01 }, 0)
        .to(".aboutMeMainContent__img01", { top: '10vh', x: '-3vw', ease: 'power2', duration: 0.1 }, "<")
        .fromTo(".aboutMeSection2", { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2', duration: 0.1 }, "<")
        .fromTo(".aboutMeSection3__assetAgs", { rotation: -60 }, { rotation: 60, ease: 'power2', duration: 0.6 }, "<")
        .fromTo(".aboutMeSection3__assetWow", { rotation: 60 }, { rotation: -60, ease: 'power2', duration: 0.6 }, "<")
        .fromTo(".aboutMeSection3__img01", { y: '-20vh' }, { y: 0, ease: 'power2', duration: 0.4 }, "<")
        .to(".aboutMeSection3__assetAgs", { y: '22vh', ease: 'power2', duration: 0.1 }, "<+0.1")
        .to(".aboutMeSection3__assetWow", { y: '22vh', ease: 'power2', duration: 0.1 }, "<")


}





// function printScrollPosition() {
//     console.log("Posición del scroll:", window.scrollY);
// }

// window.addEventListener('scroll', printScrollPosition);


function getTotalWidthWithMargins(element) {
    const children = element.children;
    let totalWidth = element.offsetWidth;
  
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const styles = window.getComputedStyle(child);
      const marginLeft = parseFloat(styles.marginLeft);
      const marginRight = parseFloat(styles.marginRight);
  
      totalWidth += child.offsetWidth + marginLeft + marginRight;
    }
  
    return totalWidth;
  }
  
  const totalWidth = getTotalWidthWithMargins(bigContainer);
  console.log(totalWidth)
  