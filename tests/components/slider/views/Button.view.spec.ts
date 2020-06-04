import ButtonView from "../../../../src/components/slider/views/Button.view";

describe("Testing SliderView:", () => {
  const observer = jasmine.createSpyObj("observer", ["subscribe", "notify"]);
  const view = new ButtonView({ observer });

  it("Returns node element", () => {
    const element = view.render();

    expect(element.ELEMENT_NODE).toEqual(Node.ELEMENT_NODE);
  });
});
