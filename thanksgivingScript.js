const daysThanksgivingObject = document.getElementById('daysThanksgiving');
const hoursThanksgivingObject = document.getElementById('hoursThanksgiving');
const minutesThanksgivingObject = document.getElementById('minutesThanksgiving');
const secondsThanksgivingObject = document.getElementById('secondsThanksgiving');

const thanksgivingDay = "28 Nov 2024";

function thanksgivingCountdown() {
	const newThanksgivingDate = new Date(thanksgivingDay);
	const currentDate = new Date;
	const totalThanksgivingSeconds = (newThanksgivingDate - currentDate) / 1000;
	
	const daysThanksgiving = Math.floor(totalThanksgivingSeconds / 3600 / 24);
	
	const hoursThanksgiving = Math.floor(totalThanksgivingSeconds / 3600) % 24;

	const minutesThanksgiving = Math.floor(totalThanksgivingSeconds / 60) % 60;

	const secondsThanksgiving = Math.floor(totalThanksgivingSeconds) % 60;

	daysThanksgivingObject.innerHTML = daysThanksgiving;
	hoursThanksgivingObject.innerHTML = hoursThanksgiving;
	minutesThanksgivingObject.innerHTML = minutesThanksgiving;
	secondsThanksgivingObject.innerHTML = secondsThanksgiving;	
}

thanksgivingCountdown();
setInterval(thanksgivingCountdown, 1000);