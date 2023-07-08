//CURSOR - CÓDIGO COMPARTIDO 

let mouseCursor = document.querySelector(".cursor");
let imagesGallery = document.querySelectorAll(".galleryContent__imgGallery");
let links = document.getElementsByTagName('a');
let linksArray = Array.from(links);

document.addEventListener('mousemove', cursor);

//obtenemos posicion del mouse
function cursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  mouseCursor.style.left = `${x}px`;
  mouseCursor.style.top = `${y}px`;
}

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


// cuando el mouse esta arriba de una imagen cambiar el cursor
// blur en otras fotos y agrandar foto seleccionada
imagesGallery.forEach(imgOnHover => {

  const img = imgOnHover.querySelector('.img');

  imgOnHover.addEventListener('mouseleave', () => {

    imagesGallery.forEach(img => img.classList.remove('hovered'));

      mouseCursor.classList.remove('cursor-images');
      mouseCursor.classList.add('cursor-default');
      imagesGallery.forEach(img => img.classList.remove('blur-effect'));
  });


  imgOnHover.addEventListener('mouseover', () => {

      imgOnHover.classList.add('hovered');

      mouseCursor.classList.remove('cursor-default');
      mouseCursor.classList.add('cursor-images');

      imagesGallery.forEach(img => {
          if (img !== imgOnHover) {
              img.classList.add('blur-effect');
          }
      });

  });

});