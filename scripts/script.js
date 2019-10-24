document.addEventListener('DOMContentLoaded', function() {

	const navMenuBtn = document.getElementById("nav-menu");
	const navMenuItems = document.querySelector(".navigation-menu-items");
	const navMenuCloseBtn = document.querySelector(".nav-menu-close-btn");

	const sectionButtons = document.querySelectorAll(".menu-item");

	const burgerMenuBtn = document.querySelector(".burger-menu-button");
	const burgerMenuItems = document.querySelector(".burger-menu-items");
	const burgerMenuCloseBtn = document.querySelector(".burger-menu-close-btn");

	const mainPagePicture = document.getElementById('main-page-picture');
	

	function menuAction() {

		burgerMenuBtn.addEventListener("click", function() {
			
			burgerMenuItems.classList.add("active");

			mainPagePicture.style.display = 'none';
		});

		burgerMenuCloseBtn.addEventListener("click", function() {
			
			burgerMenuItems.classList.remove("active");

			checkForTabletSize(screenSizeTablet);
			screenSizeTablet.addListener(checkForTabletSize);
		});

		navMenuBtn.addEventListener("click", function() {
			
			navMenuItems.classList.add("active");
		});

		navMenuCloseBtn.addEventListener("click", function() {
			
			navMenuItems.classList.remove("active");
		});

		for (var i = 0; i < sectionButtons.length; i++) {

			sectionButtons[i].addEventListener("click", function(event) {
				
				event.preventDefault();
				navMenuItems.classList.remove("active");
				burgerMenuItems.classList.remove("active");

				checkForTabletSize(screenSizeTablet);
				screenSizeTablet.addListener(checkForTabletSize);

				var section = document.querySelector(this.getAttribute("href"));

				window.scroll({
					top: section.offsetTop, 
					left: 0, 
					behavior: 'smooth'
				});
			});
		}
	}

	menuAction();


	var screenSize = window.matchMedia("(min-width: 768px)")

	function burgerMenu(screenSize) {
		if (screenSize.matches) {
  			burgerMenuItems.classList.remove("active");
		} else {
			navMenuItems.classList.remove("active");
		}
	}

	burgerMenu(screenSize);
	screenSize.addListener(burgerMenu);


	var screenSizeTablet = window.matchMedia("(min-width: 601px)")

	function checkForTabletSize(screenSizeTablet) {
		if (screenSizeTablet.matches) {
  			mainPagePicture.style.display = 'block';
  			burgerMenuItems.classList.remove("active");
		} else {
			mainPagePicture.style.display = 'none';
		}
	}

});

