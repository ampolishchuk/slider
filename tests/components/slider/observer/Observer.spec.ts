import Observer from "../../../../src/components/slider/observer/Observer";
import ObserverInterface from "../../../../src/components/slider/interfaces/Observer.interface";

describe("Testing Observer.ts", () => {
  let observer: ObserverInterface;

  beforeEach(() => {
    observer = new Observer();
  });

  it("Should add subscribes", () => {
    observer.subscribe("test", () => {});

    expect((observer as any).subscribes.length).toBe(1);
  });

  it("Should notify subscribers", () => {
    let notified = false;

    observer.subscribe("test", (status: boolean) => {
      notified = status;
    });

    observer.notify("test", true);

    expect(notified).toBe(true);
  });
});
