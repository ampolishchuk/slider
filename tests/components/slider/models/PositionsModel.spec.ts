import PositionsModelInterface from "../../../../src/components/slider/models/Interfaces/PositionsModel.interface";
import PositionsModel from "../../../../src/components/slider/models/PositionsModel";

describe("Testing PositionsModel.ts", () => {
  let model: PositionsModelInterface;

  beforeEach(() => {
    model = new PositionsModel();
  });

  it("Should set positions", () => {
    model.setPositions([100]);

    expect((model as any).positions).toEqual([100]);
  });

  it("Should return positions", () => {
    model.setPositions([200]);

    expect(model.getPositions()).toEqual([200]);
  });

  it("Should calls callbacks on positions change", () => {
    let positions: number[] = [];

    model.onChange((pos: number[]) => {
      positions = pos;
    });

    model.setPositions([100]);

    expect(positions).toEqual([100]);
  });
});
