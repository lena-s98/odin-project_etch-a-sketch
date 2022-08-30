const val = prompt("Enter a number up to 100 to create a grid");
const gridContainer = document.querySelector(".grid-container");
const divSelector = document.querySelectorAll(".grid-container > div");

function createGrid(val) {
	for (let i = 0; i < val * val; i++) {
		const div = document.createElement("div");
		div.classList.add("cell");
		div.addEventListener("mouseover", () => {
			div.classList.add("touched");
		});
		gridContainer.appendChild(div);
	}
}
gridContainer.setAttribute(
	"style",
	`grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`
);

createGrid(val);
