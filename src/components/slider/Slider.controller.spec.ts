import SliderController from "./Slider.controller";
import SliderModelInterface from "./Slider.model.interface";

describe("Controller creating", () => {
  const controller: SliderController = new SliderController();
  const node: HTMLElement = controller.getNode();

  describe("Then setting postition by slideTo()", () => {
    controller.slideTo(20);

    it("Model setting positon value to state", () => {
      const state: SliderModelInterface = controller.getState();

      expect(state.position).toBe(20);
    });
    it("View setting inline-styles to button element", () => {
      const styleLeft: string = node.querySelector("button").style.left;

      expect(styleLeft).toBe("20px");
    });
  });
});
