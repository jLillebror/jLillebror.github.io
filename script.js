// konstanta användarnamn och lösenord
const username = "Bella";
const password = "qwe123";

// hitta DOM-element
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const textContainer = document.getElementById("text-container");
const mainHeading = document.getElementById("mainHeading");
const mainParagraph = document.getElementById("mainParagraph");

// försök att logga in
function login() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === username && enteredPassword === password) {
        // inloggningen lyckades
        textContainer.textContent = "Välkommen, du är nu inloggad!";

        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Logga ut";
        logoutButton.addEventListener("click", logout);
        textContainer.appendChild(logoutButton);
        
        // göm h1, p, input-fälten, logga in-knappen 
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        mainHeading.style.display = "none";
        mainParagraph.style.display = "none";
        
        // spara användaren som loggedin i localStorage
        localStorage.setItem("loggedIn", "true");


    } else {
        // inloggning misslyckades
        textContainer.textContent = "Fel användarnamn eller lösenord. Försök igen.";
    }
}

// logga ut
function logout() {
    // ta bort meddelande och knappen
    textContainer.textContent = "";
    // visa h1, p, input-fälten samt logga in-knappen
    usernameInput.style.display = "block";
    passwordInput.style.display = "block";
    loginButton.style.display = "block";
    mainHeading.style.display = "block";
    mainParagraph.style.display = "block";

    
    // rensar localStorage
    localStorage.clear();
}

// Kolla om användaren är inloggad när sidan laddas
window.onload = function () {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
        // användaren är fortfarande inloggad
        console.log("user is still logged in");
        textContainer.textContent = "Välkommen tillbaka " + (username) + "!";
        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Logga ut";
        logoutButton.addEventListener("click", logout);
        textContainer.appendChild(logoutButton);
        // göm h1, p, input-fälten, logga in-knappen 
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
        mainHeading.style.display = "none";
        mainParagraph.style.display = "none";
    }
}