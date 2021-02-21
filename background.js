const body = document.querySelector("body");
const IMG_NUMBER = 5;

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function paintImage(number) {
    const image = new Image();
    image.src = `images/${number+1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}
init();
