import SliderView from "../../../../src/components/slider/views/Slider.view";

describe("Testing SliderView:", () => {
  const observer = jasmine.createSpyObj("observer", ["subscribe", "notify"]);
  const view = new SliderView({ observer });

  it("Returns node element", () => {
    const element = view.render();

    expect(element.ELEMENT_NODE).toEqual(Node.ELEMENT_NODE);
  });
});
