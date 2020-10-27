"use strict";
const $btnStart = document.querySelector("#btnStart");
const $btnStop = document.querySelector("#btnStop");
const timePomodoro = document.querySelector("#time");

const audio = document.querySelector("#audio");
const pressBtn = document.querySelector("#press");
const tomataoAudio = document.querySelector("#tomataoAudio");

//ouvinte do evento
$btnStart.addEventListener("click", startCount);
$btnStop.addEventListener("click", stopCount);

let interval = null;
let minutes = "24";
let seconds = "59";

let size = 2;

function startCount() {
   pressBtn.play();

   interval = setInterval(() => {
      timePomodoro.innerHTML = `${minutes}:${seconds}`;
      seconds--;

      if (seconds == -1) {
         minutes--;
         seconds = 59;
      }
      if (seconds < 10) {
         seconds = seconds.toString();
         while (seconds.length < size) {
            seconds = "0" + seconds;
         }
      }
      if (minutes < 10 && minutes > -1) {
         minutes = minutes.toString();
         while (minutes.length < size) {
            minutes = "0" + minutes;
         }
      }
      if (minutes == -1) {
         clearInterval(interval);
         $btnStart.disabled = false;
         audio.play();
         timePomodoro.innerHTML = `Pausa para o ☕`;
         Swal.fire(`Etapa concluída!`);
         minutes = "24";
         seconds = "59";
         img.style.rotate = "360deg";
      }
   }, 1000);

   img.style.width = "200px";
   img.style.transition = "500ms";

   $btnStart.disabled = true; // Desabilitar botão após o click
}

//criar uma contagem decrescente de 5 min para a pausa

//----------------------------------------------
function stopCount() {
   clearInterval(interval);
   pressBtn.play();
   img.style.width = "100px";

   $btnStart.disabled = false; //Habilitar "start" ao clicar em "stop"
}

//----------------------------------------------

let img = document.createElement("img");
document.querySelector(".containerTime").appendChild(img);

setTimeout(() => {
   tomataoAudio.play();
   img.src = "./icons/24692--ingredient_detail_ingredient-2.png";
   img.title = "Eu sou o tomatão e vou te ajudar na hora dos estudos!"
   img.style.width = "100px";
   img.style.cursor = "pointer"
}, 1000);


const $arrow_down = document.querySelector("#arrow-down").addEventListener('click', () => {
   scrollTo(0, window.innerHeight)

})