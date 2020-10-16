require("../../components/slider/jqSlider");
require("./index.sass");

const html = require("./index.pug")();
const mainContainer = document.createElement("main");
mainContainer.classList.add("index");
mainContainer.innerHTML = html;
document.body.appendChild(mainContainer);

const slider1 = $(".index-container_1").jqSlider();

const slider2 = $(".index-container_2").jqSlider({
  scale: [0, 100],
  showScale: true,
  values: [50, 75],
});

const slider3 = $(".index-container_3").jqSlider({
  range: true,
  scale: [20, 80],
  showScale: true,
  values: 25,
});

slider1.setValues([50]);

slider1.onChange((values: any[]) => {
  console.log(values);
});

slider3.onChange((values: any[]) => {
  console.log(values);
});
