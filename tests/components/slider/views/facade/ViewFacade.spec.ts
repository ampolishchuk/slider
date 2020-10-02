import ViewFactory from "../../../../../src/components/slider/views/Factory/ViewFactory";
import Observer from "../../../../../src/components/slider/observer/Observer";
import ViewFacade from "../../../../../src/components/slider/views/Facade/ViewFacade";

import ObserverInterface from "../../../../../src/components/slider/interfaces/Observer.interface";
import ViewFacadeInterface from "../../../../../src/components/slider/interfaces/ViewFacade.interface";
import ViewInterface from "../../../../../src/components/slider/interfaces/View.interface";
import DraggableViewInterface from "../../../../../src/components/slider/interfaces/DraggableView.interface";

describe("Testing ViewFacade.ts", () => {
  const factory = new ViewFactory();
  const element = document.createElement("div");
  element.classList.add("test");
  let observer: ObserverInterface;
  let button: DraggableViewInterface;
  let scale: ViewInterface;
  let viewFacade: ViewFacadeInterface;

  beforeEach(() => {
    observer = new Observer();

    button = factory.createButtons()[0];
    scale = factory.createScale();

    spyOnAllFunctions(observer);
    spyOn(button, "setPosition").and.stub();
    spyOn(button, "addEventListener").and.stub();
    spyOnAllFunctions(scale);

    viewFacade = new ViewFacade(observer, element, [button], scale);
  });

  it("Should return HTMLElement", () => {
    const element = viewFacade.render();

    expect(element instanceof HTMLElement).toBeTrue();
  });

  it("Should call button.setPositions on setPositions", () => {
    viewFacade.setPositions([100]);

    expect(button.setPosition).toHaveBeenCalled();
  });

  it("Should call scale.show on showScale", () => {
    viewFacade.showScale();

    expect(scale.show).toHaveBeenCalled();
  });

  it("Should call scale.hide on hideScale", () => {
    viewFacade.hideScale();

    expect(scale.hide).toHaveBeenCalled();
  });
});
