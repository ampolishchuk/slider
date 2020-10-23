import MovableView from "../../../../src/components/slider/views/MovableView";
import MovableViewInterface from "../../../../src/components/slider/views/interfaces/MovableView.interface";

describe("Testing MovableView.ts", () => {
  let movableView: MovableViewInterface;

  beforeEach(() => {
    movableView = new MovableView("div", "test");

    document.body.appendChild(movableView.render());
  });

  it("Should set position", () => {
    movableView.setPosition(100);

    expect((movableView as any).position).toEqual(100);
  });

  it("Should update styles when setting position", () => {
    movableView.setPosition(100);

    const element = movableView.render();

    expect(parseFloat(element.style.left)).not.toEqual(0);
  });

  it("Should return position", () => {
    movableView.setPosition(100);

    expect(movableView.getPosition()).toEqual(100);
  });

  it("Should set position left to node element", () => {
    const element = movableView.render();

    document.body.appendChild(element);

    const elementCenter = (movableView as any).elementCenter();

    movableView.setPosition(100);

    expect(element.style.left).toEqual(Math.ceil(100 - elementCenter) + "%"); // Should be ceiling because it returns 49.999...%
  });
});
