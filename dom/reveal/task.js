const banner = document.querySelectorAll('.reveal');
const bannerArray = Array.from(banner);


window.addEventListener('scroll', function() {
	bannerArray.forEach(el => {
		const {top, bottom} = el.getBoundingClientRect()
		el.classList.add('reveal_active');
		console.log('test3')

		if (bottom < 0) {
			el.classList.remove('reveal_active'); 	
			console.log('test1')
		}
		if (top > window.innerHeight) {
			el.classList.remove('reveal_active');
			console.log('test2')
		}
	})
})
