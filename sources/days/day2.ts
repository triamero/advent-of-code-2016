import {Day} from "./day";

export class Day2 extends Day {

    getName(): string {
        return "day2";
    }

    solve1(puzzle: string): any {

        /*
        * 0 0 0 0 0
        * 0 1 2 3 0
        * 0 4 5 6 0
        * 0 7 8 9 0
        * 0 0 0 0 0
        */

        const pad = [
            ["0", "0", "0", "0", "0"],
            ["0", "1", "2", "3", "0"],
            ["0", "4", "5", "6", "0"],
            ["0", "7", "8", "9", "0"],
            ["0", "0", "0", "0", "0"]
        ];

        let position = [2, 2];

        return this._solve(puzzle, position, pad);
    }

    solve2(puzzle: string): any {

        /*
        * 0 0 0 0 0 0 0
        * 0 0 0 1 0 0 0
        * 0 0 2 3 4 0 0
        * 0 5 6 7 8 9 0
        * 0 0 A B C 0 0
        * 0 0 0 D 0 0 0
        * 0 0 0 0 0 0 0
        */

        const pad = [
            ["0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "1", "0", "0", "0"],
            ["0", "0", "2", "3", "4", "0", "0"],
            ["0", "5", "6", "7", "8", "9", "0"],
            ["0", "0", "A", "B", "C", "0", "0"],
            ["0", "0", "0", "D", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0"],
        ];

        let position = [1, 3];

        return this._solve(puzzle, position, pad);
    }

    private _solve(input: string, position: number[], pad: string[][]): string {
        const lines = input.split("\n");

        let result = "";

        lines.forEach(line => {

            line = line.trim();

            if (line.length < 1) {
                return;
            }

            result += this._getSymbol(line, position, pad);
        });

        return result;
    }

    private _getSymbol(line: string, position: number[], pad: string[][]): string {

        for (let i = 0; i < line.length; i++) {
            const symbol = line[i];

            let newPos = [position[0], position[1]];

            switch (symbol) {
                case "U":
                    newPos[1] -= 1;
                    break;
                case "R":
                    newPos[0] += 1;
                    break;
                case "D":
                    newPos[1] += 1;
                    break;
                case "L":
                    newPos[0] -= 1;
                    break;
                default:
                    throw new Error(`Unknown symbol '${symbol}'`);
            }

            if (pad[newPos[1]][newPos[0]] === "0") {
                continue;
            }

            position[0] = newPos[0];
            position[1] = newPos[1];

        }

        return pad[position[1]][position[0]];
    }
}
