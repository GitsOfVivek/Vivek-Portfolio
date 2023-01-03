const toggle = document.getElementById('toggle');
const theme = document.querySelector('body');
const icon = document.getElementById('icon');
const logoImg = document.getElementById('logo-img');
let isActive = false;
const hamburger = document.querySelector('.nav__hamburger');

const bar = document.querySelector('.checkbtn i');
bar.addEventListener('click', function () {
	if (bar.classList.contains('fas', 'fa-bars')) {
		bar.classList.add('fa-solid', 'fa-xmark');
		bar.classList.remove('fas', 'fa-bars');
		isActive = true;
	} else {
		bar.classList.remove('fa-solid', 'fa-xmark');
		bar.classList.add('fas', 'fa-bars');
		isActive = false;
	}
	if (!isActive) {
		hamburger.style.opacity = '0';
	} else {
		hamburger.style.opacity = '0.95';
	}
});

toggle.onclick = function () {
	toggle.classList.toggle('active');
	icon.classList.toggle('fa-moon');
	logoImg.classList.toggle('invert-img');

	if (theme.classList.contains('dark-mode')) {
		theme.classList.add('light-mode');
		theme.classList.remove('dark-mode');
	} else {
		theme.classList.remove('light-mode');
		theme.classList.add('dark-mode');
	}
};
