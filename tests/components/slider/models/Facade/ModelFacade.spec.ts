import ModelFacadeInterface from "../../../../../src/components/slider/interfaces/ModelFacade.interface";
import Model from "../../../../../src/components/slider/models/Model";
import Observer from "../../../../../src/components/slider/observer/Observer";
import ModelFacade from "../../../../../src/components/slider/models/Facade/ModelFacade";
import ModelInterface from "../../../../../src/components/slider/interfaces/Model.interface";
import ObserverInterface from "../../../../../src/components/slider/interfaces/Observer.interface";

describe("Testing ModelFacade.ts", () => {
  let model: ModelInterface;
  let observer: ObserverInterface;
  let modelFacade: ModelFacadeInterface;

  beforeEach(() => {
    model = new Model([0, 100]);
    observer = new Observer();

    spyOnAllFunctions(model);
    spyOnAllFunctions(observer);

    modelFacade = new ModelFacade(observer, model);
  });

  it("Should call model.setValues and notify by observer.notify on setValues", () => {
    modelFacade.setValues([100]);

    expect(model.setValues).toHaveBeenCalled();
    expect(observer.notify).toHaveBeenCalled();
  });

  it("Should call model.getPositions on getPositions", () => {
    modelFacade.getPositions();

    expect(model.getPositions).toHaveBeenCalled();
  });

  it("Should call model.setValuesByPositions and notify by observer.notify on setValuesByPositions", () => {
    modelFacade.setValuesByPositions([100]);

    expect(model.setValuesByPositions).toHaveBeenCalled();
    expect(observer.notify).toHaveBeenCalled();
  });
});
