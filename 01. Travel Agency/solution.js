window.addEventListener('load', solution);

function solution() {
  let submitBtn = document.getElementById("submitBTN");
  submitBtn.addEventListener("click", addToPreview);

  let editBtn = document.getElementById("editBTN");
  

  let continueBtn = document.getElementById("continueBTN");
  

  let fullName = document.getElementById("fname");
  let email = document.getElementById("email");
  let phoneNumber = document.getElementById("phone");
  let address = document.getElementById("address");
  let postalCode = document.getElementById("code");

  let preview = document.getElementById("infoPreview");
  let block = document.getElementById("block");
  let body = document.body;

  function addToPreview(e) {
    let fullNameValue = fullName.value;
    let emailValue = email.value;
    let phoneNumberValue = phoneNumber.value;
    let addressValue = address.value;
    let postalCodeValue = postalCode.value;
    
    editBtn.addEventListener("click", loadInputs);
    continueBtn.addEventListener("click", completeReservation)

    if (!fullNameValue || !emailValue){
      return;
    }

    fullName.value = '';
    email.value = '';
    phoneNumber.value = '';
    postalCode.value = '';
    address.value = '';

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    let liName = document.createElement('li');
    let liEmail = document.createElement('li');
    let liPhone = document.createElement('li');
    let liAddress = document.createElement('li');
    let liCode = document.createElement('li');

    liName.textContent = `Full Name: ${fullNameValue}`;
    liEmail.textContent = `Email: ${emailValue}`;
    liPhone.textContent = `Phone Number: ${phoneNumberValue}`;
    liAddress.textContent = `Address: ${addressValue}`;
    liCode.textContent = `Postal Code: ${postalCodeValue}`;

    preview.appendChild(liName);
    preview.appendChild(liEmail);
    preview.appendChild(liPhone);
    preview.appendChild(liAddress);
    preview.appendChild(liCode);
  }

  function loadInputs(e){
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

    let arrayInputs = document.querySelectorAll("li");

    fullName.value = arrayInputs[0].innerHTML.split(": ")[1];
    email.value = arrayInputs[1].innerHTML.split(": ")[1];
    phoneNumber.value = arrayInputs[2].innerHTML.split(": ")[1];
    address.value = arrayInputs[3].innerHTML.split(": ")[1];
    postalCode.value = arrayInputs[4].innerHTML.split(": ")[1];
    
    preview.querySelectorAll("li").forEach(li => li.remove());
    
    
  }

  function completeReservation(e){
    block.remove();

    let divText = document.createElement("div");
    divText.setAttribute("id", "block");

    
    let h3 = document.createElement("h3");
    h3.textContent = "Thank you for your reservation!";

    divText.appendChild(h3);

    body.appendChild(divText);

  }
}
