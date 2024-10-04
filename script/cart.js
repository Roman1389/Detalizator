const showMoreBtn = document.getElementById("MoreBtn")
const mobileCards = document.querySelectorAll(".mobile-card")

showMoreBtn.addEventListener("click", () => {
	mobileCards.forEach((card) => {
		card.classList.remove("d-none")
	})
	showMoreBtn.classList.add("d-none")
})

window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		// На больших экранах показываем карточки и скрываем кнопку
		mobileCards.forEach((card) => {
			card.classList.remove("d-none")
		})
		showMoreBtn.classList.add("d-none")
	} else {
		// На мобильных устройствах скрываем карточки и показываем кнопку
		mobileCards.forEach((card) => {
			card.classList.add("d-none")
		})
		showMoreBtn.classList.remove("d-none")
	}
})

// Изначально на больших экранах показываем карточки, на мобильных - скрываем
if (window.innerWidth >= 768) {
	mobileCards.forEach((card) => {
		card.classList.remove("d-none")
	})
	showMoreBtn.classList.add("d-none")
} else {
	mobileCards.forEach((card) => {
		card.classList.add("d-none")
	})
}
