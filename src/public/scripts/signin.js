//Sign In Page:

let signinemail = document.getElementById("signupemail");
let signinpassword = document.getElementById("signupPassword");
let signinbutton = document.getElementById("signinbutton");

signinbutton.addEventListener("click", function(){

    fetch(`https://shoppers-stop-com.herokuapp.com/user/`, { method: 'get' }).then(res => {
     
res = res.json();        
return res;
      
    }).then(data => {

        let myUsers = data.items;
    
myUsers.forEach(function(user){
        
    if ((user.useremail == signinemail.value || user.usermobile == signinemail.value) && user.userpassword == signinpassword.value){

    window.location.href = "/"
    let currentuser = user._id;
    localStorage.setItem("currentuser", currentuser);

    }
    })
    setTimeout(function(){
        let error = document.getElementById("message");
        error.innerText = "Invalid Email or Password!";
    }, 1000);
    
    
    
    }).catch((err) => {
            console.log(err);
    });

    
    
})


