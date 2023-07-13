changepicture()
function changepicture() {
	let image = document.querySelector(".img-2")

	setInterval(() => {

		if (image.style.opacity == 0) {
			image.style.opacity = 1
		} else {
			image.style.opacity = 0
		}

	}, 3000)
}

