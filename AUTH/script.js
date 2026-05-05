let emailaddress = `edwinfrelancer@gmail.com`;
let password = `12345678`;
let userloginin = false;
let keepUserSignedIn = true;

function login() {
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    if (inputEmail === emailaddress && inputPassword === password) {
        userloginin = true;
        if (keepUserSignedIn) {
            localStorage.setItem("userLoggedIn", true);
        }
    }
}

function checkLoginStatus() {
    const loggedIn = localStorage.getItem("userLoggedIn");
    if (loggedIn === "true") {
        userloginin = true;
    }
}   

function logout() {
    userloginin = false;
    localStorage.removeItem("userLoggedIn");
}

