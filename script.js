let color = "black";
let click = false;

function createGrid(size) {
	let board = document.querySelector(".container");
	let squares = board.querySelectorAll("div");
	squares.forEach((div) => div.remove());
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let amount = size * size;
	for (let i = 0; i < amount; i++) {
		let square = document.createElement("div");
		square.style.backgroundColor = "white";
		square.addEventListener("mousemove", colorSquare);
		board.insertAdjacentElement("beforeend", square);
	}
}

createGrid(16);

function changeSize(input) {
	if (input >= 2 && input <= 100) {
		createGrid(input);
	} else {
		console.log("ERROR");
	}
}

function colorSquare() {
	if (click) {
		if (color === "rainbow") {
			this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
		} else {
			this.style.backgroundColor = color;
		}
	}
}

function changeColor(choice) {
	color = choice;
}

function reset() {
	let board = document.querySelector(".container");
	let squares = board.querySelectorAll("div");
	squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", (e) => {
	if (e.target.tagName != "BUTTON") {
		click = !click;
	}
});
