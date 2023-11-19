const product = Array.from(document.querySelectorAll('.product'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart');
const prodPlus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const prodMinus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const cartProducts = document.querySelector('.cart__products');

product.forEach(el => el.addEventListener('click', function (e) {
    const target = e.target;
    const id = this.dataset.id;
    const img = this.querySelector('.product__image');
    const src = img.getAttribute('src');
    let quantity = this.querySelector('.product__quantity-value');

    prodPlus.forEach(prod => {
        if (target === prod) {
            ++quantity.innerText;
        }
    })
    prodMinus.forEach(prod => {
        if (target === prod) {
            --quantity.innerText;
            if (quantity.innerText <= 1) {
                quantity.innerText = 1;
            }
        }
    })

    const insertProd = id => {
			cartProducts.insertAdjacentHTML("beforeEnd",
            `<div class="cart__products">
                <div class="cart__product" data-id=${id}>
                    <img class="cart__product-image" src=${src}>
                    <div class="cart__product-count">${quantity.innerText}</div>
                </div>
            </div>`);
    }

    productAdd.forEach(i => {
        const cartProd = Array.from(cart.querySelectorAll('.cart__product'));
        const cartProdId = cartProd.map(item => item.dataset.id);

        if (target === i && ((cartProd.length === 0) || (cartProducts.length !== 0 && cartProdId.indexOf(id) === -1))) {
            insertProd(id);
        } if (target === i && cartProdId.indexOf(id) !== -1) {
            cartProd.forEach(prod => {
                const prodCount = prod.querySelector('.cart__product-count');
                if (prodCount.closest('.cart__product').dataset.id === id) {
                    let prodCountNum = Number(prodCount.innerText);
                    let prodQuantity = Number(quantity.innerText);
                    prodCount.innerText = prodCountNum + prodQuantity;
                }
            })
        }
    })
}))







// let quantity = document.getElementsByClassName('product__quantity-value');
// let productAdd = document.getElementsByClassName('product__add');
// let cartProducts = document.querySelector('.cart__products');
// let product = document.getElementsByClassName('product');
// let prodPlus = document.getElementsByClassName('product__quantity-control_inc');
// let prodMinus = document.getElementsByClassName('product__quantity-control_dec');

// for (let index = 0; index < quantity.length; index++) {
// 	prodPlus[index].addEventListener('click', () => {
//     quantity[index].textContent++;
//   })

//   prodMinus[index].addEventListener('click', () => {
//     quantity[index].textContent--;

//     if (quantity[index].textContent < '1') {
//       quantity[index].textContent = '1'
//     }
//   });

//   productAdd[index].addEventListener('click', () => {
//   	for (let i = 0; i < cartProducts.children.length; i++) {
//       if (cartProducts.children[i].dataset.id === product[index].dataset.id) {
//         return cartProducts.children[i].querySelector('.cart__product-count').textContent = Number(cartProducts.children[i].querySelector('.cart__product-count').textContent) + Number(quantity[i].textContent);
//       }
//     }

//   cartProducts.insertAdjacentHTML('beforeend', `
//     <div class="cart__product" data-id="${product[index].dataset.id}">
//       <img class="cart__product-image" src="${product[index].querySelector('img').getAttribute('src')}">
//       <div class="cart__product-count">${quantity[index].textContent}</div>
//     </div>
//   	`);
//   });
// }