const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tool = document.querySelector('.has-tooltip');
tool.insertAdjacentHTML('afterEnd', '<div class="tooltip">Текст подсказки</div>');

hasTooltip.forEach(el => el.addEventListener('click', (e) => {
	const tooltip = document.querySelector('.tooltip');
	if (tooltip.innerText === el.title) {
		console.log('test')
		tooltip.classList.toggle('tooltip_active');
	} else {
		tooltip.innerText = el.title;
		tooltip.classList.add('tooltip_active');
		console.log('test2')
	}
  const {left, top} = el.getBoundingClientRect('');
  tooltip.style.left = left +'px';
  tooltip.style.top = (top-30) +'px';

  e.preventDefault();
}))