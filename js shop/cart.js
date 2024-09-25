const productBtn = document.querySelectorAll('.add-to-cart');    
const cartProductsList = document.querySelector('.mini');        
const cartQuantity = document.querySelector('.cart__num');    
const fullPrice = document.querySelector('.fullprice'); 
const corsinaHeader = document.querySelector('.corsina-header');  
const closeShoping = document.querySelector('.close-modal');
const body = document.querySelector('body');
let price = 0;


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

const printFullPrice = (price) => {
    fullPrice.textContent =`${normalPrice(price)} ₽`;
};

//  СУММА +
const incrementQuantity = () => {
    const quantity = Number(cartQuantity.textContent);
    cartQuantity.innerHTML = quantity + 1;
}; 
//  СУММА - 
const decrementQuantity = () => {
  const quantity = cartQuantity.textContent - 1;  
  cartQuantity.innerHTML = quantity;
}; 


const deleteProducts = (productParent) => {
    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.price').textContent));
    price -= currentPrice;
    decrementQuantity(currentPrice);
    printFullPrice(price);
    productParent.remove(currentPrice);
    
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
      <a class="item-remove" aria-lebel="Удалить">
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

        price += priceNumber
        printFullPrice(price);
        incrementQuantity(priceNumber);
        self.disabled = true;
        cartProductsList.insertAdjacentHTML('beforeend', generateItem(img, title, priceNumber, id));
    });
});
;

cartProductsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('bi-x')) {
        deleteProducts(e.target.closest('.item'));
    }
});


let products = [
    {
      id: '1',
      name: 'Трвел',
      Image: 'images/travel/1.1.JPG',
      price: '8990'
     },
    {
      id: 2,
      name: 'Клатч',
      Image: 'images/klath/klath1.2.JPG',
      price: '11 990'
    },
    {
      id: 3,
      name: 'Картхолдеры',
      Image: 'images/imageSMALL/Small4.1.JPG',
      price: '2500'
    },
    {
      id: 4,
      name: 'Классический кошелек',
      Image: 'images/imageSMALL/small114.jpg',
      price: '6 490'
    },
    {
      id: 5,
      name: 'Бифолд с монетницей',
      Image: 'images/manetnica/111.jpg',
      price: '5 500'
    },
    {
      id: 6,
      name: 'Ремни',
      Image: 'images/imgBELT/belt111.jpg',
      price: '4990'
    },
    {
        id: 6,
        name: 'Обложка на паспорт',
        Image: 'images/pasport/1.JPG',
        price: '3490'
      },
      {
        id: 6,
        name: 'Папка для документов',
        Image: 'images/papca/1.JPG',
        price: '4500'
      },
      {
        id: 6,
        name: 'Обложка для блокнота',
        Image: 'images/blocknot/7m4aVJneLso.jpg',
        price: '4500'
      },
      {
        id: 6,
        name: 'Бювар',
        Image: 'images/buvar/buvar111.jpg',
        price: '9900'
      },
  ];

  