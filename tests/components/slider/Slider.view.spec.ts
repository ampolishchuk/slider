import SliderView from "../../../src/components/slider/Slider.view";

describe("Slider.view.spec.ts", () => {
  let view: SliderView;

  beforeAll(() => {
    view = new SliderView();
  });

  describe("createNode(): node element creating and returning:", () => {
    it("without params;", () => {
      const node = view.createNode();

      expect(node).toBeDefined();
    });

    it("with position;", () => {
      const node = view.createNode({ position: 100 });
      const button = node.querySelector("button");

      expect(button.style.left).toBeTruthy(100 + "px");
    });

    it("with className;", () => {
      const node = view.createNode({ className: "test" });

      expect(node.classList.contains("test")).toBeTruthy();
    });
  });

  it("onMouseMove(): observers adding and getting values;", () => {
    let testPosition: number;

    view.onMouseMove((position: number) => {
      testPosition = position;
    });

    const mousemoveEvent = new MouseEvent("mousemove", { clientX: 100 });

    view["mouseMoveEvent"](mousemoveEvent);

    expect(testPosition).toBe(100);
  });
});
