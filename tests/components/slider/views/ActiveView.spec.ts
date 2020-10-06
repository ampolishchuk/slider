import ActiveView from "../../../../src/components/slider/views/ActiveView";
import ActiveViewInterface from "../../../../src/components/slider/views/Interfaces/ActiveView.interface";

describe("Testing ActiveView.ts", () => {
  let activeView: ActiveViewInterface;

  beforeEach(() => {
    activeView = new ActiveView("div", "test");

    document.body.appendChild(activeView.render());
  });

  it("Should set and get positions", () => {
    activeView.setPosition(100);

    expect(activeView.getPosition()).toEqual(100);
  });

  it("Should set position by clientX value", () => {
    const documentWidth = document.body.offsetWidth + document.body.scrollWidth;

    (activeView as any).setPositionByClientX(documentWidth);

    expect(activeView.getPosition()).toEqual(100);
  });

  it("Should add event listeners", () => {
    activeView.addEventListener("test", () => {});

    expect((activeView as any).listeners.length).toEqual(1);
  });
});
