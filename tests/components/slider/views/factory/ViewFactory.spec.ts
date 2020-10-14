import ViewFactory from "../../../../../src/components/slider/views/factory/ViewFactory";
import View from "../../../../../src/components/slider/views/View";
import ClickableView from "../../../../../src/components/slider/views/ClickableView";
import DraggableCompositeView from "../../../../../src/components/slider/views/composites/DraggableCompositeView";

describe("Testing ViewFactory.ts", () => {
  const factory = new ViewFactory(true, true);

  it("Should create SliderView of an instance of View", () => {
    const slider = factory.createSlider();

    expect(slider instanceof View).toBeTrue();
  });

  it("Should create LineView of an instance of ClickableView", () => {
    const line = factory.createLine();

    expect(line instanceof ClickableView).toBeTrue();
  });

  it("Should create ButtonsView of an instance of DraggableCompositeView", () => {
    const buttons = factory.createButtons();

    expect(buttons instanceof DraggableCompositeView).toBeTrue();
  });

  it("Should create ScaleView of an instance of ClickableView", () => {
    const scale = factory.createScale();

    expect(scale instanceof ClickableView).toBeTrue();
  });

  it("Should create RangeLineView of an instance of ClickableView", () => {
    const range = factory.createRangeLine();

    expect(range instanceof ClickableView).toBeTrue();
  });
});
