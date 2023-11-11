const tasksList = document.getElementById('tasks__list');
const btn = document.getElementById('tasks__add');
const task = document.querySelector('.task');

btn.addEventListener('click', (e) => {
	console.log('test1');
	const taskInpit = document.getElementById('task__input');
	tasksList.insertAdjacentHTML("beforeend", 
	`<div class="task">
    <div class="task__title">
		 ${taskInpit.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
   </div>`)
	 taskInpit.value = '';
})

tasksList.addEventListener('click', (e) => {
	const taskRemove = Array.from(document.querySelectorAll('.task__remove'));
	const target = e.target;
	taskRemove.forEach(el => {
			const parent = el.closest('.task');
			if (target === el) {
					parent.remove();
			}
	})
})