const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest;
const requestURL = 'https://students.netoservices.ru/nestjs-backend/poll';

xhr.open('GET', requestURL);
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
  	let answer = JSON.parse(xhr.responseText);
		renderAnswer(answer);
  }    
});

function renderAnswer(answer) {
	title.innerText = answer.data.title;
	let pollAnswers = answer.data.answers;
	pollAnswers.forEach((el) => {
		answers.innerHTML += `
			<button class="poll__answer">
				${el}
			</button>
		`;
	});

	const btn = document.getElementsByTagName('button');
	const btnArray = Array.from(btn);
	btnArray.forEach(el => el.addEventListener('click', () =>{
		alert('Спасибо, ваш голос засчитан!');
	}));
}