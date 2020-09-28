// import Model from "../../../../../src/components/slider/models/Model";
// import RangeModelDecorator from "../../../../../src/components/slider/models/Decorators/RangeModelDecorator";
//
// describe("Testing RangeModelDecorator.ts:", () => {
//   const state = {
//     container: document.createElement("div"),
//     orientation: "horizontal",
//     scale: true,
//     range: true,
//     values: [50],
//     positions: [150],
//     points: [0, 100],
//   };
//
//   const model = new Model(state);
//   const rangeModel = new RangeModelDecorator(model);
//
//   describe("Checking values length must return correct length of values array:", () => {
//     it("Should return array;", () => {
//       const values = [150];
//
//       const newValues = rangeModel.checkValuesLength(values);
//
//       expect(newValues.length).toEqual(2);
//     });
//
//     it("Should return array if set not array value;", () => {
//       const values = 150;
//
//       const newValues = rangeModel.checkValuesLength(values);
//
//       expect(newValues.length).toEqual(2);
//     });
//
//     it("Should return correct array by length if set longer values array;", () => {
//       const values = [150, 200, 300];
//
//       const newValues = rangeModel.checkValuesLength(values);
//
//       expect(newValues.length).toBe(2);
//     });
//
//     it("Should return correct array by length if set shorter values array;", () => {
//       const values = new Array();
//
//       const newValues = rangeModel.checkValuesLength(values);
//
//       expect(newValues.length).toBe(2);
//     });
//   });
// });
