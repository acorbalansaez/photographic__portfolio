
// Obtener los elementos "gallery", "projects" y "about me"
const galleryElement = document.getElementById('gallery');
const projectsElement = document.getElementById('projects');
const aboutMeElement = document.getElementById('aboutMe');



// Agregar el evento de clic a los elementos
galleryElement.addEventListener('click', function () {
  window.location.href = '../index.html';
});

projectsElement.addEventListener('click', function () {
  window.location.href = 'projects.html';
});

aboutMeElement.addEventListener('click', function () {
  window.location.href = 'aboutme.html';
});



// Para cambiar el contenido de la página según el hover

const zonesHover = document.querySelectorAll(".menuHoverZone__container");
const galleryContent = document.querySelector(".menuImagesGallery");
const projectsContent = document.querySelector(".menuImagesProjects");
const aboutMeContent = document.querySelector(".menuImagesAboutMe");

zonesHover.forEach(zone => {
  zone.addEventListener('mouseenter', () => {
    zonesHover.forEach(otherZone => {
      otherZone.classList.remove('menuSelected');
      otherZone.classList.add('menuNoSelected');
    });

    zone.classList.add('menuSelected');
    zone.classList.remove('menuNoSelected');

    galleryContent.classList.toggle('menuVisible', zone.classList.contains('menuGallery'));
    projectsContent.classList.toggle('menuVisible', zone.classList.contains('menuProjects'));
    aboutMeContent.classList.toggle('menuVisible', zone.classList.contains('menuAboutMe'));

    galleryContent.classList.toggle('menuInvisible', !zone.classList.contains('menuGallery'));
    projectsContent.classList.toggle('menuInvisible', !zone.classList.contains('menuProjects'));
    aboutMeContent.classList.toggle('menuInvisible', !zone.classList.contains('menuAboutMe'));

    let section = null;

    if (galleryContent.classList.contains('menuVisible')) {
      section = galleryContent;
    } else if (projectsContent.classList.contains('menuVisible')) {
      section = projectsContent;
    } else if (aboutMeContent.classList.contains('menuVisible')) {
      section = aboutMeContent;
    }

    animateSection(section);

  });
});


const body = document.body;
const footerItems = document.querySelectorAll('.navbar__item a');
const menuGallery = document.querySelector('.menuGallery')
const menuProjects = document.querySelector('.menuProjects');
const menuAboutMe = document.querySelector('.menuAboutMe');



function animateSection(section) {

  // GALLERY
  if (section.classList.contains('menuVisible') && section.classList.contains('menuImagesGallery')) {
    darkMode(section);

    const timelineGallery = gsap.timeline();
    timelineGallery.fromTo(".menuImagesGallery__img02", { y: "-30vh", transform: 'rotate(25deg)' }, { y: "0vh", transform: 'rotate(0deg)', ease: 'power2', duration: 0.6 }, 0)
      .fromTo(".menuImagesGallery__img01", { top: "55%", autoAlpha: 0.5, scale: 0.8 }, { top: "50%", autoAlpha: 1, scale: 1, ease: 'power2', duration: 0.6 }, "<")
      .fromTo(".menuImagesGallery__assetPhotographer", { transform: 'translate(-50%, -70%) rotate(60deg)' }, { transform: 'translate(-50%, -70%) rotate(-20.37deg)', ease: 'power2', duration: 1 }, "<")
      .fromTo(".menuImagesGallery__img03", { transform: 'translateY(100%) rotate(-10deg)' }, { transform: 'translateY(20%) rotate(0deg)', ease: 'power2', duration: 0.9 }, "<")
      .fromTo(".menuImagesGallery__stuff", { autoAlpha: 0}, { autoAlpha: 1, ease: 'power2', duration: 0.6 }, "<")
  }


  if (section.classList.contains('menuVisible') && section.classList.contains('menuImagesProjects')) {
    whiteMode(section);

    const timelineProjects = gsap.timeline();
    timelineProjects.fromTo(".menuImagesProjects__img01", { transform: 'translate(50%, -200%) rotate(10deg)' }, { transform: 'translate(30%, -50%) rotate(0deg)', ease: 'power2', duration: 0.6 }, 0)
    .fromTo(".menuImagesProjects__gradient", {transform:'translate(100%, -75%)', autoAlpha: 0, scale: 0 }, {transform:'translate(10%, -75%)', autoAlpha: 1, scale: 1, ease: 'power2', duration: 0.6 }, "<")
    .fromTo(".menuImagesProjects__img02", { scale: 0.5, transform: 'translate(105%, -160%) rotate(30deg)' }, { scale: 1, transform: 'translate(105%, -70%) rotate(0deg)', ease: 'power2', duration: 0.6 }, 0.1)
    .fromTo(".menuImagesProjects__img03", { transform: 'translate(5%, 100%) rotate(-10deg)' }, { transform: 'translate(10%, 0%) rotate(0deg)', ease: 'power2', duration: 0.7 }, 0)
    .fromTo(".menuImagesProjects__img04", { transform: 'translate(70%, -60%) rotate(10deg)' }, { transform: 'translate(10%, -60%) rotate(0deg)', ease: 'power2', duration: 0.6 }, 0)
    .fromTo(".menuImagesGallery__nameProject", { autoAlpha: 0}, { autoAlpha: 1, ease: 'power2', duration: 0.6 }, 0)
    .fromTo(".menuImagesProjects__asterisk", { autoAlpha: 0.8, transform: 'translate(-75%, -35%) rotate(292.29deg)' }, { autoAlpha:1, transform: 'translate(-75%, -35%) rotate(42.29deg)', ease: 'power2', duration: 0.6 }, 0)

  }

  if (section.classList.contains('menuVisible') && section.classList.contains('menuImagesAboutMe')) {
    darkMode(section);

    const timelineAboutMe = gsap.timeline();
    timelineAboutMe.fromTo(".menuImagesAboutMe__img02", { scale: 0.8, transform: 'translate(50%, -160%) rotate(35deg)' }, { scale: 1, transform: 'translate(30%, -50%) rotate(0deg)', ease: 'power2', duration: 0.6 }, 0)
    .fromTo(".menuImagesAboutMe__img01", { transform: 'translateY(180%) rotate(-30deg)'}, { transform: 'translateY(-0%) rotate(0deg)', ease: 'power2', duration: 0.6 }, "<")
    .fromTo(".menuImagesAboutMe__img03", { autoAlpha: 0.3, scale: 0.6, transform: 'translate(40%, -60%) rotate(0deg)' }, { autoAlpha: 1, scale: 1, transform: ' translate(10%, -60%) rotate(0deg)', ease: 'power2', duration: 0.6 }, "<")
    .fromTo(".menuImagesAboutMe__assetAgs", { scale: 0.5, transform: 'translate(-50%, 155%) rotate(190deg)' }, { scale: 1, transform: 'translate(-50%, 155%) rotate(-17.125deg)', ease: 'power2', duration: 1.2 }, "<")
  }


};



// white mode y dark mode cambian el background, la navbar y los items del menu
// tengo que rever igual pq con estos cambios estoy un poco desestimando las clases 'menuSelected' y 'noSelected'
// que originalmente cambiaban el color de los items, el tema es que lo cambiaban siempre igual sin importar el dark o el white mode

function whiteMode(section) {

  body.classList.add("backgroundLight");
  body.classList.remove("backgroundDark");

  footerItems.forEach(function (item) {
    item.classList.remove('whiteVersion');
    item.classList.add('darkVersion');
  })

  menuGallery.style.color = 'var(--color-light-gray)';
  menuAboutMe.style.color = 'var(--color-light-gray)';
  menuProjects.style.color = 'var(--color-dark)';

}

function darkMode(section) {

  body.classList.add("backgroundDark");
  body.classList.remove("backgroundLight");

  footerItems.forEach(function (item) {
    item.classList.remove('darkVersion');
    item.classList.add('whiteVersion');
  })

  if (section.classList.contains('menuImagesGallery')) {
    menuGallery.style.color = 'var(--color-white)';
    menuAboutMe.style.color = 'var(--color-darker-gray)';
    menuProjects.style.color = 'var(--color-darker-gray)';
  }

  if (section.classList.contains('menuImagesAboutMe')) {
    menuGallery.style.color = 'var(--color-darker-gray)';
    menuAboutMe.style.color = 'var(--color-white)';
    menuProjects.style.color = 'var(--color-darker-gray)';
  }


}


document.addEventListener('DOMContentLoaded', function() {
  animateSection(galleryContent);
});

