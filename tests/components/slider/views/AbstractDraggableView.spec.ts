import AbstractDraggableView from "../../../../src/components/slider/views/AbstractDraggableView";

describe("Testing AbstractDraggableView.ts", () => {
  class DraggableView extends AbstractDraggableView {
    constructor() {
      super();
      this.element = document.createElement("div");
      this.element.classList.add("test");
    }
  }

  const draggableView = new DraggableView();
  const documentWidth = document.body.offsetWidth + document.body.scrollWidth;
  const mousedownEvent = new MouseEvent("mousedown");
  const mousemoveEvent = new MouseEvent("mousemove", {
    clientX: documentWidth,
  });
  const mouseupEvent = new MouseEvent("mouseup");

  document.body.appendChild(draggableView.render());

  it("Should return position on dragging event", () => {
    const element = draggableView.render();
    let position: number = 0;

    draggableView.addEventListener("dragging", (pos: number) => {
      position = pos;
    });

    element.dispatchEvent(mousedownEvent);
    document.dispatchEvent(mousemoveEvent);
    document.dispatchEvent(mouseupEvent);

    expect(position).toEqual(100);
  });
});
