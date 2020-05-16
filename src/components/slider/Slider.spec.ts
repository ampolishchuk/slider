import Slider from "./Slider";
import SliderModelInterface from "./Slider.model.interface";

describe("Controller creating", () => {
  const controller: Slider = new Slider();
  const node: HTMLElement = controller.getNode();

  describe("slideTo(): updating Model and View", () => {
    controller.slideTo(20);

    it("Model setting position to state", () => {
      const state: SliderModelInterface = controller.getState();

      expect(state.position).toBe(20);
    });

    it("View setting inline-styles to button element", () => {
      const styleLeft: string = node.querySelector("button").style.left;

      expect(styleLeft).toBe("20px");
    });
  });

  describe("addHandlers(): add mousedown and mousemouve handlers on button", () => {
    const button = node.querySelector("button");

    it("mousedown handler working correctly", () => {
      const mousedownEvent = new MouseEvent("mousedown", {
        clientX: 200,
      });

      button.dispatchEvent(mousedownEvent);

      const state = controller.getState();

      expect(state.clickPosition).toBe(200);
    });

    it("mousemove handler working", () => {
      const mousemoveEvent = new MouseEvent("mousemove", {
        clientX: 200,
      });
    });
  });
  describe("addObserver(): append callback functions to model observerList array", () => {
    controller.addObserver(() => {});
    it("callback function appends", () => {
      const observersList = controller.getObservers();

      expect(observersList.length).toBeGreaterThan(0);
    });
  });
});
