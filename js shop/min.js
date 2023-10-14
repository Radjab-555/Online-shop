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
var swiper = new Swiper('.swiper', {
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


// управления с комментариями
let comments = [];

document.getElementById('comment-add').onclick = function() {
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }
    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);
    saveComents();
    showComments();
}

function saveComents() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function showComments() {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item) {
        out += `<p class="tetxt-right-text small"><em>${timeConverter(item.time)}</em></p>`; 
        out += `<p class="alert alert-primary-text">${item.name}</p>`; 
        out += `<textarea class="alert alert-success-text">${item.body}</textarea>`;
      }); 
      commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Srp', 'Oct', 'Now', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}


// shov cart on click
// const divtoShow = "mini-cart";
// const divPopup = document.querySelector(divtoShow);
// const divTrigger = document.querySelector(".cart-trigger");


// const mainElement = document.documentElement;
// const mainElementWidth = mainElement.clientWidth;
// const mainElementHeight = mainElement.clientHeight;

// console.log(mainElementWidth);
// console.log(mainElementHeight);


// PaintBrush.y = 50;
// var button = document.createElement(".ri-close-line");
// button.innerHTML = "Level 2";
// button.id = "button-2";  
// document.body.appendChild(button);
// GameArena.clear();
// GameArena.stop();
// button.addEventListener ("click", function() {
//   startGame2();
//   document.getElementById("button-2").remove();
// });



// Каталог. Отображение товаров
// Утилиты
function toNum(str) {
  const num = Number(str.replace(/ /g, ""));
  return num;
}

function toCurrency(num) {
  const format = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(num);
  return format;
}
  
// Считываем все элементы корзины:
// const cardAddArr = Array.from(document.querySelectorAll(".add-to-cart"));
// const cartNum = document.querySelector("#cart_num");
// const cart = document.querySelector("#cart");

// Считываем все элементы products:
// const popup = document.querySelector(".products");
// const popupClose = document.querySelector("#popup_close");
// const body = document.body;
// const popupContainer = document.querySelector("#popup_container");
// const popupProductList = document.querySelector("#popup_product_list");
// const popupCost = document.querySelector("#popup_cost");
// const popupDiscount = document.querySelector("#popup_discount");
// const popupCostDiscount = document.querySelector("#popup_cost_discount");