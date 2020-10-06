import View from "../../../../src/components/slider/views/View";
import ViewInterface from "../../../../src/components/slider/views/Interfaces/View.interface";

describe("Testing View.ts", () => {
  let abstractView: ViewInterface;

  beforeEach(() => {
    abstractView = new View("div", "test");
  });

  it("Should return HTMLElement on render", () => {
    const element = abstractView.render();

    expect(element instanceof HTMLElement).toBeTrue();
  });

  it("Should append class 'hidden' to element on hide", () => {
    abstractView.hide();

    const element = abstractView.render();

    expect(element.classList.contains("hidden")).toBeTrue();
  });

  it("Should remove class 'hidden' to element on show", () => {
    abstractView.hide();
    abstractView.show();

    const element = abstractView.render();

    expect(element.classList.contains("hidden")).toBeFalse();
  });
});
