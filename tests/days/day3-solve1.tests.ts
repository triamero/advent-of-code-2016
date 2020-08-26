import "mocha";
import {expect} from "chai";
import {Day3} from "../../sources/days";

describe("[day3] solve1 example1", () => {
    it("should return 0", () => {

        const puzzle = "  5  10  25";

        const result = new Day3().solve1(puzzle);

        expect(result).to.equal(0);
    });
});

describe("[day3] solve1 example2", () => {
    it("should return 1", () => {

        const puzzle = "  3  4  5";

        const result = new Day3().solve1(puzzle);

        expect(result).to.equal(1);
    });
});

describe("[day3] solve1 example3", () => {
    it("should ignore extra whitespaces return 1", () => {

        const puzzle = "    3     4       5";

        const result = new Day3().solve1(puzzle);

        expect(result).to.equal(1);
    });
});
