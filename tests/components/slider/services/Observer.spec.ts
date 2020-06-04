import ObserverSingleton from "../../../../src/components/slider/services/Observer";

describe("Testing Observer:", () => {
  const observer = new ObserverSingleton();

  beforeEach(() => {
    observer["observersList"] = [];
  });

  it("Is singleton;", () => {
    const observer2 = new ObserverSingleton();

    expect(observer2).toEqual(observer);
  });

  it("Subsribes observers;", () => {
    observer.subscribe("test", () => {});

    expect(observer["observersList"].length).toBe(1);
  });

  it("Notifies observers;", () => {
    const notifyValue = 100;

    let subscribeValue;

    observer.subscribe("testValue", (value: any) => {
      subscribeValue = value;
    });

    observer.notify("testValue", notifyValue);

    expect(subscribeValue).toBe(notifyValue);
  });
});
