import {readFileSync} from "fs";

export interface IDay {

    getName(): string;

    solve1(puzzle: string): any;

    solve2(puzzle: string): any;

    getPuzzle(): string;
}


export abstract class Day implements IDay {

    abstract getName(): string;

    abstract solve1(puzzle: string): any;

    abstract solve2(puzzle: string): any;

    getPuzzle(): string {

        const filePath = `./data/${this.getName()}.txt`;

        return readFileSync(filePath, "utf8");
    }
}
