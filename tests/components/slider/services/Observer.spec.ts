import Observer from "../../../../src/components/slider/services/Observer";

describe("Testing Observer:", () => {
  const observer = new Observer();

  it("Adds and notifies observers;", () => {
    let testValue;

    observer.add("test", (value: any) => {
      testValue = value;
    });

    observer.notify("test", "test");

    expect(testValue).toBe("test");
  });
});
