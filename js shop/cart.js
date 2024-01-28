const productBtn = document.querySelectorAll('.add-to-cart');    
const cartProductsList = document.querySelector('.mini');        
const cartQuantity = document.querySelector('.cart__num');    
const fullPrice = document.querySelector('.fullprice'); 
const corsinaHeader = document.querySelector('.corsina-header');  
const closeShoping = document.querySelector('.close-modal');
const body = document.querySelector('body');
// const save = document.getElementById('save');
let price = 0;


// corsinaHeader.addEventListener('click', () => {
//     body.classList.toggle('showcart')
// })

// const cartsQuantity = localStorage.getItem("cartsQuantity");
// if (!cartsQuantity) {
//     cartsQuantity = 0;
//     cartsQuantity++;
// }
// localStorage.setItem("cartsQuantity", cartsQuantity);

//СВИЗАТЬ АЙДИ С КАРЗИНОЙ И С ТОВАРОМ С КАЖДЫМ
const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
// УДАЛЕНИЕ ПРОБЕЛОВ 
const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
};
// ОБРАЗУЕТСЯ ПРОБЕЛЫ   
const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
//  СУММА +
const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};
// СУММА - 
const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`;
};



const incrementQuantity = () => {
    const currentQuantity = +cartQuantity.textContent;
    console.log(currentQuantity)
    cartQuantity.innerHTML = currentQuantity + 1;
}; 

const decrementQuantity = () => {
    const currentQuantity = +cartQuantity.textContent;
    console.log(currentQuantity)
    cartQuantity.innerHTML = currentQuantity - 1;
}; 


const deleteProducts = (productParent) => {
    productParent.querySelectorAll('.item').id="${id}";
    document.querySelector(`.card-image[data-id="${id}"]`);
    document.querySelector('.bi-cart').disabled = false;  // get the id
    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.white').textContent));
    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();
    decrementQuantity();
};    

const generateItem = (img, title, white, id) => {
    return `
    <li class="item">
    <div class="cart-content__product cart-product" id="${id}">
      <div class="thumbnainl object-cover">
          <a href="#"><img class="corsina-img" src="${img}" alt="мастерская изделий из кожи"></a>
      </div>
      <div class="item-content">
          <p class="item-content__title">${title}</p>
          <span class="price">
                <span class="white">${normalPrice(white)}</span>
          </span>
      </div>
      <a   class="item-remove" aria-lebel="Удалить">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
      </a>
    </div>
  </li>`;
};    

productBtn.forEach(el => {
    el.closest('.card-image').setAttribute('id', randomId()); 
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.card-image');
        let id = e.target.id; 
        let img = parent.querySelector('.img-fluid').getAttribute('src');
        let title = parent.querySelector('.item-text').textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.price').textContent));
        plusFullPrice(priceNumber);
        printFullPrice();
        cartProductsList.insertAdjacentHTML('beforeend', generateItem(img, title, priceNumber, id));
        incrementQuantity(); 
        self.disabled = true;
    });
});

cartProductsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('bi-x')) {
        deleteProducts(e.target.closest('.item'));
    }
});


localStorage.setItem("username", "bosh");
localStorage.setItem("email", "bosj@hede");
localStorage.setItem("username", "bosfhcebh");
localStorage.clear();


// let clise = document.getElementById("closeShoping").addEventListener('cli‌​ck', function(){
//      document.querySelector(".close-modal").style.display = "none"; 
//     });
const order = {
    customeName: 'ФИО' ,
    customerContact: 'номер телефона' ,
    items: [
        {
            name: 'Травел' ,
            price: '5500'
        },
        {
            name: 'Клатч' ,
            price: '12000'
        },
        {
            name: 'Картхолдер' ,
            price: '2500'
        },
        {
            name: 'Бифолд' ,
            price: '4500'
        },
        {
            name: 'Бифолд с монетницей' ,
            price: '5500'
        },
        {
            name: 'Ремень' ,
            price: '4500'
        },
        {
            name: 'Обложка на паспорт' ,
            price: '3500'
        },
        {
            name: 'Папка' ,
            price: '4500'
        },
        {
            name: 'Блокнот' ,
            price: '4500'
        },
        {
            name: 'Бювар' ,
            price: '9900'
        }
    ]
}