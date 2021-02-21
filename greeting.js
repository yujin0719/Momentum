const greeting = document.querySelector('.js-greetings'),
  greetingForm = document.querySelector('.js-form'),
  greetingInput = greetingForm.querySelector('input');

const USER = 'currentUser',
  SHOWING = 'showing';

function printGreeting(value) {
  greetingForm.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  const name = value.toUpperCase();
  greeting.innerText = `${name}'s To Do List`;
}
function saveName(value) {
  localStorage.setItem(USER, value);
}
function handleSubmit(e) {
  e.preventDefault();
  const currentValue = greetingInput.value;
  printGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  greetingForm.classList.add(SHOWING);
  greetingForm.addEventListener('submit', handleSubmit);
}
function loadName() {
  const currentUser = localStorage.getItem(USER);
  if (currentUser === null) {
    askForName();
  } else {
    printGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();
