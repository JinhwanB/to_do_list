const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const INPUT_USERNAME = "username";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(INPUT_USERNAME, username);
  helloToVisitor(username);
  printQuote();
  printClock();
  printWeather();
  printToDoForm();
}

function helloToVisitor(username) {
  greetings.innerText = `Hello, ${username}`;
  greetings.classList.remove(HIDDEN_CLASSNAME);
  greetings.classList.add("animate__animated", "animate__fadeInDown");
}

const savedUsername = localStorage.getItem(INPUT_USERNAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add("animate__animated", "animate__fadeInDown");
  greetings.classList.add("animate__animated", "animate__fadeInDown");
  loginForm.addEventListener("submit", loginSubmit);
} else {
  helloToVisitor(savedUsername);
}
