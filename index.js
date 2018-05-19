var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({ itemName:item, itemPrice:price});
  var itemName = item;
  return itemName + 'has been added to the cart';
 
}

function viewCart() {
  //return cart[0].itemName;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
