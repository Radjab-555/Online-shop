const productBtn = document.querySelectorAll('.add-to-cart'); 
const cartProductsList = document.querySelector('.mini'); 
const cartQuantity = document.querySelector('.cart__num');  
const fullPrice = document.querySelector('.fullprice'); 
const corsinaHeader = document.querySelector('.corsina-header'); 
const closeShoping = document.querySelector('.close-modal');
const body = document.querySelector('body');
let price = 0; 

const order = document.querySelector('.primary-button-cor');

const primaryButtonCor  = {
    customerName: 'Тут имя',
    customerContact: 'Тут номер телефона или телеграмм',
    items: [
        {
            name: '',
            price: ''
        }
    ]
};


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


  const printQuantity = () => {
    let length = cartProductsList.querySelector('.simplebar-content').children.length;
    cartQuantity.textContent = length;
    // length > 0 ? corsinaHeader.classList.add('mini') : corsinaHeader.classList.remove('active');
    // printQuantity();
};

const deleteProducts = (productParent) => {
    let id = productParent.querySelectorAll('.item').id="${id}";
    document.querySelector(`.flexwrap[data-id="${id}"]`);
    document.querySelector('.add-to-cart').disabled = false;  // get the id
    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.white').textContent));
    minusFullPrice(currentPrice);
    printFullPrice(currentPrice);
    productParent.remove();
    printQuantity();
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
    el.closest('.flexwrap').setAttribute('id', randomId()); 
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.flexwrap');
        let id = e.target.id; 
        let img = parent.querySelector('.big-image img').getAttribute('src');
        let title = parent.querySelector('.title-text').textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.current').textContent));
        plusFullPrice(priceNumber);
        printFullPrice(); 
        // minusFullPrice(priceNumber);
        cartProductsList.insertAdjacentHTML('beforeend', generateItem(img, title, priceNumber, id));
        printQuantity();
        self.disabled = true;
    });
});

cartProductsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('bi-x')) {
        deleteProducts(e.target.closest('.item'));
    }
});

// товар number
// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains("increase")) {
//       ++e.target.parentElement.querySelector("input").value;
//     } else if (e.target.classList.contains("decrease")) {
//       --e.target.parentElement.querySelector("input").value;
//     }
//   });