import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Page from './+page.svelte';

describe('Page (home page)', () => {
	it('Should render the component', () => {
		render(Page);
		screen.getByText('Tic Tac Toe');
	});

	it('Should render a 3 row', () => {
		const rows = screen.getAllByRole('row');
		expect(rows.length).toBe(3);
	});

	it('Should contain 9 boxes', () => {
		const boxes = screen.getAllByRole('box');
		expect(boxes.length).toBe(9);
	});

	describe.each([0, 1, 2])('Box container (matrix row %i)', (i) => {
		it('Should contain 3 boxes', () => {
			const row = screen.getAllByRole('row')[i];
			const boxes = row.querySelectorAll('[role="box"]');
			expect(boxes.length).toBe(3);
		});
	});

	describe('Score', () => {
		it('Should render the component', () => {
			screen.getByRole('score');
		});
	});

	it.skip('Should win X player, 1 to 0', () => {
		// ** Moves **
		/*[
			['X', ' ', 'X'],
			['O', 'X', ' '],
			['X', 'O', 'O']
		];
        */
		
        const boxes = screen.getAllByRole('box');

		fireEvent.click(boxes[0]); // Turn X
        fireEvent.click(boxes[7]); // Turn O
        fireEvent.click(boxes[4]); // Turn X
        fireEvent.click(boxes[8]); // Turn O
        fireEvent.click(boxes[6]); // Turn X
        fireEvent.click(boxes[3]); // Turn O
        fireEvent.click(boxes[2]); // Turn X

		const score = screen.getByRole('score');
		const scorePlayerX = score.querySelector('.player.x');
		const scorePlayerO = score.querySelector('.player.o');

		expect(scorePlayerX.textContent).toBe('1');
		expect(scorePlayerO.textContent).toBe('0');
	});

	it.skip('Should win O player, 1 to 0', () => {
		const moves = [
			['X', 'O', 'X'],
			[' ', 'X', 'O'],
			['O', 'O', 'O']
		];

		const boxes = screen.getAllByRole('box');

		boxes.forEach((box, i) => {
			const row = parseInt(i / 3);
			box.textContent = moves[row][i - row * 3];
		});

		const score = screen.getByRole('score');
		const scorePlayerX = score.querySelector('.player.x');
		const scorePlayerO = score.querySelector('.player.o');

		expect(scorePlayerX.textContent).toBe('0');
		expect(scorePlayerO.textContent).toBe('1');
	});
});
