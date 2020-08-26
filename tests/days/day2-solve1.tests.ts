import "mocha";
import {expect} from "chai";
import {Day2} from "../../sources/days";

describe("[day2] solve1 example1", () => {
    it("should return 1985", () => {

        const puzzle = "ULL\nRRDDD\nLURDL\nUUUUD";

        const target = new Day2();

        const result = target.solve1(puzzle);

        expect(result).to.equal("1985");
    });
});

describe("[day2] solve1 example2", () => {
    it("should return 1", () => {

        const puzzle = "ULL";

        const target = new Day2();

        const result = target.solve1(puzzle);

        expect(result).to.equal("1");
    });
});

describe("[day2] solve1 example3", () => {
    it("should return 19", () => {

        const puzzle = "ULL\nRRDDD";

        const target = new Day2();

        const result = target.solve1(puzzle);

        expect(result).to.equal("19");
    });
});

describe("[day2] solve1 example4", () => {
    it("should return 198", () => {

        const puzzle = "ULL\nRRDDD\nLURDL";

        const target = new Day2();

        const result = target.solve1(puzzle);

        expect(result).to.equal("198");
    });
});

