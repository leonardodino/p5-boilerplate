let canvas
let logo
const logoWidth = 250
const logoHeight = 114

export const preload = () => {
	logo = loadImage('assets/p5js.svg')
}

export const setup = () => {
	canvas = createCanvas(windowWidth, windowHeight)
	image(logo, windowWidth/2 - logoWidth/2, windowHeight/2 - logoHeight/2)
}

export const draw = () => {

}

export const windowResized = () => {
	resizeCanvas(windowWidth, windowHeight)
	image(logo, windowWidth/2 - logoWidth/2, windowHeight/2 - logoHeight/2)
}

export const keyPressed = () => {

}

