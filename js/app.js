const icon = document.getElementById('theme-icon');
const theme = document.querySelector('body');
icon.addEventListener('click', function () {
	icon.classList.toggle('fa-moon');
	if (theme.classList.contains('dark-mode')) {
		theme.classList.add('light-mode');
		theme.classList.remove('dark-mode');
	} else {
		theme.classList.remove('light-mode');
		theme.classList.add('dark-mode');
	}
});
