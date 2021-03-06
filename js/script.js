const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const containerModal = document.querySelector(".modal-container");
const btn = document.querySelector(".btn");
const audio = document.getElementById("audio");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imagens/game-over.png";
    mario.style.width = "75px";
    mario.style.margin = "20px";

    containerModal.classList.add("ativo");
    audio.pause();
    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);

btn.addEventListener("click", () => {
  location.reload();
});
