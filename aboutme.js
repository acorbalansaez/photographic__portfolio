gsap.registerPlugin(ScrollTrigger);

const aboutMeContainer = document.querySelector(".aboutMeContainer");


const timelineScroll = gsap.timeline({

    scrollTrigger: {
        // pin: "body",
        scrub: 2,
        // markers: true,
        trigger: aboutMeContainer,
        end: 2500, // nro estimativo a re-ver
        //end: galleryContentContainer.scrollWidth - document.documentElement.clientWidth + galleryContentContainer.offsetWidth,
        // yoyo: false,
        // toggleActions: "none none none none",
    }
})


function printScrollPosition() {
    console.log("Posición del scroll:", window.scrollY);
}