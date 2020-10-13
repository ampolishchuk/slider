import EventManagerInterface from "../../../../../src/components/slider/eventManager/Interface/EventManager.interface";
import EventManager from "../../../../../src/components/slider/eventManager/EventManager";

describe("Testing EventManager.ts", () => {
  let eventManager: EventManagerInterface;

  beforeEach(() => {
    eventManager = new EventManager();
  });

  it("Should add listeners", () => {
    eventManager.subscribe("test", () => {});

    expect((eventManager as any).listeners.length).toEqual(1);
  });

  it("Should notify listeners", () => {
    let notified = false;

    eventManager.subscribe("test", (notification: boolean) => {
      notified = notification;
    });

    eventManager.notify("test", true);

    expect(notified).toBeTrue();
  });
});
