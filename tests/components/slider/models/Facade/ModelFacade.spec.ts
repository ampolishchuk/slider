// import Model from "../../../../../src/components/slider/models/Model";
// import ModelFacade from "../../../../../src/components/slider/models/Facade/ModelFacade";
// import Observer from "../../../../../src/components/slider/Observer";
// import ModelFacadeIntarface from "../../../../../src/components/slider/interfaces/ModelFacad.interface";
// import { ModelInteface } from "../../../../../src/components/slider/interfaces/Model.interface";
// import ObserverInterface from "../../../../../src/components/slider/interfaces/Observer.interface";
//
// describe("Testing ModelFacade.ts:", () => {
//   let observer: ObserverInterface,
//     model: ModelInteface,
//     modelFacade: ModelFacadeIntarface;
//
//   beforeAll(() => {
//     observer = new Observer();
//     model = new Model();
//
//     spyOn(observer, "notify").and.stub();
//     spyOn(model, "setState").and.stub();
//     spyOn(model, "checkValuesLength").and.returnValue([100]);
//     spyOn(model, "verifyValue").and.stub();
//
//     modelFacade = new ModelFacade(observer, model);
//   });
//
//   it("Should set position to model and notify subscribers by observer;", () => {
//     modelFacade.setPosition(100, 1);
//
//     expect(model.setState).toHaveBeenCalled();
//     expect(observer.notify).toHaveBeenCalled();
//   });
//
//   it("Should set value to model and notify subscribers by observer;", () => {
//     modelFacade.setValue(100, 1);
//
//     expect(model.setState).toHaveBeenCalled();
//     expect(observer.notify).toHaveBeenCalled();
//   });
//
//   it("Should check values array length, verify values in array and return this array;", () => {
//     modelFacade.prepareValues([100]);
//
//     expect(model.checkValuesLength).toHaveBeenCalled();
//     expect(model.verifyValue).toHaveBeenCalled();
//   });
// });
