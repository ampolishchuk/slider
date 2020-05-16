import SliderView from "./Slider.view";

describe("View creating", () => {
  const view = new SliderView();

  describe("createNode(): must create view.node and view.button", () => {
    view.createNode();

    it("view.node created", () => {
      expect(view.node).not.toBe(undefined);
    });

    it("view.button created", () => {
      expect(view.button).not.toBe(undefined);
    });
  });

  describe("changeButtonPosition(): must set view.button inline-styles", () => {
    view.changeButtonPosition(20);

    it("view.button inline-styles set", () => {
      expect(view.button.style.left).toBe("20px");
    });
  });
});
