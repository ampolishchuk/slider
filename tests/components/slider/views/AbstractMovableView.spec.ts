import AbstractMovableView from "../../../../src/components/slider/views/AbstractMovableView";
import MovableViewInterface from "../../../../src/components/slider/interfaces/MovableView.interface";

describe("Testing AbstractMovableView.ts", () => {
  class MovableViewTest extends AbstractMovableView {
    constructor() {
      super();
      this.element = document.createElement("div");
      this.element.classList.add("test");
    }
  }
  ``;
  let movableView: MovableViewInterface;

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

  it("Should add event listeners", () => {
    movableView.addEventListener("test", () => {});

    expect((movableView as any).listeners.length).toEqual(1);
  });

  it("Should return position on dragging event", () => {
    const documentWidth = document.body.offsetWidth + document.body.scrollWidth;
    const element = movableView.render();
    const mousedownEvent = new MouseEvent("mousedown");
    const mousemoveEvent = new MouseEvent("mousemove", {
      clientX: documentWidth,
    });

    let position: number = 0;

    movableView.addEventListener("dragging", (pos: number) => {
      position = pos;
    });

    document.body.appendChild(element);
    element.dispatchEvent(mousedownEvent);
    document.dispatchEvent(mousemoveEvent);

    expect(position).toEqual(100);
  });
});
