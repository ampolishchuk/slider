import DraggableView from "../../../../src/components/slider/views/DraggableView";

describe("Testing DraggableView.ts", () => {
  const draggableView = new DraggableView("div", "test");
  const mousedownEvent = new MouseEvent("mousedown");
  const mouseupEvent = new MouseEvent("mouseup");
  const mousemoveEvent = new MouseEvent("mousemove");

  beforeAll(() => {
    spyOn(draggableView as any, "getPositionByClientX").and.stub();
    spyOn(draggableView, "notify").and.stub();
  });

  it("Should notify listeners on dragging", () => {
    const element = draggableView.render();

    element.dispatchEvent(mousedownEvent);
    document.dispatchEvent(mousemoveEvent);
    document.dispatchEvent(mouseupEvent);

    expect(draggableView.notify).toHaveBeenCalled();
  });
});
