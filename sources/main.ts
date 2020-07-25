import {Day, Day1} from "./days";

export class Main {
    public run(): void {

        const days: Day[] = [
            new Day1()
        ];

        for (let i = 0; i < days.length; i++) {
            const day = days[i];

            const result1 = day.solve1(day.puzzle);
            const result2 = day.solve2(day.puzzle);

            console.log(`[${day.name}] part 1: ${result1}`);
            console.log(`[${day.name}] part 2: ${result2}`);
        }
    }
}
