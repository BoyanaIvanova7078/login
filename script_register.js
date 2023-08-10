

 document.addEventListener("DOMContentLoaded", function() {
const username_input_register = document.getElementById("username_input_register ");
const password_input_register= document.getElementById("password_input_register");
const email_input_register= document.getElementById("email_input_register");
const phone_num_input_register= document.getElementById("phone_num_input_register");
const button_submit_register= document.getElementById("button_submit_register");
const login_button_register= document.getElementById("login_button_register");
 });



 login_button_register.addEventListener("click", function(e)
 {
     e.preventDefault()
     window.location.href = "login.html" ; 
 }
 );
 
 button_submit_register.addEventListener("click", function(e) {
    
    e.preventDefault();

    
    const password_value = password_input_register.value.trim();
    const user_value = username_input_register.value.trim();
    const emali_value = email_input_register.value.trim();
    const phone_value = phone_num_input_register.value.trim();
 
   
     if (password_value.length === 0 || user_value.length === 0 || emali_value===0 ||phone_value === 0) {
        alert('Please enter a username/password/e-mail/phone number.');
    }
     else if (password_value.length < 8) {
        alert('Password should be at least 8 characters.');
    } 
    else if(user_value.length<6){
        alert('Username should be at least 6 characters');
    }
    else if (isNaN(phone_value)||phone_value.length< 10) {
        alert('Phone number should include only numbers and should be at least 10 characters');
    }    
    else {
        alert ('Check your email for confirmation and log in');
        window.location.href = "login.html";
    }
});
 

