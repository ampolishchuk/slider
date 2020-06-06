import ScaleView from "../../../../src/components/slider/views/Scale.view";

describe("Testing ScaleView:", () => {
  const observer = jasmine.createSpyObj("observer", ["subscribe", "notify"]);
  const view = new ScaleView({ observer });

  it("Returns node element", () => {
    const element = view.render();

    expect(element.ELEMENT_NODE).toEqual(Node.ELEMENT_NODE);
  });
});
