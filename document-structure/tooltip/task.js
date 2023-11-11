const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(el => el.insertAdjacentHTML('afterEnd', '<div class="tooltip">Текст подсказки</div>'));


hasTooltip.forEach(el => el.addEventListener('click', (e) => {
		
		const tooltip = document.querySelector('.tooltip');
    tooltip.classList.toggle('tooltip_active');
    tooltip.innerText = el.title;
    const {left, top} = el.getBoundingClientRect();
    tooltip.style.left = left +'px';
    tooltip.style.top = (top-30) +'px';

    e.preventDefault();
}))

