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
const slider2 = new Slider();
const slider3 = new Slider();

slider1.deploy(contaner1);

slider2.deploy(contaner2, {
  scale: true,
  points: [0, 100],
  values: [50, 75],
});

slider3.deploy(contaner3, {
  scale: true,
  range: true,
  points: [20, 80],
  values: [25, 75],
});

// slider3.deploy(contaner3, {
//   scale: true,
//   range: true,
//   points: [-100, 500],
//   values: [-100, 500],
//   // points: ["hello", 123, test],
//   // value: [test],
// });


slider1.onChange((values: any[]) => {
  console.log(values);
});
slider2.onChange((values: any[]) => {
  console.log(values);
});

slider3.onChange((values: any[]) => {
  console.log(values);
});
