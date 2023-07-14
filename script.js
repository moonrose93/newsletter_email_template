let popup = document.getElementById("popup");
const notValid = document.querySelector('.not-valid');
const wrapper = document.querySelector('.wrapper');

function openPopup() {
  var emailInput = document.querySelector('input[type="text"]').value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    popup.classList.add("open-popup");
    wrapper.classList.add('none-active');
    wrapper.classList.remove("wrapper");
    notValid.classList.remove("active");

  }else{

    notValid.classList.add("active");
    notValid.classList.remove("not-valid");

  }
    
  
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function hideWrapper() {
  var emailInput = document.querySelector('input[type="text"]').value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(emailInput)) {
    document.querySelector('.wrapper').style.display = "none";
  }
}

function displayErrorMessage(message) {
  var errorContainer = document.getElementById("error-container");
  var errorMessage = document.createElement("p");
  errorMessage.className = "error-message";
  errorMessage.textContent = message;
  errorContainer.appendChild(errorMessage);
}



