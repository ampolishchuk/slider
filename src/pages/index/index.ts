import Slider from "../../components/slider/Slider";

const slider: Slider = new Slider();

document.body.appendChild(slider.render());

slider.slideTo(20);
slider.slideTo(40);
