import SliderModel from "../../../src/components/slider/Slider.model";
import Observer from "../../../src/components/slider/services/Observer";

describe("Testing SliderModel:", () => {
  const observer = new Observer();
  let model: SliderModel;

  beforeAll(() => {
    spyOnAllFunctions(observer);

    model = new SliderModel({ observer }, { min: 0, max: 200 });
  });

  beforeEach(() => {
    model["state"].position = 0;
  });

  it("Sets state;", () => {
    model.setState({ position: 100 });

    expect(model["state"].position).toBe(100);
  });
  it("Returns state;", () => {
    const { position } = model.getState();

    expect(position).not.toBeNull();
  });

  describe("Testing a position setting:", () => {
    beforeEach(() => {
      model["state"].position = 0;
    });

    it("Sets valide position;", () => {
      model.setPosition(100);

      expect(model["state"].position).toBe(100);
    });
    it("Sets more then max position;", () => {
      model.setPosition(300);

      expect(model["state"].position).toBe(200);
    });
    it("Sets less then min position;", () => {
      model.setPosition(-100);

      expect(model["state"].position).toBe(0);
    });
    it("Notifies observers on position changed;", () => {
      model.setPosition(100);

      expect(model["$"].observer.notify).toHaveBeenCalled();
    });
  });
});
