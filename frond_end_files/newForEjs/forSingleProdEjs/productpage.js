
  window.addEventListener("load", function () {
    let count = JSON.parse(localStorage.getItem("cart")).length;
    let notify = document.getElementById("lblCartCount");
    notify.innerText = count;

    let countw = JSON.parse(localStorage.getItem("wishlist")).length;
    let notifyw = document.getElementById("lblwishlistCount");
    notifyw.innerText = countw;
  });

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

  // var cart = [];

  // localStorage.setItem("cart", JSON.stringify(cart));

  // let crtbtn = document.getElementById("cartbtn");

  // crtbtn.onclick = function () {

  //     let tshirts =
  //     {
  //         id: "1",
  //         name: "LIFE",
  //         description: "Printed Cotton Regular Fit Mens T-Shirt",
  //         price: "599",
  //         discount: "50",
  //         brand: "LIFE",
  //         rating: "4.5",
  //         sizes: ["LARGE", "MEDIUM", "SMALL", "X-LARGE", "X-SMALL", "XX-LARGE"],
  //         color: "Coral",
  //         images: ["https://sslimages.shoppersstop.com/sys-master/images/hf8/h61/16382984323102/S21183RNP456C_CORAL.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/h9a/hb4/16383081906206/S21183RNP456C_CORAL_alt1.jpg_1088Wx1632H", "https://sslimages.shoppersstop.com/sys-master/images/hb6/h7a/16382968823838/S21183RNP456C_CORAL_alt2.jpg_1088Wx1632H"]
  //     };
  //     cart = JSON.parse(localStorage.getItem("cart"));

  //     cart.push(tshirts)
  //     localStorage.setItem("cart", JSON.stringify(cart));

  // }

  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", "[]");
  }
  let myTshirts = localStorage.getItem("myTshirts");

  myTshirts = JSON.parse(myTshirts);

  let crtbtn = document.getElementById("cartbtn");

  crtbtn.onclick = function () {
    let count = JSON.parse(localStorage.getItem("cart")).length;
    let tshirts = undefined;
    myTshirts.forEach(function (product, n) {
      if (n == 0) {
        tshirts = product;
      }
    });

    let notify = document.getElementById("lblCartCount");
    count++;
    notify.innerText = count;

    cart = JSON.parse(localStorage.getItem("cart"));

    cart.push(tshirts);
    localStorage.setItem("cart", JSON.stringify(cart));
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

  // wichlist function

  if (localStorage.getItem("wishlist") === null) {
    localStorage.setItem("wishlist", "[]");
  }

  let wishbtn = document.getElementById("wishlistbtn");

  wishbtn.onclick = function () {
    let countw = JSON.parse(localStorage.getItem("wishlist")).length;
    let tshirts = undefined;
    myTshirts.forEach(function (product, n) {
      if (n == 0) {
        tshirts = product;
      }
    });

    let notifyw = document.getElementById("lblwishlistCount");
    countw++;
    notifyw.innerText = countw;

    wishlist = JSON.parse(localStorage.getItem("wishlist"));

    wishlist.push(tshirts);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };