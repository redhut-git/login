$(document).ready(function() {
    
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