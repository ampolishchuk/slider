import Presenter from "../../../../src/components/slider/services/Presenter";

describe("Testing abstract class Presenter:", () => {
  const observer = jasmine.createSpyObj("observer", ["subscribe", "notify"]);
  const model = jasmine.createSpyObj("model", ["setPosition"]);
  const view = jasmine.createSpyObj("view", ["render"]);

  class TestPresenter extends Presenter {}

  const presenter = new TestPresenter({
    observer,
    model,
    view,
  });

  it("Sets position to model;", () => {
    presenter.setPosition(100);

    expect(model.setPosition).toHaveBeenCalledTimes(1);
  });

  it("Returns node element from view;", () => {
    presenter.render();

    expect(view.render).toHaveBeenCalledTimes(1);
  });
});
