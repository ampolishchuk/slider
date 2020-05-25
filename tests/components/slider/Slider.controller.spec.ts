import Observer from "../../../src/components/slider/services/Observer";
import SliderController from "../../../src/components/slider/Slider.controller";
import SliderModel from "../../../src/components/slider/Slider.model";
import SliderView from "../../../src/components/slider/Slider.view";
import Scale from "../../../src/components/slider/scale/Scale";
import Button from "../../../src/components/slider/button/Button";

describe("Tesing SliderController:", () => {
  const observer = new Observer();
  const model = new SliderModel({ observer });
  const view = new SliderView();
  const scale = new Scale({ model });
  const button = new Button({ model, observer });

  let controller: SliderController;

  beforeAll(() => {
    spyOnAllFunctions(observer);

    spyOn(model, "getState").and.returnValue(<any>{ className: "test" });
    spyOn(model, "setPosition").and.stub();

    spyOn(view, "render").and.returnValue(document.createElement("section"));
    spyOn(view, "addClass").and.stub();

    spyOn(scale, "render").and.returnValue(document.createElement("div"));
    spyOn(button, "render").and.returnValue(document.createElement("button"));

    controller = new SliderController({
      observer,
      model,
      view,
      scale,
      button,
    });
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
