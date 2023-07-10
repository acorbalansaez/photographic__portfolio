//CURSOR - CÓDIGO COMPARTIDO 

const mouseCursor = document.querySelector(".cursor");
const imagesGallery = document.querySelectorAll(".galleryContent__imgGallery");
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
footerHover.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove('cursor-footer');
  mouseCursor.classList.add('cursor-default');
})

footerHover.addEventListener('mouseover', () => {
  mouseCursor.classList.remove('cursor-default');
  mouseCursor.classList.add('cursor-footer');
})


// cuando el mouse esta arriba de una imagen (de gallery) cambiar el cursor
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