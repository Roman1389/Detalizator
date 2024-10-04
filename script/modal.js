$(document).ready(function () {
	// Обработчик события для бургер-меню
	$(".burger-menu").click(function (e) {
		e.preventDefault() // Отменяем стандартное поведение ссылки
		$("#exampleModal").modal("show") // Показываем модальное окно
	})
})
