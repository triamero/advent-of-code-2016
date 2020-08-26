import "mocha";
import {expect} from "chai";
import {Day2} from "../../sources/days";

describe("[day2] solve2 example1", () => {
    it("should return 5DB3", () => {

        const puzzle = "ULL\nRRDDD\nLURDL\nUUUUD";

        const target = new Day2();

        const result = target.solve2(puzzle);

        expect(result).to.equal("5DB3");
    });
});
