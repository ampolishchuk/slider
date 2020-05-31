// import ButtonController from "../../../../src/components/slider/button/Button.controller";

// describe("Testing ButtonController:", () => {
//   const observer = jasmine.createSpyObj("observer", ["add"]);
//   const model = jasmine.createSpyObj("model", {
//     getPosition: 100,
//     setPosition: "",
//   });
//   const view = jasmine.createSpyObj("view", {
//     render: document.createElement("div"),
//     setPosition: "",
//   });

//   const controller = new ButtonController({
//     observer,
//     model,
//     view,
//   });

//   it("Returns node element on render;", () => {
//     const element = controller.render();

//     expect(element.nodeType).toEqual(Node.ELEMENT_NODE);
//   });

//   it("Sets button position to model on mouse move event;", () => {
//     const mousedownEvent = new MouseEvent("mousedown");
//     const mousemoveEvent = new MouseEvent("mousemove");
//     const mouseupEvent = new MouseEvent("mousemup");
//     const element = controller.render();

//     element.dispatchEvent(mousedownEvent);
//     document.dispatchEvent(mousemoveEvent);
//     document.dispatchEvent(mouseupEvent);

//     expect(model.setPosition).toHaveBeenCalledTimes(1);
//   });
// });
