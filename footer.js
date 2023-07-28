const footer = document.querySelector('.footer');
const footerText = document.querySelector('.footer__text');
const footerTextContent = document.querySelector('.footer__textContent');
const footerAgs = document.querySelector('.footer__assetAgs');
const footerPhotographer = document.querySelector('.footer__assetPhotographer');
const footerItems = document.querySelectorAll('.navbar__item a');
const footerMenu = document.querySelector('.menu a');


// cambiar navbar a blanco cuando aparece el footer
function checkFooterVisibility(valor1, valor2) {


    footerItems.forEach(function (item) {

        let footerRect = footer.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();

        if (itemRect[valor1] >= footerRect[valor2] && itemRect[valor2] <= footerRect[valor1]) {

            item.classList.remove('blackVersion');
            item.classList.add('whiteVersion');

            if (item.classList.contains('underlineLink--black')) {
                item.classList.remove('underlineLink--black');
                item.classList.add('underlineLink--white');
            }

        } else {

            item.classList.remove('whiteVersion');
            item.classList.add('blackVersion');

            if (item.classList.contains('underlineLink--white')) {
                item.classList.remove('underlineLink--white');
                item.classList.add('underlineLink--black');
            }

        }

    })


}


// screenWidth ya está definida en 'app.js'
//const screenWidth = document.documentElement.clientWidth;

if (screenWidth >= 768) {

    // cambiar navbar a blanco cuando aparece el footer
    window.addEventListener('scroll', () => checkFooterVisibility('right', 'left'));

    // hover texto de footer -> se desplaza
    footerText.addEventListener('mouseover', function (event) {

        let footerInView = false;
        let footerRect = footer.getBoundingClientRect();
        console.log(footerRect);
        let windowWidth = window.innerWidth;
        console.log(windowWidth);


        if (footerRect.left >= 0 && footerRect.right <= windowWidth) {
            footerInView = true;
            footerTextContent.style.left = '-32.5%';
            footerAgs.style.transform = 'rotate(45deg)';
            console.log("true");
            console.log(footerRect);

        }

    })

    footerText.addEventListener('mouseleave', function (event) {
        footerTextContent.style.left = '0';
        footerAgs.style.transform = 'rotate(-17.125deg)';

    });

} else {

    // cambiar navbar a blanco cuando aparece el footer
    window.addEventListener('scroll', () => checkFooterVisibility('bottom', 'top'));
}

