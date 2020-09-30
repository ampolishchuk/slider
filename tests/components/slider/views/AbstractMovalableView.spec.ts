import AbstractMovalableView from "../../../../src/components/slider/views/AbstractMovalableView";
import MovalableViewInterface from "../../../../src/components/slider/interfaces/MovalableView.interface";

describe("Testing AbstractMovableView.ts", () => {
  class MovableViewTest extends AbstractMovalableView {
    constructor() {
      super();
      this.element = document.createElement("div");
      this.element.classList.add("test");
    }
  }
  ``;
  let movableView: MovalableViewInterface;

  beforeEach(() => {
    movableView = new MovableViewTest();

    document.body.appendChild(movableView.render());
  });

  it("Should set and get positions", () => {
    movableView.setPosition(100);

    expect(movableView.getPosition()).toEqual(100);
  });

  it("Should set position by clientX value", () => {
    const documentWidth = document.body.offsetWidth + document.body.scrollWidth;

    movableView.setPositionByClientX(documentWidth);

    expect(movableView.getPosition()).toEqual(100);
  });

  it("Should add listeners", () => {
    movableView.addListener("test", () => {});

    expect((movableView as any).listeners.length).toEqual(1);
  });
});
