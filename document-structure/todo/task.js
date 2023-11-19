const tasksList = document.getElementById('tasks__list');
const btn = document.getElementById('tasks__add');
const task = document.querySelector('.task');

btn.addEventListener('click', (e) => {
	const taskInpit = document.getElementById('task__input');
	if (taskInpit.value.trim() == '') {
		taskInpit.value = '';
		return;
  }
	tasksList.insertAdjacentHTML("beforeend", 
	`<div class="task">
    <div class="task__title">
		 ${taskInpit.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
   </div>`)
	taskInpit.value = '';
	e.preventDefault();
})

tasksList.addEventListener('click', (e) => {
	const taskRemove = document.querySelector('.task__remove')
	const target = e.target;
	const parent = taskRemove.closest('.task');
	if (target === taskRemove) {
		parent.remove();
	}
})