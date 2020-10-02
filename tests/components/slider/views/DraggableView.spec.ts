import DraggableView from "../../../../src/components/slider/views/DraggableView";

describe("Testing DraggableView.ts", () => {
  const draggableView = new DraggableView("button", "test");
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
