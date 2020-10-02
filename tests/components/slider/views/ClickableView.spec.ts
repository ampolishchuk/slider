import ClickableView from "../../../../src/components/slider/views/ClickableView";

describe("Testing ClickableView.ts", () => {
  const clickableView = new ClickableView("div", "test");
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
