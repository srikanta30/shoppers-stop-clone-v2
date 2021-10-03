//Order Successful Page:

window.addEventListener('load', async() => {

    if (localStorage.getItem("currentuser") === null){
        alert("Please Login To Continue!");
        window.location.href = "signin"
    }

    else {
    let currentuser = localStorage.getItem("currentuser");
    let res = await fetch (`https://shoppers-stop-com.herokuapp.com/user/${currentuser}`);
    let data = await res.json();
    let cart = data.item[0].cart;
    let orders = data.item[0].orders;
    let neworders = [...cart, ...orders];
    let emptycart = [];

    let sendres = await fetch(`https://shoppers-stop-com.herokuapp.com/user/${currentuser}`, {
    method: 'PATCH',
    body: JSON.stringify({
    orders: neworders,
    cart: emptycart
    }),
    headers: {
   'Content-type': 'application/json; charset=UTF-8'
   }
  })

  let resdata = await sendres.json();
  return resdata;

    }
})

let logout = document.getElementById('logout');
logout.onclick = () => {
    localStorage.setItem("currentuser", null);
    window.location.href = '/';
}

