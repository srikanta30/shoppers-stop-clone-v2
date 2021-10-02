//Cloned Category Page URL: https://www.shoppersstop.com/men-clothing-t-shirts-polos/c-A101010

//For Getting Cart & Wishlist Count On Header:
window.addEventListener("load", async () => {
  if (localStorage.getItem("currentuser") === null) {

        alert("Please Login To Continue!");
        window.location.href = "signin"
    }
    let currentuser = localStorage.getItem("currentuser");
                   
  let res = await fetch (`http://localhost:3000/user/${currentuser}`);
  let data = await res.json();
  let count = data.item[0].cart.length;
  let countw = data.item[0].wishlist.length;

  let notify = document.getElementById("lblCartCount");
  notify.innerText = count;
  let notifyw = document.getElementById("lblwishlistCount");
  notifyw.innerText = countw;
});


//Showing the data on page:

window.addEventListener('load',function(){
    getProducts();
});

let productsDiv = document.getElementById("products");

async function getProducts(){
    let count = 0;
    let res = await fetch('http://localhost:3000/product');
    let data = await res.json();
    let myTshirts = data.items;
    myTshirts.forEach(function (product, n) {
       
        let div = document.createElement("div");
        div.addEventListener("click", function(){
          window.location.href = `product/${product._id}`;
        })
        let p_name = document.createElement("p");
        p_name.innerText = product.name;
        let p_description = document.createElement("p");
        p_description.innerText = product.description;
        let image = document.createElement("img");
        image.src = product.images[0];
        image.addEventListener("mouseover", function(e){
          e.target.src = product.images[2];
      })
      image.addEventListener("mouseout", function(e){
          e.target.src = product.images[0];
      })
      
        let p_price = document.createElement("p");
        p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`
        div.append(image, p_name, p_description, p_price);
        productsDiv.append(div);
        count++
    })
    changeCounter(count);
}

function changeCounter(c){
    let h3 = document.getElementById("count");
    h3.innerHTML = `(${c} ITEMS)`
}

//Collapsible Div:
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Sorting Functions:

// Sort By Discount:

async function sortByDiscount(){
    productsDiv.innerHTML = "";
    let count = 0;
    let res = await fetch('http://localhost:3000/product');
    let data = await res.json();
    let myTshirts = data.items;

    myTshirts.sort((a, b) => {
        return b.discount - a.discount;
    })

    myTshirts.forEach(function (product, n) {

        let div = document.createElement("div");
        div.addEventListener("click", function(){
          window.location.href = `product/${product._id}`;
        })
        let p_name = document.createElement("p");
        p_name.innerText = product.name;
        let p_description = document.createElement("p");
        p_description.innerText = product.description;
        let image = document.createElement("img");
        image.src = product.images[0];
        image.addEventListener("mouseover", function(e){
            e.target.src = product.images[2];
        })
        image.addEventListener("mouseout", function(e){
            e.target.src = product.images[0];
        })
        let p_price = document.createElement("p");
        p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`;
        div.append(image, p_name, p_description, p_price);
        productsDiv.append(div);
        count++;
    })
    changeCounter(count);
  }

  //Sort By Rating:

  async function sortByRating(){
    let count = 0;
    productsDiv.innerHTML = "";
    let res = await fetch('http://localhost:3000/product');
    let data = await res.json();
    let myTshirts = data.items;

    myTshirts.sort((a, b) => {
        return b.rating - a.rating;
    })

    myTshirts.forEach(function (product, n) {

        let div = document.createElement("div");
        div.addEventListener("click", function(){
          window.location.href = `product/${product._id}`;
        })
        let p_name = document.createElement("p");
        p_name.innerText = product.name;
        let p_description = document.createElement("p");
        p_description.innerText = product.description;
        let image = document.createElement("img");
        image.src = product.images[0];
        image.addEventListener("mouseover", function(e){
            e.target.src = product.images[2];
        })
        image.addEventListener("mouseout", function(e){
            e.target.src = product.images[0];
        })
        let p_price = document.createElement("p");
        p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`
        div.append(image, p_name, p_description, p_price);
        productsDiv.append(div);
        count++;
    })
    changeCounter(count);
  }

  //Sort By Pricing Low To High:

  async function sortByPriceLow(){
    let count = 0;
    productsDiv.innerHTML = "";
    let res = await fetch('http://localhost:3000/product');
    let data = await res.json();
    let myTshirts = data.items;

    myTshirts.sort((a, b) => {
        return Math.round(a.price - (a.price * a.discount / 100)) - Math.round(b.price - (b.price * b.discount / 100));
    })

    myTshirts.forEach(function (product, n) {

        let div = document.createElement("div");
        div.addEventListener("click", function(){
          window.location.href = `product/${product._id}`;
        })
        let p_name = document.createElement("p");
        p_name.innerText = product.name;
        let p_description = document.createElement("p");
        p_description.innerText = product.description;
        let image = document.createElement("img");
        image.src = product.images[0];
        image.addEventListener("mouseover", function(e){
            e.target.src = product.images[2];
        })
        image.addEventListener("mouseout", function(e){
            e.target.src = product.images[0];
        })
        let p_price = document.createElement("p");
        p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`
        div.append(image, p_name, p_description, p_price);
        productsDiv.append(div);
        count++;
    })
    changeCounter(count);
  }

  //Sort By Pricing High To Low:

  async function sortByPriceHigh(){
    let count = 0;
    productsDiv.innerHTML = "";
    let res = await fetch('http://localhost:3000/product');
    let data = await res.json();
    let myTshirts = data.items;

    myTshirts.sort((a, b) => {
        return Math.round(b.price - (b.price * b.discount / 100)) - Math.round(a.price - (a.price * a.discount / 100));
    })

    myTshirts.forEach(function (product, n) {

        let div = document.createElement("div");
        div.addEventListener("click", function(){
          window.location.href = `product/${product._id}`;
        })
        let p_name = document.createElement("p");
        p_name.innerText = product.name;
        let p_description = document.createElement("p");
        p_description.innerText = product.description;
        let image = document.createElement("img");
        image.src = product.images[0];
        image.addEventListener("mouseover", function(e){
            e.target.src = product.images[2];
        })
        image.addEventListener("mouseout", function(e){
            e.target.src = product.images[0];
        })
        let p_price = document.createElement("p");
        p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`
        div.append(image, p_name, p_description, p_price);
        productsDiv.append(div);
        count++;
    })
    changeCounter(count);
  }

  //Filtering Functions:

  //Brand Filter:

  async function filterSearch(){
    let count = 0;
    productsDiv.innerHTML = "";
    let res = await fetch('http://localhost:3000/product');
    let data = await res.json();
    let myTshirts = data.items;
    let inputs = document.querySelectorAll("input[type='checkbox']");
    let minPrice = document.getElementById("minprice").value;
    let maxPrice = document.getElementById("maxprice").value;
    myTshirts.forEach(function (product, n) {
        for (let i = 0; i < inputs.length; i++){
            if (minPrice != "" && maxPrice != ""){
        if (inputs[i].checked == true  && (findSize(product.sizes, inputs[i].value) == true || product.brand == inputs[i].value || product.discount == inputs[i].value || product.color == inputs[i].value) && product.price >= minPrice && product.price <= maxPrice){
        let div = document.createElement("div");
        div.addEventListener("click", function(){
          window.location.href = `product/${product._id}`;
        })
        let p_name = document.createElement("p");
        p_name.innerText = product.name;
        let p_description = document.createElement("p");
        p_description.innerText = product.description;
        let image = document.createElement("img");
        image.src = product.images[0];
        image.addEventListener("mouseover", function(e){
            e.target.src = product.images[2];
        })
        image.addEventListener("mouseout", function(e){
            e.target.src = product.images[0];
        })
        let p_price = document.createElement("p");
        p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`
        div.append(image, p_name, p_description, p_price);
        productsDiv.append(div);
        count++
    }}
    else {
        if (inputs[i].checked == true  && (findSize(product.sizes, inputs[i].value) == true ||product.brand == inputs[i].value || product.discount == inputs[i].value || product.color == inputs[i].value)){
            let div = document.createElement("div");
            div.addEventListener("click", function(){
              window.location.href = `product/${product._id}`;
            })
            let p_name = document.createElement("p");
            p_name.innerText = product.name;
            let p_description = document.createElement("p");
            p_description.innerText = product.description;
            let image = document.createElement("img");
            image.src = product.images[0];
            image.addEventListener("mouseover", function(e){
                e.target.src = product.images[2];
            })
            image.addEventListener("mouseout", function(e){
                e.target.src = product.images[0];
            })
            let p_price = document.createElement("p");
            p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`
            div.append(image, p_name, p_description, p_price);
            productsDiv.append(div);
            count++
            
    }
}}
changeCounter(count);
    })
    
   }

   function findSize(arr, input){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == input){
            return true;
        }
    }
    return false;
   }