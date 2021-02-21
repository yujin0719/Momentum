const clock = document.querySelector('.js-clock'),
  clockTitle = clock.querySelector('h3'),
  dayTitle = clock.querySelector('p');

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function getDay(){
    const day = new Date();
    const year = day.getFullYear();
    const month = day.getMonth();
    const today = day.getDate();
    dayTitle.innerText = `${year}-${
        month < 10 ? `0${month+1}` : month+1
      }-${today < 10 ? `0${today}` : today}`;
}

function init() {
  getTime();
  getDay();
  setInterval(getTime, 1000);
}
init();
