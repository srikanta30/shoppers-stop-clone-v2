//Cart Page:

let display = document.getElementById("shoppingbag");
let checkoutbutton = document.getElementById("checkoutbutton");


window.addEventListener("load", () => {
    if (localStorage.getItem("currentuser") === null) {

        alert("Please Login To Continue!");
        window.location.href = "signin"
    }
    displaycart();
})

let currentuser = localStorage.getItem("currentuser");

async function displaycart(){
                          
    let res = await fetch (`http://localhost:3000/user/${currentuser}`);
    let data = await res.json();
    let cart = data.item[0].cart;
    if (cart.length != 0){
        let count = 0;
        let total = 0;
        display.innerHTML = "";
        display.setAttribute("id", "products");
        cart.forEach(async (pro) => {
            pro = Number(pro);
            let res = await fetch(`http://localhost:3000/product/view/${pro}`);
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
              let size = document.createElement("p");
              size.innerText = product.sizes[0];
              let p_price = document.createElement("p");
              p_price.innerHTML = `<div class="price rupee">₹ ${Math.round(product.price - (product.price * product.discount / 100))} <p class="strike">MRP ${product.price}</p></div> <p class="discount">(${product.discount}% OFF)</p>`
              total = total + Math.round(product.price - (product.price * product.discount / 100));
              let button = document.createElement("button");
              button.innerText = "REMOVE";
              button.value = product._id;
              let divid = "div" + count;
              div.setAttribute("id", divid);
              button.addEventListener("click", async () => {
                                     
                  let res = await fetch (`http://localhost:3000/user/${currentuser}`);
                  let data = await res.json();

                  let index = button.value;

                  let updatedcart = [];

                  for (let i = 0 ; i < data.item[0].cart.length; i++){
                      if (data.item[0].cart[i] == index){
                        continue;
                      }
                      else {
                          updatedcart.push(data.item[0].cart[i]);
                      }
                  }

                  document.getElementById(divid).remove();

                  let id = data.item[0]._id;
                                       
                  let sendres = await fetch(`http://localhost:3000/user/${currentuser}`, {
                  method: 'PATCH',
                  body: JSON.stringify({
                  cart: updatedcart
                }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8'
                }
                })
                let resdata = await sendres.json();
                
                displaycart();

              })
              div.append(image, p_name, p_description, color, size, p_price, button);
              display.append(div);
              let h2 = document.getElementById("count");
              h2.innerHTML = `Shopping Bag (${count} Items) - <br>TOTAL <div class="rupee">₹ ${total}</div>`
              checkoutbutton.innerHTML = `<button onclick="location.href='checkout'" id="checkout">PROCEED TO CHECKOUT</button>`
        })
    }
}