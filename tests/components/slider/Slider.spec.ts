import Slider from "../../../src/components/slider/Slider";

describe("Testing Slider:", () => {
  const slider = new Slider();

  it("Returns node element;", () => {
    const element = slider.render();

    expect(element.ELEMENT_NODE).toBe(Node.ELEMENT_NODE);
  });
});
