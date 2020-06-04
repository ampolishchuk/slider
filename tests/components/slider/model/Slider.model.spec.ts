import SliderModel from "../../../../src/components/slider/model/Slider.model";

describe("Testing SliderModel:", () => {
  const observer = jasmine.createSpyObj("observer", ["add", "notify"]);

  const model = new SliderModel({ observer }, { min: 0, max: 100 });

  it("Sets state on init;", () => {
    expect(model["state"].min).toEqual(0);
    expect(model["state"].max).toEqual(100);
  });

  it("Sets position on setPosition();", () => {
    model.setPosition(100);

    expect(model["state"].position).toEqual(100);
  });

  it("Returns position on getPosition();", () => {
    const position = model.getPosition();

    expect(position).toBeDefined();
  });

  it("Notifies observer on position changing;", () => {
    model.setPosition(100);

    expect(observer.notify).toHaveBeenCalled();
  });
});
