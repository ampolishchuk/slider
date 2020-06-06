import View from "../../../../src/components/slider/services/View";

describe("Testing abstract View:", () => {
  const observer = jasmine.createSpyObj("observer", ["subscribe", "notify"]);

  class TestView extends View {}

  const view = new TestView({ observer });

  it("Throw Error if render() not realizated;", () => {
    expect(function () {
      view.render();
    }).toThrow(new Error("Method render() must be realizated"));
  });
});
