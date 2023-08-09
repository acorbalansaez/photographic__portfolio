//CURSOR - CÓDIGO COMPARTIDO 

const mouseCursor = document.querySelector(".cursor");
const imagesGallery = document.querySelectorAll(".galleryContent__imgGallery");
const imagesProjects = document.querySelectorAll(".projectsCanvas__img");
const links = document.getElementsByTagName('a');
const linksArray = Array.from(links);
const footerHover = document.querySelector('.footer__text');

document.addEventListener('mousemove', cursor);

//obtenemos posicion del mouse
function cursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  mouseCursor.style.left = `${x}px`;
  mouseCursor.style.top = `${y}px`;
}


// SOLO EN PANTALLAS MENORES A 768)

if (window.innerWidth >= 768) {

  // cuando el mouse esta arriba de un link cambiar el cursor
  linksArray.forEach(linkOnHover => {

    linkOnHover.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('cursor-links');
      mouseCursor.classList.add('cursor-default');
    });

    linkOnHover.addEventListener('mouseover', () => {
      mouseCursor.classList.remove('cursor-default');
      mouseCursor.classList.add('cursor-links');
    });

  });


  // cuando el mouse esta arriba del footer cambiar el cursor
  if (footerHover != null) {
    footerHover.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('cursor-footer');
      mouseCursor.classList.add('cursor-default');
    })
    footerHover.addEventListener('mouseover', () => {
      mouseCursor.classList.remove('cursor-default');
      mouseCursor.classList.add('cursor-footer');
    })
  }


  // cuando el mouse esta arriba de una imagen (de gallery) cambiar el cursor
  // blur en otras fotos y agrandar foto seleccionada
  imagesGallery.forEach(imgOnHover => {

    const img = imgOnHover.querySelector('.img');

    imgOnHover.addEventListener('mouseleave', () => {

      // le saca la clase hovered a la imagen hovereada, deshace zoom
      imagesGallery.forEach(img => img.classList.remove('hovered'));

      // cambia el cursor
      mouseCursor.classList.remove('cursor-images');
      mouseCursor.classList.add('cursor-default');

      // le saca el efecto blur a todas las otras imágenes
      imagesGallery.forEach(img => img.classList.remove('blur-effect'));
    });


    imgOnHover.addEventListener('mouseover', () => {

      // le agrega la clase hovered a la imagen hovereada, la cual hace zoom
      imgOnHover.classList.add('hovered');

      // cambia el cursor
      mouseCursor.classList.remove('cursor-default');
      mouseCursor.classList.add('cursor-images');

      // le agrega el efecto blur a todas las otras imágenes (menos la hovereada)
      imagesGallery.forEach(img => {
        if (img !== imgOnHover) {
          img.classList.add('blur-effect');
        }
      });

    });

  });


  // cuando el mouse esta arriba de una imagen (de projects) cambiar el cursor
  // este código capaz debería ir en el archivo 'projects.js' porque el comportamiento
  // probablemente deba ser más que colocar o sacar clases, sino que debería mover las imgs
  imagesProjects.forEach(imgOnHover => {

    const img = imgOnHover.querySelector('.img');

    imgOnHover.addEventListener('mouseleave', () => {

      // le saca la clase hovered a la imagen hovereada, deshace zoom
      imagesProjects.forEach(img => img.classList.remove('hovered'));

      // cambia el cursor
      mouseCursor.classList.remove('cursor-images-projects');
      mouseCursor.classList.add('cursor-default');

      // le saca el efecto blur a todas las otras imágenes
      imagesProjects.forEach(img => img.classList.remove('blur-effect'));
    });


    imgOnHover.addEventListener('mouseover', () => {

      // le agrega la clase hovered a la imagen hovereada, la cual hace zoom
      imgOnHover.classList.add('hovered');

      // cambia el cursor
      mouseCursor.classList.remove('cursor-default');
      mouseCursor.classList.add('cursor-images-projects');

      // le agrega el efecto blur a todas las otras imágenes (menos la hovereada)
      imagesProjects.forEach(img => {
        if (img !== imgOnHover) {
          img.classList.add('blur-effect');
        }
      });

    });

  });


} else {
  mouseCursor.remove();
}



// exporto la variable mouseCursor para poder controlar el
// comportamiento de drag desde el archivo de projects
export { mouseCursor, imagesProjects };