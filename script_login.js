document.addEventListener("DOMContentLoaded", function () {
    const email_input_login = document.getElementById("email_input_login");
    const password_input_login = document.getElementById("password_input_login");
    const button_submit_login = document.getElementById("button_submit_login");
    const register_button_login = document.getElementById("register_button_login");

});



register_button_login.addEventListener("click", function(e)
{
    e.preventDefault()
    window.location.href = "register.html" ; 
}
);

button_submit_login.addEventListener("click", function(e) {
    
    e.preventDefault();

    
    const password_value = password_input_login.value.trim();
    const user_value = email_input_login.value.trim();
 
   
     if (password_value.length === 0 || user_value.length === 0) {
        alert('Please enter a username or password.');
    }
     else if (password_value.length < 8) {
        alert('Password should be at least 8 characters.');
    } 
    else if(user_value.length<6){
        alert('Username should be at least 6 characters');
    }
    else {

        window.location.href = "index.html";
    }
});

