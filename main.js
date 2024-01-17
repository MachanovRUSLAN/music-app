import { musics } from "./data.js";

// const audioElem = document.querySelector("audio");
const panelElem = document.querySelector(".panel")
const playBtn = document.getElementById("play")
const stopBtn = document.getElementById("stop")
const nextBtn = document.getElementById("next")
const lastBtn = document.getElementById("last")
const audioImg = document.querySelector("img")
const audioName = document.querySelector("h2")
const audioAuthor = document.querySelector("p")
const audio = document.querySelector("audio")
let index = 0;
render(musics[0]);

playBtn.addEventListener("click", () => {
  audio.play()
  playBtn.style.display = "none"
  stopBtn.style.display = "block"
})

stopBtn.addEventListener("click", () => {
  audio.pause()
  playBtn.style.display = "block"
  stopBtn.style.display = "none"

})
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= musics.length) {
    index = 0;
  }
  render((musics[index]))
  audio.play()

})
lastBtn.addEventListener("click", () => {
  index--;
  render((musics[index]))
  audio.play()
})
function render(param) {
  const { url, name, author, img } = param
  audioImg.src = `./img/${img}`
  audioName.textContent = name
  audioAuthor.textContent = author
  audio.src = `./audio/${url}`
}