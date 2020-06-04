import Slider from "../../components/slider/Slider";

require("./index.sass");

const pugTemplate = require("./index.pug");
const html = pugTemplate();
const mainContainer = document.createElement("main");
mainContainer.classList.add("index");

mainContainer.innerHTML = html;

document.body.appendChild(mainContainer);

const slider1 = new Slider({ position: 100 });
const slider2 = new Slider();
const slider3 = new Slider();

const contaner1 = document.querySelector(".index-container_1");
const contaner2 = document.querySelector(".index-container_2");
const contaner3 = document.querySelector(".index-container_3");

contaner1.appendChild(slider1.render());
contaner2.appendChild(slider2.render());
contaner3.appendChild(slider3.render());

slider3.slideTo(199);
