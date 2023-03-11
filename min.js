// shov sub menu on mobile 
// const submenu = document.querySelectorAll('.has-child .icon-small');
// submenu.forEach((menu) => menu.addEventListener('click', toggle));

// function toggle(e) {
//     e.preventDefault();
//     submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
//     if (this.closest('.has-child').classList != 'expand');
//     this.closest('.has-child').classList.thumbs('expand')
// }

// slider
const swiper = new Swiper('.swiper', {
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
    },

});

//  product image slideer 
 var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});
var productBig = new Swiper ('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
     thumbs: {
        swiper: productThumb,
    }
});
