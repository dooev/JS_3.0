class options {
	constructor(height, width, margin, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.margin = margin;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		
	}
	styleDiv () {
			let a = prompt('Введите любой текст'),
				 newDiv = document.createElement('div');
			newDiv;
			console.log("newDiv", newDiv);
			newDiv.innerHTML = a;
			console.log("newDiv+a", newDiv);
			newDiv.style.cssText = `height: ${height}px; width: ${width}px; margin: ${margin}; background: ${bg}; font-size: ${fontSize}px; text-align: ${textAlign};`;
			console.log("this", this);
			console.log("newDiv+this", newDiv);

			document.body.appendChild(newDiv);
	}
}

let tealDiv = new options(100, '100%', '20px 150px', 'teal', 20, 'center');

tealDiv.styleDiv();