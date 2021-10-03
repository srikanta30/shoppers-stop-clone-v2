//Orders Page:

let display = document.getElementById("shoppingbag");
let checkoutbutton = document.getElementById("checkoutbutton");

window.addEventListener("load", () => {
    if (localStorage.getItem("currentuser") === null) {

        alert("Please Login To Continue!");
        window.location.href = "signin"
    }
    displayorders();
})

let currentuser = localStorage.getItem("currentuser");

async function displayorders(){

                   
      let res = await fetch (`https://shoppers-stop-com.herokuapp.com/user/${currentuser}`);
      let data = await res.json();
      let orders = data.item[0].orders;
    if (orders.length != 0){
        let count = 0;
        display.innerHTML = "";
        display.setAttribute("id", "products");


        orders.forEach(async (pro) => {
            pro = Number(pro);
            let res = await fetch(`https://shoppers-stop-com.herokuapp.com/product/view/${pro}`);
            let data = await res.json();
            let product = data.item[0];
        
            count++
            let div = document.createElement("div");
              let p_name = document.createElement("p");
              p_name.innerText = product.name;
              let p_description = document.createElement("p");
              p_description.innerText = product.description;
              let image = document.createElement("img");
              image.src = product.images[0];
              let color = document.createElement("p");
              color.innerText = product.color;
              let p_price = document.createElement("p");
              p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`;
              div.append(image, p_name, p_description, color, p_price);
              display.append(div);
              let h2 = document.getElementById("count");
              h2.innerHTML = `Your Orders (${count} Items)`
              checkoutbutton.innerHTML = `<button onclick="location.href='category'" id="checkout">CONTINUE SHOPPING</button>`
              
        })
    }
    

}