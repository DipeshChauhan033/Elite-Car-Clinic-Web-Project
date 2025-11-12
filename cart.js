const cartad = document.querySelector('.cartad');
const cart = document.querySelector('.cart');

cartad.addEventListener('mouseover', () => {
    cart.style.display = 'block';
});

cartad.addEventListener('mouseout', () => {
    setTimeout(() => {
        if (!cart.matches(':hover')) {
            cart.style.display = 'none';
        }
    }, 1000);
});

cart.addEventListener('mouseout', () => {
    cart.style.display = 'none';
});

cart.addEventListener('mouseover', () => {
    cart.style.display = 'block';
});


function addToCart(item) {
var itemId = item.closest('.ct-1').getAttribute('data-item-id');
var cartItems = document.getElementById('title');

if (document.querySelector(`#cartItem-${itemId}`)) {
alert('This item is already in the cart.');
return;
}

var selectedItem = document.createElement('div');
selectedItem.classList.add('cartImg');
selectedItem.setAttribute('id', `cartItem-${itemId}`);

var img = document.createElement('img');
img.setAttribute('src', item.closest('.ct-1').querySelector('img').src);

var title = document.createElement('h6');
title.textContent = item.closest('.ct-1').querySelector('.title').textContent;

var deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.classList.add('delete-btn');
deleteBtn.onclick = function() {
selectedItem.remove();
removeFromLocalStorage(itemId);
};

var buyNowBtn = document.createElement('button');
buyNowBtn.textContent = 'Buy Now';
buyNowBtn.classList.add('buy-now-btn');
buyNowBtn.onclick = function() {
alert('Proceeding to payment for ' + title.textContent);
};

selectedItem.append(img);
selectedItem.append(title);
selectedItem.append(deleteBtn);
selectedItem.append(buyNowBtn);
cartItems.append(selectedItem);

saveCartToLocalStorage(itemId, img.src, title.textContent);
}

function saveCartToLocalStorage(itemId, imgSrc, titleText) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({ id: itemId, img: imgSrc, title: titleText });
localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromLocalStorage(itemId) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart = cart.filter(item => item.id !== itemId);
localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
var cartItems = document.getElementById('title');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

cart.forEach(function(item) {
var selectedItem = document.createElement('div');
selectedItem.classList.add('cartImg');
selectedItem.setAttribute('id', `cartItem-${item.id}`);

var img = document.createElement('img');
img.setAttribute('src', item.img);

var title = document.createElement('h6');
title.textContent = item.title;

var deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.classList.add('delete-btn');
deleteBtn.onclick = function() {
selectedItem.remove();
removeFromLocalStorage(item.id);
};

var buyNowBtn = document.createElement('button');
buyNowBtn.textContent = 'Buy Now';
buyNowBtn.classList.add('buy-now-btn');
buyNowBtn.onclick = function() {
alert('Proceeding to payment for ' + title.textContent);
};

selectedItem.append(img);
selectedItem.append(title);
selectedItem.append(deleteBtn);
selectedItem.append(buyNowBtn);
cartItems.append(selectedItem);
});
}

window.onload = function() {
loadCartFromLocalStorage();
};