import "mocha";
import {expect} from "chai";
import {Day1} from "../../sources/days";


describe("[day1] solve1 example1", () => {
    it("should return 5", () => {

        const puzzle = "R2, L3";

        const target = new Day1();

        const result = target.solve1(puzzle);

        expect(result).to.equal(5);
    });
});

describe("[day1] solve1 example2", () => {
    it("should return 2", () => {

        const puzzle = "R2, R2, R2";

        const target = new Day1();

        const result = target.solve1(puzzle);

        expect(result).to.equal(2);
    });
});


describe("[day1] solve1 example3", () => {
    it("should return 12", () => {

        const puzzle = "R5, L5, R5, R3";

        const target = new Day1();

        const result = target.solve1(puzzle);

        expect(result).to.equal(12);
    });
});
