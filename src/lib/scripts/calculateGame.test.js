import { calculateGame, results } from './calculateGame';
import { describe, it, expect } from 'vitest';

const expectCalculateGame = (allMoves, expected) => {
	for (const moves of allMoves) {
		expect(calculateGame(moves)).toEqual(expected);
	}
};

describe('calculateGame', () => {
	describe('Possible X wins', () => {
		it('Should return X_WON if three on horizontal', () => {
			let allMoves = [
				[
					['X', 'X', 'X'],
					['O', 'O', 'X'],
					['X', 'O', 'O']
				],
				[
					['O', 'X', 'O'],
					['X', 'X', 'X'],
					['X', 'O', 'X']
				],
				[
					['X', 'O', 'O'],
					['O', 'O', 'X'],
					['X', 'X', 'X']
				]
			];

			expectCalculateGame(allMoves, results.X_WON);
		});

		it('Should return X_WON if three on vertical', () => {
			let moves = [
				[
					['X', 'O', 'X'],
					['X', 'O', 'X'],
					['X', 'X', 'O']
				],
				[
					['O', 'X', 'X'],
					['X', 'X', 'O'],
					['O', 'X', 'X']
				],
				[
					['X', 'O', 'X'],
					['O', 'O', 'X'],
					['X', 'O', 'X']
				]
			];

			expectCalculateGame(moves, results.X_WON);
		});

		it('Should return X_WON if three on diagonal', () => {
			let moves = [
				[
					['X', 'O', 'X'],
					['X', 'X', 'O'],
					['O', 'O', 'X']
				]
			];

			expectCalculateGame(moves, results.X_WON);
            
		});
	});

	describe('Possible O wins', () => {
		it('Should return O_WON if three on horizontal', () => {
			let moves = [
				[
					['O', 'O', 'O'],
					['X', 'O', 'X'],
					['O', 'X', 'X']
				],
				[
					['O', 'X', 'O'],
					['O', 'O', 'O'],
					['X', 'O', 'X']
				],
				[
					['X', 'O', 'X'],
					['O', 'X', 'O'],
					['O', 'O', 'O']
				]
			];
			expectCalculateGame(moves, results.O_WON);
		});

		it('Should return O_WON if three on vertical', () => {
			let moves = [
				[
					['O', 'X', 'O'],
					['O', 'X', 'O'],
					['O', 'O', 'X']
				],
				[
					['O', 'O', 'X'],
					['X', 'O', 'O'],
					['X', 'O', 'X']
				],
				[
					['X', 'O', 'O'],
					['O', 'X', 'O'],
					['X', 'O', 'O']
				]
			];
            expectCalculateGame(moves, results.O_WON);
		});

		it('Should return O_WON if three on diagonal', () => {
			let moves = [[
				['O', 'X', 'O'],
				['O', 'O', 'X'],
				['X', 'O', 'O']
			]]
            expectCalculateGame(moves, results.O_WON);
		});
	});

	describe.skip('Simulating games result', () => {
		it('should return DRAW', () => {
			const moves = [
				['X', 'O', 'X'],
				['X', 'O', 'X'],
				['O', 'X', 'O']
			];
			expect(calculateGame(moves)).toBe(results.DRAW);
		});
		it('should return "X_WON"', () => {
			const moves = [
				['X', 'X', 'X'],
				['X', 'O', ' '],
				['O', 'O', ' ']
			];
			expect(calculateGame(moves)).toBe(results.X_WON);
		});
		it('should return "O_WON"', () => {
			const moves = [
				['X', 'X', 'O'],
				['O', 'O', 'X'],
				['O', ' ', 'X']
			];
			expect(calculateGame(moves)).toBe(results.O_WON);
		});
	});
});
