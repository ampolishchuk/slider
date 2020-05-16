import Slider from "../../components/slider/Slider";

const slider: Slider = new Slider();

document.body.appendChild(slider.getNode());

slider.slideTo(20);
slider.slideTo(40);

console.log(slider);
