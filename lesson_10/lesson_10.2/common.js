class options {
	constructor(height, width, margin, bg, fontSize, textAlign) {
		this.height = `height: ${height}px;`;
		this.width = `width: ${width}px;`;
		this.margin = `margin: ${margin};`
		this.bg = `background: ${bg};`;
		this.fontSize = `font-size: ${fontSize}px;`;
		this.textAlign = `text-align: ${textAlign};`;
		
	}
	styleDiv () {
			let a = prompt('Введите любой текст'),
				 newDiv = document.createElement('div');
			newDiv;
			console.log("newDiv", newDiv);
			newDiv.innerHTML = a;
			console.log("newDiv+a", newDiv);
			newDiv.style.cssText = `${this.width} ${this.height} ${this.margin} ${this.bg} ${this.fontSize} ${this.textAlign}`;
			console.log("this", this);
			console.log("newDiv+this", newDiv);

			document.body.appendChild(newDiv);
	}
}

let tealDiv = new options(100, '100%', '20px 150px', 'teal', 20, 'center');

tealDiv.styleDiv();