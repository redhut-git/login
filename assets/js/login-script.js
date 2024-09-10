$(document).ready(function () {

});

function togglePassword() {
    let passwordInput = document.getElementById("_password");
    let toggleIcon = document.getElementById("toggleEyeIcon");

    // TOGGLE PASSWORD VISIBILITY
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.setAttribute("icon", "mdi:eye-off-outline");
    } else {
        passwordInput.type = "password";
        toggleIcon.setAttribute("icon", "mdi:eye-outline");
    }
}


let submitBtn = document.getElementById("submit");
let _username = document.getElementById("_username");
let _password = document.getElementById("_password");

submitBtn.addEventListener("click", function (e) {

    if (_username.value == "" || _password.value == "") {
        Swal.fire({
            title: "Error",
            text: "Please fill username and password.",
            icon: "error",
            allowOutsideClick: false
        });
        e.preventDefault();
    } else if (grecaptcha.getResponse().length === 0) {
        Swal.fire({
            title: "Error",
            text: "Please complete the reCAPTCHA to proceed.",
            icon: "error",
            allowOutsideClick: false
        });
        e.preventDefault();
    }
});