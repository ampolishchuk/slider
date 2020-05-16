import SliderModel from "./Slider.model";

describe("Model creating", () => {
  const sliderModel = new SliderModel();

  describe("Test setting and getting position value to state", () => {
    it("setPosition(): succesful setting position", () => {
      sliderModel.setPosition(200);

      const state = sliderModel.getState();

      expect(state.position).toBe(200);
    });

    it("getPosition(): succesful return position", () => {
      sliderModel.setPosition(200);

      const position = sliderModel.getPosition();

      expect(position).toBe(200);
    });
  });

  describe("Replace position value if send less then min and more then max value", () => {
    beforeAll(() => {
      sliderModel.setState({ min: 0, max: 200 });
    });

    it("Setting max value instead sended", () => {
      sliderModel.setPosition(300);

      const state = sliderModel.getState();

      expect(state.position).toBe(200);
    });

    it("Setting min value instead sended", () => {
      sliderModel.setPosition(-100);

      const state = sliderModel.getState();

      expect(state.position).toBe(0);
    });
  });

  describe("Event handlers working", () => {
    beforeEach(() => {
      sliderModel.setState({ position: 0, clickPosition: 0 });
    });

    it("setClickPosition(): setting clickPosition on button click", async () => {
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: 200,
      });

      sliderModel.setClickPosition(clickEvent);

      const state = sliderModel.getState();

      expect(state.clickPosition).toBe(200);
    });

    it("getDragPosition(): return new position on mousemove event ", () => {
      const moveEvent = new MouseEvent("move", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: 200,
      });

      const position = sliderModel.getDragPosition(moveEvent);

      expect(position).toBe(200);
    });
  });
});
