import "mocha";
import {expect} from "chai";
import {Day1} from "../../sources/days";


describe("[day1] solve2 example1", () => {
    it("should return 4", () => {

        const puzzle = "R8, R4, R4, R8";

        const target = new Day1();

        const result = target.solve2(puzzle);

        expect(result).to.equal(4);
    });
});
