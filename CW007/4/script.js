const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const singinBtn = document.getElementById("singin");
const emailSpan = document.getElementById("emailSpan");
const passwordSpan = document.getElementById("passwordSpan");
let emailValidate = false;
let passwordValidate = false;

emailInput.addEventListener("input", emailValidation);
passwordInput.addEventListener("input", passwordValidation);
singinBtn.addEventListener("click", signinFunction);

function emailValidation() {
  let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  if (regex.test(emailInput.value)) {
    emailSpan.textContent = "✅";
    emailValidate = true;
  } else {
    emailSpan.textContent = "❌";
    emailValidate = false;
  }
}

function passwordValidation() {
  let minMaxLength = /^[\s\S]{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    number = /[0-9]/,
    special = /[ !"#$%&'()*+,\-./:;?@[\\\]^_`{|}~]/;
  if (
    minMaxLength.test(passwordInput.value) &&
    upper.test(passwordInput.value) &&
    lower.test(passwordInput.value) &&
    number.test(passwordInput.value) &&
    special.test(passwordInput.value)
  ) {
    passwordSpan.textContent = "✅";
    passwordValidate = true;
  } else {
    passwordSpan.textContent = "❌";
    passwordValidate = false;
  }
}

function signinFunction() {
  event.preventDefault();
  if (passwordValidate && emailValidate) alert("Signing in...");
  else {
    if (!passwordValidate) passwordSpan.textContent = "❌";
    if (!emailValidate) emailSpan.textContent = "❌";
    alert("Please fill the form correctly");
  }
}
