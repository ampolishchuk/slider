import LineView from "../../../../src/components/slider/views/Line.view";

describe("Testing LineView:", () => {
  const observer = jasmine.createSpyObj("observer", ["subscribe", "notify"]);
  const view = new LineView({ observer });

  it("Returns node element", () => {
    const element = view.render();

    expect(element.ELEMENT_NODE).toEqual(Node.ELEMENT_NODE);
  });
});
