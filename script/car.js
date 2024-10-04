const InfoMore = document.getElementById("InfoMore")
const mobileCardsList = document.querySelectorAll(".other-card")

InfoMore.addEventListener("click", () => {
	mobileCardsList.forEach((card) => {
		card.classList.remove("d-none")
	})
	InfoMore.classList.add("d-none") // Скрываем кнопку после клика
})

window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		// На больших экранах показываем карточки и скрываем кнопку
		mobileCardsList.forEach((card) => {
			card.classList.remove("d-none")
		})
		InfoMore.classList.add("d-none") // Скрываем кнопку на больших экранах
	} else {
		// На мобильных устройствах скрываем карточки и показываем кнопку
		mobileCardsList.forEach((card) => {
			card.classList.add("d-none")
		})
		InfoMore.classList.remove("d-none") // Показываем кнопку на мобильных
	}
})

// Изначально проверяем экран при загрузке страницы
if (window.innerWidth >= 768) {
	mobileCardsList.forEach((card) => {
		card.classList.remove("d-none")
	})
	InfoMore.classList.add("d-none") // На больших экранах скрываем кнопку
} else {
	mobileCardsList.forEach((card) => {
		card.classList.add("d-none")
	})
	InfoMore.classList.remove("d-none") // На мобильных показываем кнопку
}
