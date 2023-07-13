let popup = document.getElementById("popup");

function openPopup() {
    var emailInput = document.querySelector('input[type="text"]').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
         popup.classList.add("open-popup");
    
        } else {
        
         displayErrorMessage("Error! Please enter a valid email address.");
    }

  }

  function closePopup(){
    popup.classList.remove("open-popup");
}



  function displayErrorMessage(message) {
    var errorContainer = document.getElementById("error-container");
    var errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    errorContainer.appendChild(errorMessage);
}

function hideWrapper(){
    var wrapperHide = document.getElementsByClassName("wrapper");
}