import Slider from "../../../src/components/slider/Slider";

describe("Slider.spec.ts", () => {
  const controller = new Slider();
  const node = controller.render();

  it("controller.node rendered;", () => {
    expect(node).toBeDefined();
  });

  describe("Testing handlers on view.button:", () => {
    beforeAll(() => {
      const mousemove = new MouseEvent("mousemove", {
        clientX: 300,
      });

      controller["onMouseMove"](mousemove);
    });

    it("model.position correctly updated;", () => {
      const { position } = controller["model"]["state"];

      expect(position).toBe(300);
    });

    it("view.button correctly updated;", () => {
      expect(controller["view"].button.style.left).toBe(300 + "px");
    });
  });

  describe("refresh(): set model.state if exist and render controller.node", () => {
    beforeAll(() => {
      controller.refresh({ position: 100 });
    });

    it("model.state updated correctly", () => {
      const { position } = controller["model"]["state"];

      expect(position).toBe(100);
    });
  });

  describe("addObserver(): append callback functions to model observerList array:", () => {
    controller.addObserver(() => {});

    it("callback function appends;", () => {
      const observersList = controller["model"]["observersList"];

      expect(observersList.length).toBeGreaterThan(0);
    });
  });
});
