const AIGUILLEHR = document.querySelector('#hour');
const AIGUILLEMIN = document.querySelector('#minute');
const AIGUILLESEC = document.querySelector('#second');

let SecTurns = 0;
let MinTurns = 0;
let HourTurns = 0;

function demarrerLaMontre() {
	let now = new Date();

	let secDegree = now.getSeconds() / 60 * 360;
	if (secDegree == 0) SecTurns += 1;
	AIGUILLESEC.style.transform = `rotate(${secDegree + 360 * SecTurns}deg)`;

	let minDegree = now.getMinutes() / 60 * 360;
	if (minDegree == 0) MinTurns += 1;
	AIGUILLEMIN.style.transform = `rotate(${minDegree + 360 * MinTurns}deg)`;

	let hourDegree = now.getHours() / 12 * 360;
	if (hourDegree == 0) HourTurns += 1;
	AIGUILLEHR.style.transform = `rotate(${hourDegree + 360 * HourTurns}deg)`;
}

const interval = setInterval(demarrerLaMontre, 1000);
