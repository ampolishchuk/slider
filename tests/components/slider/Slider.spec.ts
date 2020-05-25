import Slider from "../../../src/components/slider/Slider";

describe("Testing Slider:", () => {
  const slider = new Slider();

  beforeAll(() => {
    spyOn(slider["controller"], "render").and.returnValue(
      document.createElement("div")
    );
    spyOn(slider["controller"], "setPosition").and.stub();
    spyOn(slider["controller"], "addClass").and.stub();
  });

  it("Return node element on render", () => {
    const element = slider.render();

    expect(element.nodeType).toBe(Node.ELEMENT_NODE);
  });

  it("Sets position of button;", () => {
    slider.slideTo(100);

    expect(slider["controller"].setPosition).toHaveBeenCalledTimes(1);
  });

  it("Adds class name to node element;", () => {
    slider.addClass("test");

    expect(slider["controller"].addClass).toHaveBeenCalledTimes(1);
  });
});
