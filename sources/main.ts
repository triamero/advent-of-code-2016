import {Day1, Day2, IDay} from "./days";

export class Main {
    public run(): void {

        const days: IDay[] = [
            new Day1(),
            new Day2()
        ];

        for (let i = 0; i < days.length; i++) {
            const day = days[i];

            const puzzle = day.getPuzzle();

            const result1 = day.solve1(puzzle);
            const result2 = day.solve2(puzzle);

            console.log(`[${day.getName()}] part 1: ${result1}`);
            console.log(`[${day.getName()}] part 2: ${result2}`);
        }
    }
}
