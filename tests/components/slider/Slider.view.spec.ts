// import SliderView from "../../../src/components/slider/Slider.view";

// describe("Testing SliderView:", () => {
//   const view = new SliderView();

//   beforeAll(() => {
//     spyOn(view["container"], "render").and.callFake((className: string) => {
//       const element = document.createElement("section");
//       element.classList.add(className);
//       return element;
//     });
//     spyOn(view["button"], "render").and.callFake((position: number) => {
//       const element = document.createElement("button");
//       element.style.left = position + "px";
//       return element;
//     });
//     spyOn(view["button"], "setPosition").and.stub();

//     spyOn(view["observer"], "add").and.stub();
//     spyOn(view["observer"], "notify").and.stub();

//     spyOn(view, <any>"addHandlers").and.stub();
//   });

//   it("Returns node element;", () => {
//     expect(view.render()).toBeDefined();
//   });

//   it("Returns node element with params;", () => {
//     const element = view.render({ className: "test", position: 100 });
//     const button = element.querySelector("button");

//     expect(element).toBeDefined();
//     expect(element.classList.contains("test")).toBeTrue();
//     expect(button.style.left).toBe("100px");
//   });

//   it("Sets position", () => {
//     view.setPosition(100);

//     expect(view.button.setPosition).toHaveBeenCalledTimes(1);
//   });

//   it("Sets observers", () => {
//     view.addObserver("test", () => {});

//     expect(view["observer"].add).toHaveBeenCalledTimes(1);
//   });

//   // describe("Called with params:", () => {
//   //   const view = new SliderView();

//   //   setViewSpies(view);

//   //   it("Returns node element;", () => {
//   //     expect(view.render()).toBeDefined();
//   //   });
//   // });

//   // it("Sets position value", () => {
//   //   spyOn(view.button, "setPosition");
//   //   view.setPosition(100);

//   //   expect(view.button.setPosition).toHaveBeenCalledTimes(1);
//   // });

//   // describe("Returns node element:", () => {
//   //   it("Called without params;", () => {
//   //     const container = view.render();
//   //     expect(container).toBeDefined();
//   //   });

//   //   it("Called with params;", () => {
//   //     const container = view.render({ className: "test" });
//   //     expect(container.classList.contains("test")).toBeTrue();
//   //   });
//   // });

//   // describe("Observer:", () => {
//   //   let testPosition: number;

//   //   beforeAll(() => {
//   //     testPosition = 0;
//   //     view.addObserver("changePosition", (position: number) => {
//   //       testPosition = position;
//   //     });
//   //   });

//   //   it("Adds;", () => {
//   //     expect(view["observer"]["list"].length).toBe(1);
//   //   });

//   //   it("Notifies;", () => {
//   //     view["observer"]["notify"]("changePosition", 200);
//   //     expect(testPosition).toBe(200);
//   //   });
//   // });
// });
