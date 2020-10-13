import ClickableView from "../../../../src/components/slider/views/ClickableView";

describe("Testing ClickableView.ts", () => {
  const clickableView = new ClickableView("div", "test");
  const clickEvent = new MouseEvent("click");

  beforeAll(() => {
    spyOn(clickableView as any, "getPositionByClientX").and.stub();
    spyOn(clickableView, "notify").and.stub();
  });

  it("Should notify listeners on click", () => {
    const element = clickableView.render();

    element.dispatchEvent(clickEvent);

    expect(clickableView.notify).toHaveBeenCalled();
  });
});
