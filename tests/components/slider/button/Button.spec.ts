import ButtonView from "../../../../src/components/slider/button/Button.view";

describe("Testing ButtonView:", () => {
  const view = new ButtonView();

  it("Returns node element on render;", () => {
    const element = view.render();

    expect(element.nodeType).toEqual(Node.ELEMENT_NODE);
  });

  it("Sets button position style;", () => {
    const element = view.render();

    view.setPosition(200);

    expect(element.style.left).toBe(200 + "px");
  });
});
