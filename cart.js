const productBtn = document.querySelectorAll('.add-to-cart');          //addToCart
const cartProductsList = document.querySelector('.products');  //products
const cart = document.querySelector('.icon-large');          // 
const cartQuantity = document.querySelector('.cart__num');     //cartNum  id  class
const fullPrice = document.querySelector('.fullprice');   
// const cartProduct = document.querySelectorAll('.cart-product');
let price = 0;

//СВИЗАТЬ АЙДИ С КАРЗИНОЙ И С ТОВАРОМ С КАЖДЫМ
const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
};
// УДАЛЕНИЕ ПРОБЕЛОВ 
const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '')
};
// ОБРАЗУЕТСЯ ПРОБЕЛЫ   
const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
//  СУММА +
const plusFullPrice = (curentPrice) => {
    return price += curentPrice;
};
// СУММА - 
const minusFullPrice = (curentPrice) => {
    return price -= curentPrice;
};

const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} Р`;
};

const printQuantity = () => {
    let lenght = products.querySelector('.simplebar-content').children.lenght;
    cartNum.textContent = lenght;
    lenght > 0 ? corsinaHeader.classList.add('active') : corsinaHeader.classList.remove('active')
};  // gotovo


const deleteProducts = (productParent) => {
    
    let id = productParent.querySelector('.item').dataset.id;
    document.querySelector(`.flex-box[data-id="${id}"]`).querySelector('.bi-cart').disabled = false;  // get the id

    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.white').textContent));
    minusFullPrice(currentPrice);
    plusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();
    printQuantity();
};    //gotovo

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
      <a href="#"  class="item-remove" aria-lebel="Удалить">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
      </a>
    </div>
  </li>`;
};     //gotovo

productBtn.forEach(el => {
    el.closest('.flex-box').setAttribute('id', randomId()); //добавляет артиклам айди
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.flex-box');
        let id = e.target.id; 
        let img = parent.querySelector('.card-images img').getAttribute('src');
        let title = parent.querySelector('.item-text').textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.price').textContent));
        

        plusFullPrice(priceNumber);// summa
        printFullPrice(); //вызов функции
        console.log(cartProductsList.querySelector('.simplebar-content'));
        cartProductsList.insertAdjacentHTML('beforeend', generateItem(img, title, priceNumber, id))// add to cart
        printQuantity(); //вызов функции
        self.disabled = true;
    });
})

product.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-remove')) {
        itemRemoveProducts(e.target.closest('.item'))
    }
});