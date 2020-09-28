// import Model from "../../../../src/components/slider/models/Model";
//
// describe("Testing Model.ts:", () => {
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
//
//   it("Should calc value by position;", () => {
//     const position = 150;
//
//     const value = model.calcValue(position);
//
//     expect(value).toBe(150);
//   });
//
//   it("Should calc position by value;", () => {
//     const value = 50;
//
//     const position = model.calcPosition(value);
//
//     expect(position).toBe(50);
//   });
//
//   describe("Checking values length must return correct length of values array:", () => {
//     it("Should return array;", () => {
//       const values = [150];
//
//       const newValues = model.checkValuesLength(values);
//
//       expect(newValues.length).toEqual(1);
//     });
//
//     it("Should return array if set not array value;", () => {
//       const values = 150;
//
//       const newValues = model.checkValuesLength(values);
//
//       expect(newValues.length).toEqual(1);
//     });
//
//     it("Should return correct array by length if set longer values array;", () => {
//       const values = [150, 200, 300];
//
//       const newValues = model.checkValuesLength(values);
//
//       expect(newValues.length).toBe(1);
//     });
//
//     it("Should return correct array by length if set shorter values array;", () => {
//       const values = new Array();
//
//       const newValues = model.checkValuesLength(values);
//
//       expect(newValues.length).toBe(1);
//     });
//   });
//
//   describe("Testing of verifying of value:", () => {
//     it("Should return value;", () => {
//       const value = 50;
//       const verofiedValue = model.verifyValue(value);
//
//       expect(verofiedValue).toEqual(value);
//     });
//
//     it("Should return correct value if set undefined;", () => {
//       const value: any = undefined;
//       const verofiedValue = model.verifyValue(value);
//
//       expect(verofiedValue).toEqual(0);
//     });
//
//     it("Should return correct value if set NaN;", () => {
//       const value = "string";
//       const verofiedValue = model.verifyValue(value);
//
//       expect(verofiedValue).toEqual(0);
//     });
//
//     it("Should return correct value if set lower then min value;", () => {
//       const value = -100;
//       const verofiedValue = model.verifyValue(value);
//
//       expect(verofiedValue).toEqual(0);
//     });
//
//     it("Should return correct value if set lower then max value;", () => {
//       const value = 150;
//       const verofiedValue = model.verifyValue(value);
//
//       expect(verofiedValue).toEqual(100);
//     });
//   });
// });
