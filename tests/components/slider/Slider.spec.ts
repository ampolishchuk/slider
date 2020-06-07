import Slider from "../../../src/components/slider/Slider";

describe("Testing Slider:", () => {
  const slider = new Slider();

  beforeAll(() => {
    spyOn(slider["presenters"].slider, "slideTo").and.stub();
  });

  it("Returns node element on render();", () => {
    const element = slider.render();

    expect(element.ELEMENT_NODE).toBe(Node.ELEMENT_NODE);
  });

  it("Calls SliderPresenter for setting value to model on sliderTo();", () => {
    slider.slideTo(100);

    expect(slider["presenters"].slider.slideTo).toHaveBeenCalled();
  });
});
