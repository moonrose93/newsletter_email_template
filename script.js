function openPopup() {
    var popup = document.getElementById("popup");
    var emailInput = document.querySelector('input[type="text"]');
    var email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        popup.classList.add("open-popup");
    } else {
        displayErrorMessage("Invalid email address.");
        return;
    }
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function displayErrorMessage(message) {
    var errorContainer = document.getElementById("error-container");
    var errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    errorContainer.appendChild(errorMessage);
}

openPopup();
function openPopup() {
    var popup = document.getElementById("popup");
    var emailInput = document.querySelector('input[type="text"]');
    var email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        popup.classList.add("open-popup");
    } else {
        displayErrorMessage("Invalid email address.");
        return;
    }
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function displayErrorMessage(message) {
    var errorContainer = document.getElementById("error-container");
    var errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    errorContainer.appendChild(errorMessage);
}

openPopup();
