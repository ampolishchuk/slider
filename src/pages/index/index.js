import { Slider } from "../../components/slider/slider";

const slider = new Slider();

document.body.appendChild(slider.render());

slider.slideTo(20);
slider.slideTo(40);
