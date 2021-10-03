//Wishlist Page:

let display = document.getElementById("shoppingbag");
let checkoutbutton = document.getElementById("checkoutbutton");

window.addEventListener("load", () => {
    if (localStorage.getItem("currentuser") === null) {

        alert("Please Login To Continue!");
        window.location.href = "signin"
    }
    displaywishlist();
})

let currentuser = localStorage.getItem("currentuser");

async function displaywishlist(){

                   
      let res = await fetch (`https://shoppers-stop-com.herokuapp.com/user/${currentuser}`);
      let data = await res.json();
      let wishlist = data.item[0].wishlist;
    if (wishlist.length != 0){
        let count = 0;
        display.innerHTML = "";
        display.setAttribute("id", "products");


        wishlist.forEach(async (pro) => {
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
              let button = document.createElement("button");
              button.innerText = "REMOVE";
              button.value = product._id;
              let divid = "div" + count;
              div.setAttribute("id", divid);
            button.addEventListener("click", async () => {
              
let res = await fetch (`https://shoppers-stop-com.herokuapp.com/user/${currentuser}`);
let data = await res.json();

let index = button.value;

let updatedwishlist = [];

for (let i = 0 ; i < data.item[0].wishlist.length; i++){
if (data.item[0].wishlist[i] == index){
  continue;
}
else {
    updatedwishlist.push(data.item[0].wishlist[i]);
}
}

document.getElementById(divid).remove();

let id = data.item[0]._id;
                  
let sendres = await fetch(`https://shoppers-stop-com.herokuapp.com/user/${currentuser}`, {
method: 'PATCH',
body: JSON.stringify({
wishlist: updatedwishlist
}),
headers: {
'Content-type': 'application/json; charset=UTF-8'
}
})
let resdata = await sendres.json();

displaywishlist();

})
              div.append(image, p_name, p_description, color, p_price, button);
              display.append(div);
              let h2 = document.getElementById("count");
              h2.innerHTML = `Your Wishlist (${count} Items)`
              checkoutbutton.innerHTML = `<button onclick="location.href='category'" id="checkout">CONTINUE SHOPPING</button>`
              
        })
    }
    

}