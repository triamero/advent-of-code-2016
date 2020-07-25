export interface Day {

    readonly name: string;

    readonly puzzle: string;

    solve1(puzzle: string): any;

    solve2(puzzle: string): any;
}
