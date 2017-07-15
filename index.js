let cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100)
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  let cart = getCart()
  if(!cart.length) {
    console.log('Your shopping cart is empty.')
  }
  let itemList = []
  for(let i = 0; i < cart.length; i++) {
    let itemPrice = cart[i]
    let item = Object.keys(cart[i]).join()
    let price = cart[i][item]
    itemList.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemList.join(', ')}.`)
}

function total() {
  let cart = getCart()
  let total = 0
  for(let i = 0; i < cart.length; i++) {
    let item = Object.keys(cart[i])
    let itemCost = cart[i][item]
    total += itemCost
  }
  return total
}
function removeFromCart(item) {
  let cart = getCart()
  for(let i = 0; i < cart.length; i++){
    if(Object.keys(cart[i]).join() === item) {
      cart.splice(i)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}
