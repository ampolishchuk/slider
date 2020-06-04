import Model from "../../../../src/components/slider/services/Model";

describe("Testing Model:", () => {
  const observer = jasmine.createSpyObj("observer", ["subscribe, notify"]);

  const model = new Model({ observer });

  it("Sets position value;", () => {
    model.setPosition(100);

    expect(model["position"]).toBe(100);
  });
});
