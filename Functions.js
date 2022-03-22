const daysObject = document.getElementById('days');
const hoursObject = document.getElementById('hours');
const minutesObject = document.getElementById('minutes');
const secondsObject = document.getElementById('seconds');

const newYears = "25 Dec 2022";

function countdown() {

	const newYearsDate = new Date(newYears);
	const currentDate = new Date;
	const totalSeconds = (newYearsDate - currentDate) / 1000;
	
	const days = Math.floor(totalSeconds / 3600 / 24);
	
	const hours = Math.floor(totalSeconds / 3600) % 24;

	const minutes = Math.floor(totalSeconds / 60) % 60;
		
	const seconds = Math.floor(totalSeconds) % 60;
	
	daysObject.innerHTML = days;
	hoursObject.innerHTML = hours;
	minutesObject.innerHTML = minutes;
	secondsObject.innerHTML = seconds;	
}

countdown();

setInterval(countdown, 1000);