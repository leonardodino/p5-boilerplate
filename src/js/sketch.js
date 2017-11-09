let canvas
let logo
const logoWidth = 250
const logoHeight = 114

export function preload(){
	logo = loadImage('assets/p5js.svg')
}

export function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	image(logo, windowWidth/2 - logoWidth/2, windowHeight/2 - logoHeight/2)
}

export function draw(){

}

export function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
	image(logo, windowWidth/2 - logoWidth/2, windowHeight/2 - logoHeight/2)
}

export function keyPressed(){

}
