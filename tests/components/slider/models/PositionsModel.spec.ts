import PositionsModelInterface from "../../../../src/components/slider/models/Interfaces/PositionsModel.interface";
import PositionsModel from "../../../../src/components/slider/models/PositionsModel";

describe("Testing PositionsModel.ts", () => {
  let model: PositionsModelInterface;

  beforeEach(() => {
    model = new PositionsModel();
  });

  it("Should set positions", () => {
    model.setPositions([50]);

    expect((model as any).positions).toEqual([50]);
  });

  it("Should set position 0 if passed less then 0", () => {
    model.setPositions([-50]);

    expect((model as any).positions).toEqual([0]);
  });

  it("Should set position 100 if passed more then 100", () => {
    model.setPositions([150]);

    expect((model as any).positions).toEqual([100]);
  });

  it("Should return positions", () => {
    model.setPositions([50]);

    expect(model.getPositions()).toEqual([50]);
  });

  it("Should notify listeners on positions change", () => {
    let positions: number[] = [];

    model.onChange((pos: number[]) => {
      positions = pos;
    });

    model.setPositions([50]);

    expect(positions).toEqual([50]);
  });
});
