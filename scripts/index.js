import changeMenu from "./components/menu.js";
import sliderHeader from "./components/header.js";
import navslide from "./components/navMobile.js"

//GET ELEMENTS
const squares = document.querySelector(".carrusel_change")
const carrusel_content = document.querySelector(".carrusel_content")


// CONSTANT = MY OBJECT
const change = new changeMenu(carrusel_content);


//EXECUTE DE ACTION
squares.onclick = () => change.verticalMenu();
sliderHeader()
navslide()