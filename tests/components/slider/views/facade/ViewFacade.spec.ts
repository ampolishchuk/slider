import Observer from "../../../../../src/components/slider/observer/Observer";
import ButtonView from "../../../../../src/components/slider/views/ButtonView";
import ScaleView from "../../../../../src/components/slider/views/ScaleView";
import ViewFacade from "../../../../../src/components/slider/views/Facade/ViewFacade";

import ObserverInterface from "../../../../../src/components/slider/interfaces/Observer.interface";
import ViewFacadeInterface from "../../../../../src/components/slider/interfaces/ViewFacade.interface";
import MovableViewInterface from "../../../../../src/components/slider/interfaces/MovableView.interface";
import ViewInterface from "../../../../../src/components/slider/interfaces/View.interface";

describe("Testing ViewFacade.ts", () => {
  const element = document.createElement("div");
  element.classList.add("test");
  let observer: ObserverInterface;
  let button: MovableViewInterface;
  let scale: ViewInterface;
  let viewFacade: ViewFacadeInterface;

  beforeEach(() => {
    observer = new Observer();
    button = new ButtonView();
    scale = new ScaleView();

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
