import {Day} from "./day";

export class Day3 extends Day {

    getName(): string {
        return "day3";
    }

    solve1(puzzle: string): any {

        const lines = puzzle.split("\n");

        let count = 0;

        lines.forEach(line => {

            line = line.trim();

            if (line.length < 1) {
                return;
            }

            const lengths = this._parseLine(line);

            if (this._isTriangle(lengths[0], lengths[1], lengths[2])) {
                count++;
            }
        });

        return count;
    }

    solve2(puzzle: string): any {
        const lines = puzzle.split("\n");

        let count = 0;

        for (let i = 0; i < lines.length; i += 3) {

            if (lines[i].length < 1) {
                break;
            }

            let line1 = lines[i];
            let line2 = lines[i + 1];
            let line3 = lines[i + 2];

            let lengths1 = this._parseLine(line1);
            let lengths2 = this._parseLine(line2);
            let lengths3 = this._parseLine(line3);

            if (this._isTriangle(lengths1[0], lengths2[0], lengths3[0])) {
                count++;
            }

            if (this._isTriangle(lengths1[1], lengths2[1], lengths3[1])) {
                count++;
            }

            if (this._isTriangle(lengths1[2], lengths2[2], lengths3[2])) {
                count++;
            }
        }

        return count;
    }

    private _parseLine(line: string): number[] {
        const splits = line.trim().split("  ")
            .map(x => x.trim())
            .filter(x => x.length > 0);

        if (splits.length != 3) {
            throw new Error(`Invalid string ${line}`);
        }

        let a = +splits[0];
        let b = +splits[1];
        let c = +splits[2];

        return [a, b, c];
    }

    private _isTriangle(a: number, b: number, c: number): boolean {

        if (a + b <= c) {
            return false;
        }

        if (a + c <= b) {
            return false;
        }

        if (b + c <= a) {
            return false;
        }

        return true;
    }
}
