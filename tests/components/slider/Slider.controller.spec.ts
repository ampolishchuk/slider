import SliderController from "../../../src/components/slider/Slider.controller";

describe("Tesing SliderController:", () => {
  const observer = jasmine.createSpyObj("observer", ["add"]);
  const model = jasmine.createSpyObj("model", ["setPosition"]);
  const view = jasmine.createSpyObj("view", {
    render: document.createElement("div"),
    addClass: "",
  });
  const scale = jasmine.createSpyObj("scale", {
    render: document.createElement("div"),
  });
  const button = jasmine.createSpyObj("scale", {
    render: document.createElement("button"),
    setPosition: "",
  });

  const controller = new SliderController({
    observer,
    model,
    view,
    scale,
    button,
  });

  it("Returns node element on render;", () => {
    const element = controller.render();

    expect(element.nodeType).toBe(Node.ELEMENT_NODE);
  });

  it("Sets position of button;", () => {
    controller.setPosition(100);

    expect(controller["$"].model.setPosition).toHaveBeenCalledTimes(1);
  });

  it("Sets class name of container;", () => {
    controller.addClass("Test");

    expect(controller["$"].view.addClass).toHaveBeenCalledTimes(1);
  });
});
