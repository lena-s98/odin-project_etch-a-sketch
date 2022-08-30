const sizeBtn = document.querySelector("#size-btn");
const gridContainer = document.querySelector(".grid-container");
const randomColorBtn = document.querySelector("#random-color");
const resetBtn = document.querySelector("#reset-btn");

function createGrid(val) {
	for (let i = 0; i < val * val; i++) {
		const div = document.createElement("div");
		div.classList.add("cell");
		div.addEventListener("mouseover", () => {
			div.classList.add("touched");
		});
		gridContainer.appendChild(div);
	}
	gridContainer.setAttribute(
		"style",
		`grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`
	);
}

function resetGrid() {
	gridContainer.removeChild(div);
}

function reset() {
	activeCell.forEach((div) => {
		div.classList.remove("touched");
	});
}

sizeBtn.addEventListener("click", () => {
	const val = prompt("Enter number between 1 and 100");
	//resetGrid();
	createGrid(val);
});

resetBtn.addEventListener("click", reset());
