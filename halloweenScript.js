const daysHalloweenObject = document.getElementById('daysHalloween');
const hoursHalloweenObject = document.getElementById('hoursHalloween');
const minutesHalloweenObject = document.getElementById('minutesHalloween');
const secondsHalloweenObject = document.getElementById('secondsHalloween');

const halloweenDay = "31 Oct 2024";

function halloweenCountdown() {
	const newHalloweenDate = new Date(halloweenDay);
	const currentDate = new Date;
	const totalHalloweenSeconds = (newHalloweenDate - currentDate) / 1000;
	
	const daysHalloween = Math.floor(totalHalloweenSeconds / 3600 / 24);
	
	const hoursHalloween = Math.floor(totalHalloweenSeconds / 3600) % 24;

	const minutesHalloween = Math.floor(totalHalloweenSeconds / 60) % 60;

	const secondsHalloween = Math.floor(totalHalloweenSeconds) % 60;

	daysHalloweenObject.innerHTML = daysHalloween;
	hoursHalloweenObject.innerHTML = hoursHalloween;
	minutesHalloweenObject.innerHTML = minutesHalloween;
	secondsHalloweenObject.innerHTML = secondsHalloween;	
}

halloweenCountdown();
setInterval(halloweenCountdown, 1000);