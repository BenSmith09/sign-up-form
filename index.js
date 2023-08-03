const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
const button = document.querySelector(".dismiss");

//Validate email input
function ValidateEmail(input) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    alert("Invalid email address!");
    input.focus();
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents the page from refreshing on submit
  const emailInput = document.querySelector("#email");

  if (ValidateEmail(emailInput)) {
    card_1.classList.add("hide"); //these two lines of code adds and removes the hide css styles to display the success message
    card_2.classList.remove("hide");
  }
});

button.addEventListener("click", (e) => {
  card_1.classList.remove("hide");
  card_2.classList.add("hide");
});
