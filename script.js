document.addEventListener("DOMContentLoaded", function () {
    const email_input_login = document.getElementById("email_input_login");
    const password_input_login = document.getElementById("password_input_login");
    const button_submit_login = document.getElementById("button_submit_login");
    const register_button_login = document.getElementById("register_button_login");
    const username_input_register = document.getElementById("username_input_register ");
    const password_input_register= document.getElementById("password_input_register");
    const email_input_register= document.getElementById("email_input_register");
    const phone_num_input_register= document.getElementById("phone_num_input_register");
    const button_submit_register= document.getElementById("button_submit_register");
    const login_button_register= document.getElementById("login_button_register");
    const login = document.getElementById("login");
});

register_button_login.addEventListener("click", function(e)
{
    e.preventDefault()
    window.location.href = "register.html" ; 
}
);


login_button_register.addEventListener("click", function(e)
{
    e.preventDefault()
    window.location.href = "login.html" ; 
}
);






