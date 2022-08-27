const sketchContainer = document.querySelector(".sketch-container");
sketchContainer.style.cssText +=
	"display: grid;grid-template-columns: repeat(16, 1fr);grid-template-rows: repeat(16, 1fr);";

function createDiv() {
	for (let i = 0; i < 16; i++) {
		var div = document.createElement("div");
		sketchContainer.appendChild(div);
	}
}
createDiv();
