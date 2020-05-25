// import SliderModel from "../../../src/components/slider/Slider.model";

// describe("Testing SliderModel:", () => {
//   const model = new SliderModel();

//   it("Returns state;", () => {
//     model.setState({ position: 400 });

//     const { position } = model.getState();

//     expect(position).toBe(400);
//   });

//   describe("Validates position value on set:", () => {
//     model.setState({ max: 200, min: 0 });

//     it("Valid value passed;", () => {
//       model.setPosition(100);

//       expect(model["state"].position).toEqual(100);
//     });

//     it("Less then min value passed;", () => {
//       model.setPosition(-100);

//       expect(model["state"].position).toEqual(0);
//     });

//     it("More then max value passed;", () => {
//       model.setPosition(300);

//       expect(model["state"].position).toEqual(200);
//     });
//   });

//   describe("Observer:", () => {
//     let testPosition: number;

//     model.addObserver("position", (position: number) => {
//       testPosition = position;
//     });

//     it("Adds;", () => {
//       expect(model["observer"]["list"].length).toBe(1);
//     });

//     it("Notifies;", () => {
//       model["observer"]["notify"]("position", 100);

//       expect(testPosition).toBe(100);
//     });
//   });
// });
