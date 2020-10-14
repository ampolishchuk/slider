import ViewFactory from "../../../../../src/components/slider/views/factory/ViewFactory";
import View from "../../../../../src/components/slider/views/View";
import ClickableView from "../../../../../src/components/slider/views/ClickableView";
import DraggableCompositeView from "../../../../../src/components/slider/views/composites/DraggableCompositeView";

describe("Testing ViewFactory.ts", () => {
  const factory = new ViewFactory(true, true);

  it("Should create SliderView of an instance of View", () => {
    const sliderView = factory.createSlider();

    expect(sliderView instanceof View).toBeTrue();
  });

  it("Should create LineView of an instance of ClickableView", () => {
    const sliderView = factory.createLine();

    expect(sliderView instanceof ClickableView).toBeTrue();
  });

  it("Should create ButtonsView of an instance of DraggableCompositeView", () => {
    const sliderView = factory.createButtons();

    expect(sliderView instanceof DraggableCompositeView).toBeTrue();
  });

  it("Should create ScaleView of an instance of ClickableView", () => {
    const sliderView = factory.createScale();

    expect(sliderView instanceof ClickableView).toBeTrue();
  });
});
