const gridContainer = document.querySelector(".grid-container");
const divSelector = document.querySelectorAll(".grid-container > div");

function createGrid(num) {
	for (let i = 0; i < num * num; i++) {
		const div = document.createElement("div");
		div.classList.add("cell");
		div.addEventListener("mouseover", () => {
			div.classList.add("touched");
		});
		gridContainer.appendChild(div);
	}
}

const num = prompt("Enter a number up to 100 to create a grid of that size");
createGrid(num);
