const clicker = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');
// const clickSpeed = document.getElementById('clicker__speed');
// let lastClickTime = new Date().getTime();

image.onclick = function () {
	clicker.textContent++;
	image.width = 300;
	if (clicker.textContent % 2 === 0) {
		image.width = 200;
	}

	// let currentTime = new Date().getTime();
	// let timeDiff = (currentTime - lastClickTime) / 1000;
	// clickSpeed.textContent = (1 / timeDiff).toFixed(2);
	// lastClickTime = currentTime;
}
