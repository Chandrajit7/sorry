function createHeart(i) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.setProperty("--i", i);
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(() => {
  const i = Math.random();
  createHeart(i);
}, 500);

function showMore() {
  alert("I'm sorry ,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry,I'm sorry. ❤️");
}
