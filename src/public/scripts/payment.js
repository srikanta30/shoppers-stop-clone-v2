//Payment Page:
window.addEventListener("load", function(){
    if (localStorage.getItem("currentuser") === null) {

        alert("Please Login To Continue!");
        window.location.href = "signin"
    } 
})

let currentuser = localStorage.getItem("currentuser");

window.addEventListener("load", async function(){

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
        total.style.fontFamily = "Verdana";
    total.innerText = `₹${carttotal}`;
    let subtotal = document.getElementById("subtotal");
    subtotal.innerText = `₹${carttotal}`;

    
    let payableamount = document.getElementById("payableamount");
            payableamount.textContent = `₹${carttotal}`;
            payableamount.value = carttotal;
            let totaldiscount = document.getElementById("totaldiscount");
            totaldiscount.textContent = "₹0";

    })
    
    let email = document.getElementById("displayemail");
    email.innerHTML = data.item[0].useremail;

  

})

paypal.Buttons({

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: document.getElementById('payableamount').value
          }
        }]
      });
    },

    
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
   
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            var transaction = orderData.purchase_units[0].payments.captures[0];
            console.log(transaction);
           
            window.location.href = 'processing';
            
      });
    }
  }).render('#paypal');

window.addEventListener("load", function(){
    let applypromo = document.getElementById("applyapomo");
    applypromo.addEventListener("click", function(){
        let promo = document.getElementById("promo").value;
        if (promo == "masai30"){
            alert("Discount Applied!");



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
                
                let discount = Math.round(carttotal * .30)
            carttotal = Math.round(carttotal * .70);
            let total = document.getElementById("total");
            total.innerHTML = `Payable Amount: ₹${carttotal}`;
            let coupon = document.getElementById("coupon");
            coupon.textContent = "30%";
            let payableamount = document.getElementById("payableamount");
            payableamount.textContent = `₹${carttotal}`;
            let totaldiscount = document.getElementById("totaldiscount");
            totaldiscount.textContent = `₹${discount}`;
            })



            


        }
        else {
            alert("Coupon Code Not Valid!");
        }
        
    })
})




window.addEventListener("load", function(){
    let proceedtocheckout = document.getElementById("proceedtocheckout");
    proceedtocheckout.addEventListener("click", function(){
        let cvv = document.getElementById("cvv").value;
        let cardnumber = document.getElementById("cardnumber").value;
        if (cardnumber == "" || cvv == ""){
            alert("Invalid Card Details!");
        }
        else {
            window.location.href = "orderprocessing";
        }
    })

})

