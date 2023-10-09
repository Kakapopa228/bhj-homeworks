function countdown () {
	const timer = document.getElementById('timer');
	timer.textContent--;
}

const timeToStop = timer.textContent * 1000 + 500; //500 добавляю что бы после алерта таймер не уходил на -1

const intervalId = setInterval(countdown, 1000);
setTimeout(() => { clearInterval(intervalId); alert('Вы победили в конкурсе!'); }, timeToStop);
