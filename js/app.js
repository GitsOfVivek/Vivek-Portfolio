// const span = document.getElementById('theme');
// const icon = document.getElementById('theme-icon');
// const theme = document.querySelector('body');
// span.addEventListener('click', function () {
// 	icon.classList.toggle('fa-moon');
// 	if (theme.classList.contains('dark-mode')) {
// 		theme.classList.add('light-mode');
// 		theme.classList.remove('dark-mode');
// 	} else {
// 		theme.classList.remove('light-mode');
// 		theme.classList.add('dark-mode');
// 	}
// });

const toggle = document.getElementById('toggle');
const theme = document.querySelector('body');
const icon = document.getElementById('icon');
const logoImg = document.getElementById('logo-img');
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
