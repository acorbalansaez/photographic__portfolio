
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
// Aclaración: hasta ahora solo agrega y quita las propiedades selected/noselected que solo cambian los estilos de los textos 
function toggleSelected(element) {

  const zones = document.querySelectorAll('.menuHoverZone__container');

  zones.forEach((zone) => {
    zone.classList.remove('menuSelected');
    zone.classList.add('menuNoSelected');
    console.log(zone);
  });

  element.classList.add('menuSelected');
  element.classList.remove('menuNoSelected');
}


