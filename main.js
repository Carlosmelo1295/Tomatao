const $btnStart = document.querySelector("#btnStart");
const $btnStop = document.querySelector("#btnStop");

const timePomodoro = document.querySelector("#time");

const audio = document.querySelector("#audio");
const pressBtn = document.querySelector("#press");

//ouvinte do evento
$btnStart.addEventListener("click", startCount);
$btnStop.addEventListener("click", stopCount);

let interval = null;
let minutes = "24";
let seconds = "59";

let size = 2;

function startCount() {
	pressBtn.play()
	interval = setInterval(() => {
		timePomodoro.innerHTML = `${minutes}:${seconds}`;
		seconds--;
		if (seconds == -1) {
			minutes--;
			seconds = 59;
		} else if (seconds < 10) {
			seconds = seconds.toString();
			while (seconds.length < size) {
				seconds = "0" + seconds;
			}
		} else if (minutes < 10 && minutes > -1) {
			minutes = minutes.toString();
			while (minutes.length < size) {
				minutes = "0" + minutes;
			}
		} else if (minutes == -1) {
			clearInterval(interval);
			audio.play();
			timePomodoro.innerHTML = `Pausa para o ☕`;
			minutes = '24';
			seconds = '59';
		}
	}, 5);
}

//criar uma contagem decremente de 5 min para a pausa

//parar execução
function stopCount() {
	clearInterval(interval);
	pressBtn.play()
}