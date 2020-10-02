import AbstractClickableView from "../../../../src/components/slider/views/AbstractClickableView";

describe("Testing AbstractClickableView.ts", () => {
  class ClickableView extends AbstractClickableView {
    constructor() {
      super();
      this.element = document.createElement("div");
      this.element.classList.add("test");
    }
  }

  const clickableView = new ClickableView();
  const documentWidth = document.body.offsetWidth + document.body.scrollWidth;
  const clickEvent = new MouseEvent("click", {
    clientX: documentWidth,
  });

  document.body.appendChild(clickableView.render());

  it("Should return position on click event", () => {
    const element = clickableView.render();
    let position: number = 0;

    clickableView.addEventListener("click", (pos: number) => {
      position = pos;
    });

    element.dispatchEvent(clickEvent);

    expect(position).toEqual(100);
  });
});
