import Slider from "../../components/slider/Slider";

require("./index.sass");

const html = require("./index.pug")();
const mainContainer = document.createElement("main");
mainContainer.classList.add("index");

mainContainer.innerHTML = html;

document.body.appendChild(mainContainer);

const contaner1 = document.querySelector(".index-container_1");
const contaner2 = document.querySelector(".index-container_2");
const contaner3 = document.querySelector(".index-container_3");

const slider1 = new Slider();
const slider2 = new Slider({
  style: "extended",
  value: 100,
});
const slider3 = new Slider({
  style: "extended",
  orientation: "horizontal",
});

contaner1.appendChild(slider1.render());
contaner2.appendChild(slider2.render());
contaner3.appendChild(slider3.render());
