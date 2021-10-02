window.addEventListener("load", function(){
    let newotp = Math.floor(Math.random()*899999+100000);

    alert(newotp);


let otpinput = document.getElementById("inputotp");

let signinbutton = document.getElementById("signinbutton");

signinbutton.addEventListener("click", async function(){

    if (otpinput.value == newotp){

        alert("Sign Up Successful, Please Login To Continue!")
        window.location.href = "signin"
    }
    else {
        document.getElementById("message").textContent = "Sorry! Wrong OTP, Please try again."
    }


    
})


})
