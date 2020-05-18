import SliderView from "../../../src/components/slider/Slider.view";

describe("Slider.view.spec.ts", () => {
  const view = new SliderView();

  describe("Testing creating node and changing position:", () => {
    view.createNode();

    it("view.node created;", () => {
      expect(view.node).not.toBe(undefined);
    });

    it("view.button created;", () => {
      expect(view.button).not.toBe(undefined);
    });

    describe("changeButtonPosition(): must set view.button inline-styles:", () => {
      view.changeButtonPosition(20);

      it("view.button inline-styles set;", () => {
        expect(view.button.style.left).toBe("20px");
      });
    });
  });
});
