import Model from "../../../../src/components/slider/models/Model";

describe("Testing Model:", () => {
  const observer = jasmine.createSpyObj("observer", {
    subscribe: "",
    notify: "",
  });

  const model = new Model({ observer });

  it("Sets state;", () => {
    model.setState({ value: 100 });

    expect(model["state"].value).toBe(100);
  });

  it("Sets position value;", () => {
    model.setPosition(100);

    expect(model["state"].position).toBe(100);
  });

  it("Notifies observers on state changed;", () => {
    model.setState({ value: 200 });

    expect(observer.notify).toHaveBeenCalled();
  });

  it("Sets values;", () => {
    model.setValue("test");

    expect(model["state"].value).toBe("test");
  });
});
