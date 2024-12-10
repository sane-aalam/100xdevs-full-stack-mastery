
console.log("-----let's begin:100xdevs-------");

const bodyContainer = document.getElementsByTagName("body");
const buttonSignUp = document.getElementById("btn-signup");
console.log(buttonSignUp);
const buttonSignUpText = buttonSignUp.textContent;
console.log(buttonSignUpText);

// single-thread-langauge-working!
buttonSignUp.addEventListener("click", () => {
  alert("click the button!");
  const newElement = document.createElement("h1");
  newElement.textContent = "This is heading tag";
  console.log(newElement);
  setTimeout(() => {
    alert("button creation is done!");
  }, 2000);
});
