const submitBtn = document.getElementById("submit");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
let emailValidate = false;
let nameValidate = false;

nameInput.addEventListener("input", nameValidation);
emailInput.addEventListener("input", emailValidation);
submitBtn.addEventListener("click", submitFunction);

function nameValidation() {
  if (nameInput.value) {
    nameInput.style.border = "2px solid green";
    nameValidate = true;
  } else {
    nameInput.style.border = "2px solid red";
    nameValidate = false;
  }
}

function emailValidation() {
  let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  if (regex.test(emailInput.value)) {
    emailInput.style.border = "2px solid green";
    emailValidate = true;
  } else {
    emailInput.style.border = "2px solid red";
    emailValidate = false;
  }
}

function submitFunction() {
  event.preventDefault();
  if (nameValidate && emailValidate) {
    alert("Validation Completed");
  } else {
    if (!nameValidate) nameInput.style.border = "2px solid red";
    if (!emailValidate) emailInput.style.border = "2px solid red";
    alert("Please fill the form correctly");
  }
}
