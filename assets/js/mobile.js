document.addEventListener('DOMContentLoaded', (event) => {

	function iniMobile() {
		var menuFrame = document.querySelector('nav[js-main-navigation]');
		var menuButtonParrent = document.querySelector('div[js-mobile-menu]');
		var menuButton = menuButtonParrent.querySelector('div[js-mobile-menu] > i');

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


