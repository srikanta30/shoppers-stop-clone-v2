//Checkout Page:

window.addEventListener("load", function(){
    if (localStorage.getItem("currentuser") === null) {

        alert("Please Login To Continue!");
        window.location.href = "signin"
    } 
})

let currentuser = localStorage.getItem("currentuser");

window.addEventListener("load", async function(){
    
    //Calculate carttotal & user email:

    let res = await fetch (`https://shoppers-stop-com.herokuapp.com/user/${currentuser}`);
    let data = await res.json();
    let cart = data.item[0].cart;
    let carttotal = 0;

    cart.forEach(async (pro) => {
        pro = Number(pro);
        let res = await fetch(`https://shoppers-stop-com.herokuapp.com/product/view/${pro}`);
        let data = await res.json();
        let product = data.item[0];
        carttotal = carttotal + Math.round(product.price - (product.price * product.discount / 100));
        let total = document.getElementById("total");
    total.innerText = `₹${carttotal}`;
    let subtotal = document.getElementById("subtotal");
    subtotal.innerText = `₹${carttotal}`;
    let youhavesaved = document.getElementById("youhavesaved");
    youhavesaved.innerText = `₹${carttotal}`;
    })
    
    let email = document.getElementById("displayemail");
    email.innerHTML = data.item[0].useremail;
})

window.addEventListener("load", function(){

    let savebutton = document.getElementById("save");
    savebutton.addEventListener("click", function(e){
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let phone = document.getElementById("phone");
    let pin = document.getElementById("pin");
    let city = document.getElementById("city");
    let address1 = document.getElementById("address1");
    let address2 = document.getElementById("address2");

    let address = firstname.value + " " + lastname.value + " , Phone: " + phone.value + ", City: " + city.value + " , Address: " + address1.value + " , " + address2.value;
        
    if (firstname.value == "" || lastname.value == "" || phone.value == "" || city.value == "" || address1.value == ""){
            alert("Please Add Complete Address!")
        }

    else {
    
    fetch(`https://shoppers-stop-com.herokuapp.com/user/${currentuser}`, {
    method: 'PATCH',
    body: JSON.stringify({
    useraddress: address
    }),
    headers: {
   'Content-type': 'application/json; charset=UTF-8'
   }
  }).then((res) => {return res.json()}).then((data) =>{return data;}).catch((err)=> {return err;})

            window.location.href = "payment";
    }
            
        
        
    })
})
