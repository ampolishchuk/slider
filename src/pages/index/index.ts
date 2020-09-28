import Slider from "../../components/slider/Slider";

require("./index.sass");

const html = require("./index.pug")();
const mainContainer = document.createElement("main");
mainContainer.classList.add("index");

mainContainer.innerHTML = html;

document.body.appendChild(mainContainer);

const container1 = document.querySelector(".index-container_1");
const container2 = document.querySelector(".index-container_2");
const container3 = document.querySelector(".index-container_3");

const slider1 = new Slider(container1);

const slider2 = new Slider(container2, {
  scale: true,
  points: [0, 100],
  values: [50, 75],
});

const slider3 = new Slider(container3, {
  scale: true,
  range: true,
  points: [20, 80],
  values: 25,
});

slider1.onChange((values: any[]) => {
  console.log(values);
});
slider2.onChange((values: any[]) => {
  console.log(values);
});

slider3.onChange((values: any[]) => {
  console.log(values);
});
