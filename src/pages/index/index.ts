import Slider from "../../components/slider/Slider";

require("./index.sass");

const pugTemplate = require("./index.pug");
const html = pugTemplate();
const mainContainer = document.createElement("main");
mainContainer.classList.add("index");

mainContainer.innerHTML = html;

document.body.appendChild(mainContainer);

const slider1: Slider = new Slider();
const slider2: Slider = new Slider();
const slider3: Slider = new Slider();

const slider1Contaner = document.querySelector(".slider-1");
const slider2Contaner = document.querySelector(".slider-2");
const slider3Contaner = document.querySelector(".slider-3");

slider1Contaner.appendChild(slider1.render());
slider2Contaner.appendChild(slider2.render());
slider3Contaner.appendChild(slider3.render());
slider3Contaner.appendChild(slider3.render());
