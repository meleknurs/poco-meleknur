/*
Minimum shop functionality
list of products
list of products in cart
list of orders

*/

const products = [];
const cart = [];
const orders = [];
const customers = [];

const bottle1 = {
  name: "Retro",
  price: 20,
  id: 1,
  availability: true,
  picture: "bottle_retro.jpg",
  desc: "Resto bottle",
  details: {
    color: "white",
    volume_l: 1,
    material: "steel",
    sustainability: "",
    isolation_h: "24h hor or cold",
  },
};

console.log(1, bottle1);
products.push(bottle1);
console.log(2, products);
addToCart(1);
console.log(3, cart);
addToCart(1);
console.table(4, cart);

products.push(bottle1);
//declare bootle 2 to n and push in the products list.

function addToCart(productID) {
  // check if product is already in the cart
  // if it's increase quantity by 1
  //if not:
  cart.forEach(function (product) {
    let productInList = true;
    if (productID === product.id) {
      product.quantity++;
      productInList = true;
    }
  });
  if (!productInList) {
    cart.push({ id: productID, quantity: 1 });
  }
}
function isNewCustomer() {
  customers.forEach(function (customer) {
    if (email === customer.email) {
      return false;
    }
  });
  return true;
}

function createCustomer() {
  customers.push({
    id: customer.length++,
    email: customer.email,
    fname: customer.fname,
    lname: customer.lname,
  }); //to do: all the needed info
}

function getCustomerID(email) {
  customers.forEach(function (customer) {
    if (email === customer.email) {
      return customer.id;
    }
  });
}

function createOrder(formData) {
  if (isNewCustomer(formData.email)) {
    createCustomer(formData);
  }

  function getProductInfos(){
const resultArr=[];
cart.forEach(function(item){
    const obj = {};
    let productId = item.id;
    let productQuantity=item.quantity;
    products.forEach(function(product){
        if(product.id===productID){
            obj = product;
            obj.quantity= productQuantity;
            obj.productTotal=product.price*productQuantity;
        }
    });
resultArr.push(obj);

});
return resultArr;
  }

  function calculateTotal (productInfos){
    let total=0;
    productInfos.forEach(function(product){
        total+=product.productTotal;
    });
    return total;
  }


  let customerID = getCustomerID(formData.email);
  let productInfos = getProductInfos();
  let total = calculateTotal(productInfos);
  let shippingAdress = getShippingAddress(formData.shippingAdress);

  const order = {
    id: order.length++,
    dateTime: new Date().toISOString(),
    customerID: customerID,
    total: total,
    productInfos: productInfos,
    paymetMethod: formData.paymentMethod,
    shippingAdress: shippingAdress,
    status: "new"
  }

  clearCart();
  formData = null;
  /*
   * 1 . check if customer already exist in the lisf of customers
   * 2. if customer exist: customerID to store it later in the orders(connecting customers with orders)
   * 3. if customer not exist: create a new customer and get new customerID
   * 4. get all product info of the products in the cart
   * 5. calculate the total amount
   * 6. create a new object in orders with
   * * orderID- number
   * * orderDate- string
   * * customerID- number 
   * * total- number 
   * * productInfos- array of object
   * * shippingAdress- object
   * * status (new & unpaid, confirmed & paid, processed, deliveried, reutrned, cancelled)- string
   * 7. clear our cart and formData
   * 8. show bank details
   * 9. thank you
   */
}
