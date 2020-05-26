import ScaleView from "../../../../src/components/slider/scale/Scale.view";

describe("Testing ScaleView:", () => {
  const view = new ScaleView();

  it("Returns node element on render;", () => {
    const element = view.render();

    expect(element.nodeType).toEqual(Node.ELEMENT_NODE);
  });
});
