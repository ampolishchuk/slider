import SliderPresenter from "../../../../src/components/slider/presenters/Slider.presenter";

describe("Testing SliderPresenter:", () => {
  const observer = jasmine.createSpyObj("observer", ["subscribe", "notify"]);
  const model = jasmine.createSpyObj("model", {
    setValue: "",
  });
  const view = jasmine.createSpyObj("view", ["render"]);

  const presenter = new SliderPresenter({ observer, model, view });

  it("Sets value to model;", () => {
    presenter.slideTo(100);

    expect(model.setValue).toHaveBeenCalledTimes(1);
  });
});
