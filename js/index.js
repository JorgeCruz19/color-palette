const btnGenerateColor = document.getElementById('btn-generate'),
	parentEl = document.querySelector('.generator-colors'),
	arrayHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const generateColorHex = () => {
	let randomHex = ''
	for (let i = 0; i < 6; i++) {
		let randomNumber = arrayHex[getRandomNumbers()]
		randomHex += randomNumber
	}
	const template = `
    <div class="generator-color">
      <div class="generator-color-background" style="background-color:#${randomHex};"></div>
      <div class="generator-color-content">
        <p>#${randomHex}</p>
      </div>
    </div>`
	parentEl.innerHTML += template
}
const getHexColorRandom = () => {
	for (let i = 1; i <= 5; i++) {
		generateColorHex()
	}
}
const updatedParentEl = () => {
	parentEl.innerHTML = ''
	getHexColorRandom()
}
const getRandomNumbers = () => {
	return Math.floor(Math.random() * arrayHex.length)
}
const spaceKeyPress = (e) => {
	e.preventDefault()
	if (e.keyCode == 32 || e.code == 'Space') {
		updatedParentEl()
	}
}

getHexColorRandom()
btnGenerateColor.addEventListener('click', updatedParentEl)
document.addEventListener('keypress', spaceKeyPress)
