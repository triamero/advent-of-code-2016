import {Day} from "./day";

export class Day1 extends Day {
    getName(): string {
        return "day1";
    }

    solve1(puzzle: string): any {

        const steps = puzzle.split(", ");

        const coords: number[] = [0, 0];
        let direction = Direction.North;

        for (let step of steps) {

            const dir = step[0];

            if (dir === "L") {
                if (direction === Direction.West) {
                    direction = Direction.North;
                } else {
                    direction += 1;
                }
            }
            if (dir === "R") {
                if (direction === Direction.North) {
                    direction = Direction.West;
                } else {
                    direction -= 1;
                }
            }

            const count = +(step.replace(dir, ""));

            switch (direction) {
                case Direction.North:
                    coords[1] += count;
                    break;
                case Direction.East:
                    coords[0] += count;
                    break;
                case Direction.South:
                    coords[1] -= count;
                    break;
                case Direction.West:
                    coords[0] -= count;
                    break;
            }
        }

        return Math.abs(coords[0]) + Math.abs(coords[1]);
    }

    solve2(puzzle: string): any {
        const steps = puzzle.split(", ");

        const coords: number[] = [0, 0];
        let direction = Direction.North;

        let set = new Set<string>();
        set.add("[0;0]");

        for (let step of steps) {

            const dir = step[0];

            if (dir === "L") {
                if (direction === Direction.West) {
                    direction = Direction.North;
                } else {
                    direction += 1;
                }
            }
            if (dir === "R") {
                if (direction === Direction.North) {
                    direction = Direction.West;
                } else {
                    direction -= 1;
                }
            }

            const count = +(step.replace(dir, ""));

            switch (direction) {
                case Direction.North:
                    //coords[1] += count;

                    for (let i = 0; i < count; i++) {
                        coords[1] += 1;

                        const key = `${coords[0]};[${coords[1]}]`;

                        if (set.has(key)) {
                            return Math.abs(coords[0]) + Math.abs(coords[1])
                        }

                        set.add(key);
                    }

                    break;
                case Direction.East:
                    //coords[0] += count;

                    for (let i = 0; i < count; i++) {
                        coords[0] += 1;

                        const key = `${coords[0]};[${coords[1]}]`;

                        if (set.has(key)) {
                            return Math.abs(coords[0]) + Math.abs(coords[1])
                        }

                        set.add(key);
                    }
                    break;
                case Direction.South:
                    //coords[1] -= count;

                    for (let i = 0; i < count; i++) {
                        coords[1] -= 1;

                        const key = `${coords[0]};[${coords[1]}]`;

                        if (set.has(key)) {
                            return Math.abs(coords[0]) + Math.abs(coords[1])
                        }

                        set.add(key);
                    }
                    break;
                case Direction.West:
                    //coords[0] -= count;

                    for (let i = 0; i < count; i++) {
                        coords[0] -= 1;

                        const key = `${coords[0]};[${coords[1]}]`;

                        if (set.has(key)) {
                            return Math.abs(coords[0]) + Math.abs(coords[1])
                        }

                        set.add(key);
                    }
                    break;
            }
        }

        return Math.abs(coords[0]) + Math.abs(coords[1]);
    }
}


enum Direction {
    North = 1,
    East = 2,
    South = 3,
    West = 4
}
