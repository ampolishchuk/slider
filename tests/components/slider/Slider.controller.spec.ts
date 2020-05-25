// import SliderController from "../../../src/components/slider/Slider.controller";
// import Observer from "../../../src/components/slider/Observer";
// import SliderModel from "../../../src/components/slider/Slider.model";
// import SliderView from "../../../src/components/slider/Slider.view";
// // import { dependencies } from "../../../src/components/slider/Dependencies";

// describe("Tesing SliderController:", () => {
//   const observer = new Observer();
//   const model = new SliderModel({ observer });
//   const view = new SliderView();

//   let controller: SliderController;

//   beforeAll(() => {
//     spyOnAllFunctions(observer);

//     spyOn(model, "getState").and.returnValue(<any>{});
//     spyOn(model, "setPosition").and.stub();

//     spyOn(view, "render").and.returnValue(
//       (() => {
//         const el = document.createElement("div");
//         el.classList.add("test");
//         return el;
//       })()
//     );

//     controller = new SliderController({
//       observer,
//       model,
//       view,
//     });
//   });

//   it("Returns node element on render;", () => {
//     const el = controller.render();
//     expect(el.nodeName).toBe("DIV");
//   });

//   it("Change slider position on slideTo", () => {
//     controller.slideTo(100);
//     expect(controller["$"].model.setPosition).toHaveBeenCalledTimes(1);
//   });

//   //   const observer = new Observer();
//   //   const model = new SliderModel({ observer });
//   //   const view = new SliderView({ observer });
//   //   const controller = new SliderController({
//   //     observer,
//   //     model,
//   //     view,
//   //   });

//   //   beforeAll(() => {
//   //     // spyOn(observer, "add").and.stub();
//   //     // spyOn(observer, "notify").and.stub();
//   //     // spyOn(model, "setState").and.stub();
//   //     // spyOn(model, "getState").and.stub();
//   //     // spyOn(view, "render").and.stub();

//   //     spyOnAllFunctions(controller["$"]);
//   //   });
// });

// // dependencies.getModel = (): any => {
// //   return {
// //     getState() {
// //       return {};
// //     },
// //     setState() {},
// //   };
// // };
// // dependencies.getView = (): any => {
// //   return {
// //     render() {
// //       const template = document.createElement("template");
// //       const html = `
// //                 <div class='test'>
// //                     <button style='left: 100px'></button>
// //                 </div>
// //             `;
// //       template.innerHTML = html.trim();

// //       return template.content.firstChild;
// //     },
// //   };
// // };

// // describe("Testing SliderController:", () => {
// //   const controller = new SliderController();

// //   it("Returns node element", () => {
// //     const el = controller.render();
// //     expect(el.classList.contains("test")).toBeTrue();
// //   });
// // });

// // describe("Testing Slider:", () => {
// //   const controller = new Slider();

// //   //   it("Returns node element;", () => {
// //   //     expect(controller.render()).toBeDefined();
// //   //   });

// //   //   it("Slides on slideTo() call", () => {
// //   //     controller.slideTo(100);
// //   //   });

// //   //   it("Adds observers", () => {
// //   //     controller.addObserver("onSlide", (position: number) => {});
// //   //   });
// // });

// // const setControllerSpies = (controller: Slider) => {
// //   beforeAll(() => {
// //     spyOn(controller["view"], "render").and.callFake(
// //       ({ className, position }) => {
// //         const element = document.createElement("div");
// //         const button = document.createElement("button");
// //         element.classList.add(className);
// //         button.style.left = position + "px";

// //         element.appendChild(button);
// //         return element;
// //       }
// //     );
// //     spyOn(controller["view"], "addObserver").and.stub();

// //     spyOn(controller["model"], "setState").and.callFake((state: object) => {
// //       Object.assign(this, state);
// //     });
// //     spyOn(controller["model"], "getState").and.callFake((): any => this);
// //     spyOn(controller["model"], "setPosition").and.stub();
// //     spyOn(controller["model"], "addObserver").and.stub();

// //     spyOn(controller["observer"], "add").and.stub();
// //     spyOn(controller["observer"], "notify").and.stub();

// //     spyOn(controller, <any>"init").and.callThrough();
// //     spyOn(controller, <any>"observersInteraction").and.callThrough();
// //   });
// // };

// // describe("Testing Slider:", () => {
// //   describe("Class called without params:", () => {
// //     const controller = new Slider();

// //     setControllerSpies(controller);

// //     it("Returns node element;", () => {
// //       expect(controller.render()).toBeDefined();
// //     });
// //   });

// //   describe("Class called with test params:", () => {
// //     const controller = new Slider({ className: "test", position: 100 });

// //     setControllerSpies(controller);

// //     it("Returns node element with test class;", () => {
// //       const element = controller.render();
// //       const button = element.querySelector("button");

// //       expect(element).toBeDefined();
// //       expect(element.classList.contains("test")).toBeTrue();
// //       expect(button.style.left).toBe("100px");
// //     });

// //     it("initializes once on multiple calls;", () => {
// //       controller.render();
// //       controller.render();

// //       expect(controller["init"]).toHaveBeenCalledTimes(1);
// //     });

// //     it("Calls model method to sets position;", () => {
// //       controller.slideTo(100);

// //       expect(controller["model"].setPosition).toHaveBeenCalledTimes(1);
// //     });

// //     describe("Testing observer:", () => {
// //       beforeAll(() => {
// //         controller.addObserver("test", () => {});
// //       });

// //       it("Sets observers;", () => {
// //         expect(controller["observer"].add).toHaveBeenCalledTimes(1);
// //       });
// //     });
// //   });
// // });
