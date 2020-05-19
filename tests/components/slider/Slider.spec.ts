import Slider from "../../../src/components/slider/Slider";

describe("Slider.spec.ts", () => {
  let controller: Slider;

  beforeAll(() => {
    controller = new Slider();
  });

  it("render(): node element returning;", () => {
    spyOn(controller["model"], "setState").and.stub();
    spyOn(controller["model"], "getState").and.returnValue(<any>{
      position: 0,
      className: "test",
    });
    spyOn(controller["view"], "createNode").and.callFake((state) => {
      const node = document.createElement("div");
      state.className && node.classList.add(state.className);
      return node;
    });

    const renderNode = controller.render();

    expect(renderNode.classList.contains("test")).toBeTruthy();
  });

  it("onMouseMove(): observers setting and calling", () => {
    spyOn(controller["model"], "getState").and.returnValue(<any>{
      position: 100,
    });

    let testPosition: number;

    controller.onMouseMove((position: number) => {
      testPosition = position;
    });

    controller["updateObservers"]();

    expect(testPosition).toBe(100);
  });
});
