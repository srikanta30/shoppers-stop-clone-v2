
//For Getting Cart & Wishlist Count On Header:


window.addEventListener("load", () => {
  // if (localStorage.getItem("currentuser") === null) {

  //     alert("Please Login To Continue!");
  //     window.location.href = "signin"
  // }
})
// let currentuser = localStorage.getItem("currentuser");
  window.addEventListener("load", async () => {
                          // `http://localhost:3000/user/${currentuser}`
    let res = await fetch ('http://localhost:3000/user/8513938716');
    let data = await res.json();
    let count = data.item[0].cart.length;
    let countw = data.item[0].wishlist.length;

    let notify = document.getElementById("lblCartCount");
    notify.innerText = count;
    let notifyw = document.getElementById("lblwishlistCount");
    notifyw.innerText = countw;
  });

  //For Checking Size:

  var sizebtn = document.getElementsByClassName("sizebtn");
  var btnid = document.getElementById("forbutton");
  var i;

  for (i = 0; i < sizebtn.length; i++) {
    let divdisply = document.createElement("div");
    sizebtn[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this;
      if (content.style.backgroundColor == "white") {
        content.style.backgroundColor = "black";
        content.style.color = "white";
        divdisply.innerText = "Selected Size Available";
        btnid.append(divdisply);
      } else {
        content.style.backgroundColor = "white";
        content.style.color = "black";
        divdisply.innerText = "";
        btnid.append(divdisply);
      }
    });
  }

  //For Checking Delivery Options:

  function checkdelivery() {
    let btnD = document.getElementById("deliverybtn");
    let deliveryP = document.getElementById("deliveryadd");

    let div = document.createElement("div");
    div.style.color = "red";

    btnD.onclick = function () {
      let pinD = document.getElementById("deliverypin").value;
      if (pinD == 580001 || pinD == 510001) {
        div.style.color = "green";
        div.innerText = "Standard Delivery within 5-7 days";
      } else if (pinD == "") {
        div.style.color = "red";
        div.innerText = "Invalid Pincode";
      } else {
        div.style.color = "red";
        div.innerText = "Sorry, Delivery option not available";
      }
    };
    deliveryP.append(div);
  }
  checkdelivery();

  //For Collabsible Div:

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  //For Adding Products To Cart:

  let crtbtn = document.getElementById("cartbtn");

  crtbtn.onclick = async () => {
                           //`http://localhost:3000/user/${currentuser}`
    let res = await fetch ('http://localhost:3000/user/8513938716');
    let data = await res.json();
    data.item[0].cart.push(crtbtn.value);
    let updatedcart = data.item[0].cart;
    let id = data.item[0]._id;
                            //`http://localhost:3000/user/${currentuser}`
    let sendres = await fetch(`http://localhost:3000/user/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
    cart: updatedcart
    }),
    headers: {
   'Content-type': 'application/json; charset=UTF-8'
   }
  })
   let resdata = await sendres.json();
  
   let count = resdata.item.cart.length;

   
  
    let notify = document.getElementById("lblCartCount");
    notify.innerText = count;
  };

  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("proimg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Wishlist:

  let wishbtn = document.getElementById("wishlistbtn");

  wishbtn.onclick = async () => {
                          //`http://localhost:3000/user/${currentuser}`
    let res = await fetch ('http://localhost:3000/user/8513938716');
    let data = await res.json();
    data.item[0].wishlist.push(crtbtn.value);
    let updatedwishlist = data.item[0].wishlist;
    let id = data.item[0]._id;
                          //`http://localhost:3000/user/${currentuser}`
    let sendres = await fetch(`http://localhost:3000/user/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
    wishlist: updatedwishlist
    }),
    headers: {
   'Content-type': 'application/json; charset=UTF-8'
   }
  })
   let resdata = await sendres.json();

    let countw = resdata.item.wishlist.length;
    let notifyw = document.getElementById("lblwishlistCount");
    notifyw.innerText = countw;
    
  };