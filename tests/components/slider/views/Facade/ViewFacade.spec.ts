import ViewFactory from "../../../../../src/components/slider/views/factory/ViewFactory";
import ViewFacade from "../../../../../src/components/slider/views/facade/ViewFacade";
import ViewFacadeInterface from "../../../../../src/components/slider/views/facade/interface/ViewFacade.interface";

describe("Testing ViewFacade.ts", () => {
  const factory = new ViewFactory(true, true);
  const slider = factory.createSlider();
  const line = factory.createLine();
  const rangeLine = factory.createRangeLine();
  const buttons = factory.createButtons();
  const scale = factory.createScale();
  let viewFacade: ViewFacadeInterface;

  beforeEach(() => {
    spyOn(slider, "render").and.returnValue(document.createElement("div"));
    spyOn(line, "render").and.returnValue(document.createElement("div"));
    spyOn(rangeLine, "render").and.returnValue(document.createElement("div"));
    spyOn(rangeLine, "setPositionLeft").and.stub();
    spyOn(rangeLine, "setPositionRight").and.stub();
    spyOn(buttons, "render").and.returnValue([document.createElement("div")]);
    spyOn(buttons, "setPositions").and.stub();
    spyOn(scale, "render").and.returnValue(document.createElement("div"));
    spyOn(scale, "hide").and.stub();
    spyOn(scale, "show").and.stub();

    viewFacade = new ViewFacade(slider, line, rangeLine, buttons, scale);
  });

  it("Should return HTMLElement", () => {
    const element = viewFacade.render();

    expect(element instanceof HTMLElement).toBeTrue();
  });

  it("Should set positions", () => {
    viewFacade.setPositions([100]);

    expect(buttons.setPositions).toHaveBeenCalled();
  });

  it("Should show scale", () => {
    viewFacade.showScale();

    expect(scale.show).toHaveBeenCalled();
  });

  it("Should hide scale", () => {
    viewFacade.hideScale();

    expect(scale.hide).toHaveBeenCalled();
  });

  it("Should add listeners", () => {
    viewFacade.onAction(() => {});

    expect((viewFacade as any).listeners.length).toEqual(1);
  });
});
