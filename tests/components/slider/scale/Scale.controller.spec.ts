import ScaleController from "../../../../src/components/slider/scale/Scale.controller";

describe("Testing ScaleController:", () => {
  const model = jasmine.createSpyObj("model", {
    setPosition: "",
  });
  const view = jasmine.createSpyObj("view", {
    render: document.createElement("div"),
  });

  const controller = new ScaleController({ model, view });

  it("Returns node element on render;", () => {
    const element = controller.render();

    expect(element.nodeType).toEqual(Node.ELEMENT_NODE);
  });

  it("Updates model on mouse click event;", () => {
    const event = new MouseEvent("click");
    const element = controller.render();

    element.dispatchEvent(event);

    expect(model.setPosition).toHaveBeenCalledTimes(1);
  });
});
