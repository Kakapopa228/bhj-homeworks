const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

window.addEventListener('load', function() {
	try {
		let answer = JSON.parse(localStorage.getItem('auth'));
		userId.innerText = answer;
	} catch(e) {
		signin.classList.add('signin_active');
		return null;
	}
});

signinForm.addEventListener('submit', function(event) {
	event.preventDefault();
	let xhr = new XMLHttpRequest();
	let data = new FormData();

	data.append('login', signinForm.elements.login.value);
	data.append('password', signinForm.elements.password.value);

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	xhr.send(data);

	xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === xhr.DONE && xhr.status === 201) {
			let answer = JSON.parse(xhr.responseText);
			if (answer.success) {
				signin.classList.remove('signin_active');
				welcome.classList.add('welcome_active');
				userId.innerText = answer.user_id;
				localStorage.setItem('auth', answer.user_id);
			} else {
				alert('Неверный логин/пароль');
			}
			signinForm.reset();
		}    
	});    
});


