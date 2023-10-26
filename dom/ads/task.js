const rotatorCase = document.querySelectorAll('.rotator__case');
const rotatorArray = Array.from(rotatorCase);

const infinityRotator = setInterval(() => {
    let i = rotatorArray.findIndex(el => el.classList.contains('rotator__case_active'));
    rotatorArray[i].classList.remove('rotator__case_active');
    i++;
    if (i > rotatorArray.length - 1) {
			i = 0;
    }
    rotatorArray[i].classList.add('rotator__case_active');
}, 1000);