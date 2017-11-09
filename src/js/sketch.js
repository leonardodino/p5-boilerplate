export default p => {
	let canvas
	let logo
	const logoWidth = 250
	const logoHeight = 114

	p.preload = () => {
		logo = p.loadImage('assets/p5js.svg')
	}

	p.setup = () => {
		canvas = p.createCanvas(p.windowWidth, p.windowHeight)
		p.image(logo, p.windowWidth/2 - logoWidth/2, p.windowHeight/2 - logoHeight/2)
	}

	p.draw = () => {

	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight)
		p.image(logo, p.windowWidth/2 - logoWidth/2, p.windowHeight/2 - logoHeight/2)
	}

	p.keyPressed = () => {

	}
}
