//Signup Page:

let signup_button = document.getElementById("signupbutton");
signup_button.addEventListener("click", function(){

let name = document.getElementById("signupFullName").value;
let email = document.getElementById("signupemail").value;
let mobile = document.getElementById("signupMobileNumber").value;
let password = document.getElementById("signupPassword").value;

let gender_select = document.querySelectorAll('input[name="gender"]');
for (let i = 0; i < gender_select.length; i++){
if (gender_select[i].checked){
    var gender = gender_select[i].id;
}
}


fetch(`http://localhost:3000/user/`, {
    method: 'POST',
    body: JSON.stringify({
       username: name,
       useremail: email,
       usermobile: mobile,
       userpassword: password,
       usergender: gender
    
  }),
  headers: {
  'Content-type': 'application/json; charset=UTF-8'
  }
  }).then((res) => {
     
        
if (res.status == 400){
    let error = document.getElementById("message");
    setTimeout(function(){
        error.innerText = "User ID Already Exists!";
    }, 1000);
}

else {
window.location.href = "sendotp"
}
            

   
      
    }).catch((err) => {
        
            console.log(err);
        
        
        
    });

})