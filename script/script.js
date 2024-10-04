window.onload = function () {
	adjustCardVisibility()
}

window.addEventListener("resize", adjustCardVisibility)

function adjustCardVisibility() {
	var cards = document.querySelectorAll("#card-container .col-lg-1-5")
	var showMoreBtn = document.getElementById("showMoreBtn")

	if (window.innerWidth <= 991) {
		// Mobile breakpoint
		for (var i = 0; i < 16; i++) {
			cards[i].style.display = "block"
		}
		for (var i = 16; i < cards.length; i++) {
			cards[i].style.display = "none"
		}
		showMoreBtn.style.display = "block"
	} else {
		// Desktop
		for (var i = 0; i < cards.length; i++) {
			cards[i].style.display = "block"
		}
		showMoreBtn.style.display = "none"
	}
}

document
	.getElementById("showMoreBtn")
	.addEventListener("click", function (event) {
		event.preventDefault()

		var cards = document.querySelectorAll("#card-container .col-lg-1-5")
		for (var i = 16; i < cards.length; i++) {
			cards[i].style.display = "block"
		}

		this.style.display = "none"
	})
