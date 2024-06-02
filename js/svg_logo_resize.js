const svg = document.querySelector('.logo__icon');

function resizeLogo() {
	if (window.innerWidth <= 767) {
		svg.setAttribute('width', '5rem');
		svg.setAttribute('height', '4.7rem');
	} else {
		svg.setAttribute('width', '7.6rem');
		svg.setAttribute('height', '6.8rem');
	}
}

window.addEventListener('load', resizeLogo);
window.addEventListener('resize', resizeLogo);
