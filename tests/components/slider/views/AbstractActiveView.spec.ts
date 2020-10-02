import AbstractActiveView from "../../../../src/components/slider/views/AbstractActiveView";
import ActiveViewInterface from "../../../../src/components/slider/interfaces/ActiveView.interface";

describe("Testing AbstractActiveView.ts", () => {
  class ActiveView extends AbstractActiveView {
    constructor() {
      super();
      this.element = document.createElement("div");
      this.element.classList.add("test");
    }
  }

  let activeView: ActiveViewInterface;

  beforeEach(() => {
    activeView = new ActiveView();

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
