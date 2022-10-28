const passwordBtn = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const nameInput = document.getElementById("name");
const spanPassword = document.getElementById("passwordSpan");
const spanName = document.getElementById("nameSpan");
let passwordvalidate = false;
let namevalidate = false;

passwordBtn.addEventListener("input", passwordValidation);
submitBtn.addEventListener("click", submitFunction);
nameInput.addEventListener("input", nameValidation);

function passwordValidation() {
  let minMaxLength = /^[\s\S]{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    number = /[0-9]/,
    special = /[ !"#$%&'()*+,\-./:;?@[\\\]^_`{|}~]/;
  if (
    minMaxLength.test(password.value) &&
    upper.test(password.value) &&
    lower.test(password.value) &&
    number.test(password.value) &&
    special.test(password.value)
  ) {
    spanPassword.textContent = "✅";
    passwordvalidate = true;
  } else {
    spanPassword.textContent = "❌";
    passwordvalidate = false;
  }
}

function nameValidation() {
  if (nameInput.value) {
    spanName.textContent = "✅";
    namevalidate = true;
  } else {
    spanName.textContent = "❌";
    namevalidate = false;
  }
}

function submitFunction() {
  event.preventDefault();
  if (namevalidate && passwordvalidate) {
    alert("Validation Completed");
  } else {
    if (!namevalidate) spanName.textContent = "❌";
    if (!passwordvalidate) spanPassword.textContent = "❌";
    alert("Please fill the form correctly");
  }
}
