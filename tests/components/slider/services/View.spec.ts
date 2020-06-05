import View from "../../../../src/components/slider/services/View";

describe("Testing SliderView:", () => {
  const observer = jasmine.createSpyObj("observer", ["subscribe", "notify"]);

  class TestView extends View {
    render(): HTMLElement {
      return document.createElement("div");
    }
  }

  const view = new TestView({ observer });

  it("Returns node element", () => {
    const element = view.render();

    expect(element.ELEMENT_NODE).toEqual(Node.ELEMENT_NODE);
  });
});
