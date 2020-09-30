import AbstractView from "../../../../src/components/slider/views/AbstractView";
import ViewInterface from "../../../../src/components/slider/interfaces/View.interface";

describe("Testing AbstractView.ts", () => {
  class AbstractViewTest extends AbstractView {
    constructor() {
      super();
      this.element = document.createElement("div");
      this.element.classList.add("test");
    }
  }

  let abstractView: ViewInterface;

  beforeEach(() => {
    abstractView = new AbstractViewTest();
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
