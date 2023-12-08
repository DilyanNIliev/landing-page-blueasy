document.addEventListener('DOMContentLoaded', (event) => {

	function iniMobile() {
		var menuFrame = document.querySelector('nav[js-navigation]');
		var menuButtonParrent = document.querySelector('div[js-mobile-nav]');
		var menuButton = menuButtonParrent.querySelector('div[js-mobile-nav] > i');

		if (!menuFrame || !menuButton) {
			return;
		}

		menuButton.addEventListener('click', () => {
			var classOpen = 'open';
			if (menuFrame.classList.contains(classOpen)) {
				menuFrame.classList.remove(classOpen)
				menuButtonParrent.classList.remove(classOpen)
				return;
			}
			menuFrame.classList.add(classOpen);
			menuButtonParrent.classList.add(classOpen)
		});
	}

	iniMobile();
});


