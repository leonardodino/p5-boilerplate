export default p5 => {
	let canvas
	let logo
	const logoWidth = 250
	const logoHeight = 114

	p5.preload = () => {
		logo = loadImage('assets/p5js.svg')
	}

	p5.setup = () => {
		canvas = createCanvas(windowWidth, windowHeight)
		image(logo, windowWidth/2 - logoWidth/2, windowHeight/2 - logoHeight/2)
	}

	p5.draw = () => {

	}

	p5.windowResized = () => {
		resizeCanvas(windowWidth, windowHeight)
		image(logo, windowWidth/2 - logoWidth/2, windowHeight/2 - logoHeight/2)
	}

	p5.keyPressed = () => {

	}

	return p5
}
