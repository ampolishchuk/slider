import View from "../../../../src/components/slider/views/View";
import ViewInterface from "../../../../src/components/slider/views/interfaces/View.interface";

describe("Testing View.ts", () => {
  let view: ViewInterface;

  beforeEach(() => {
    view = new View("div", "test");
  });

  it("Should return HTMLElement", () => {
    const element = view.render();

    expect(element instanceof HTMLElement).toBeTrue();
  });

  it("Should hide node element from page", () => {
    view.hide();

    const element = view.render();

    expect(element.classList.contains("hidden")).toBeTrue();
  });

  it("Should show node element on page", () => {
    view.hide();
    view.show();

    const element = view.render();

    expect(element.classList.contains("hidden")).toBeFalse();
  });

  it("Should return relative parental position", () => {
    const element = view.render();

    document.body.appendChild(element);

    const parent = element.parentElement;
    const parentWidth =
      parent.offsetWidth + parent.getBoundingClientRect().left;
    const relativePosition = (view as any).getPositionByClientX(parentWidth);

    expect(relativePosition).toEqual(100);
  });

  it("Should set position left to node element", () => {
    const element = view.render();

    document.body.appendChild(element);

    const elementCenter = (view as any).elementCenter();

    view.setPositionLeft(100);

    expect(element.style.left).toEqual(Math.ceil(100 - elementCenter) + "%"); // Should be ceiling because it returns 49.999...%
  });

  it("Should set position right to node element", () => {
    const element = view.render();

    document.body.appendChild(element);

    const elementCenter = (view as any).elementCenter();

    view.setPositionRight(100);

    expect(element.style.right).toEqual(Math.ceil(100 - elementCenter) + "%"); // Should be ceiling because it returns 49.999...%
  });
});
