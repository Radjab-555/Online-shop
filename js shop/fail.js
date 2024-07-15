const productBtn = document.querySelectorAll('.add-to-cart'); 
const cartProductsList = document.querySelector('.mini'); 
const cartQuantity = document.querySelector('.cart__num');  
const fullPrice = document.querySelector('.fullprice'); 
const corsinaHeader = document.querySelector('.corsina-header'); 
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
//  СУММА +
const incrementQuantity = () => {
    const currentQuantity = +cartQuantity.textContent;
    cartQuantity.innerHTML = currentQuantity + 1;
}; 
//  СУММА -
const decrementQuantity = () => {
    const currentQuantity = -cartQuantity.textContent;
    cartQuantity.innerHTML = currentQuantity - 1;
}; 

const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`;
};

const deleteProducts = (productParent) => {
    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.white').textContent));  
    printFullPrice();
    productParent.remove();
    decrementQuantity(currentPrice);   
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
        incrementQuantity(priceNumber); 
        printFullPrice(priceNumber); 
        cartProductsList.insertAdjacentHTML('beforeend', generateItem(img, title, priceNumber, id));
        self.disabled = true;
    });
});



cartProductsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('bi-x')) {
        deleteProducts(e.target.closest('.item'));
    }
});



// let products = [
//     {
//       id: '1',
//       name: 'Трвел',
//       Image: 'images/travel/1.1.JPG',
//       price: '8990'
//      },
//     {
//       id: 2,
//       name: 'Клатч',
//       Image: 'images/klath/klath1.2.JPG',
//       price: '11 990'
//     },
//     {
//       id: 3,
//       name: 'Картхолдеры',
//       Image: 'images/imageSMALL/Small4.1.JPG',
//       price: '2500'
//     },
//     {
//       id: 4,
//       name: 'Классический кошелек',
//       Image: 'images/imageSMALL/small114.jpg',
//       price: '6 490'
//     },
// ]