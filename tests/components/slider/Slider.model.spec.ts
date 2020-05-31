// import SliderModel from "../../../src/components/slider/Slider.model";

// describe("Testing SliderModel:", () => {
//   const observer = jasmine.createSpyObj("observer", {
//     notify: "",
//   });
//   const model = new SliderModel({ observer }, { min: 0, max: 200 });

//   beforeEach(() => {
//     model["state"].position = 0;
//   });

//   it("Returns position;", () => {
//     const position = model.getPosition();

//     expect(position).toBe(0);
//   });

//   describe("Testing a position setting:", () => {
//     beforeEach(() => {
//       model["state"].position = 0;
//     });

//     it("Sets valide position;", () => {
//       model.setPosition(100);

//       expect(model["state"].position).toBe(100);
//     });
//     it("Sets more then max position;", () => {
//       model.setPosition(300);

//       expect(model["state"].position).toBe(200);
//     });
//     it("Sets less then min position;", () => {
//       model.setPosition(-100);

//       expect(model["state"].position).toBe(0);
//     });
//     it("Notifies observers on position changed;", () => {
//       model.setPosition(100);

//       expect(model["$"].observer.notify).toHaveBeenCalled();
//     });
//   });
// });
