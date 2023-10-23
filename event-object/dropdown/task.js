const dropdownLink = document.querySelectorAll('.dropdown__link');
const dropdownLinkArray = Array.from(dropdownLink);
const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');

dropdownValue.onclick = function() {
	dropdownList.classList.toggle('dropdown__list_active')
		console.log('test1')
	}

dropdownLinkArray.forEach(link => link.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownValue.textContent = this.textContent;
    dropdownList.classList.remove('dropdown__list_active');
}))