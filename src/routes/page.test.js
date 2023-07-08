import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Page from './+page.svelte';

describe('Page (home page)', () => {
	it('Should render the component', () => {
		render(Page);
		screen.getByText('Tic Tac Toe');
	});

	it('Should render a 1 grid', () => {
        screen.getByRole('grid');
	});

	it('Should contain 9 boxes', () => {
		const boxes = screen.getAllByRole('gridcell');
		expect(boxes.length).toBe(9);
	});

	describe('Score', () => {
		it('Should render the component', () => {
			screen.getByRole('contentinfo');
		});
	});

	it.skip('Should win X player, 1 to 0', async () => {
		// ** Moves **
		/*[
			['X', ' ', 'X'],
			['O', 'X', ' '],
			['X', 'O', 'O']
		];
        */
		
        const boxes = screen.getAllByRole('box');

		await fireEvent.click(boxes[0]); // Turn X
        await fireEvent.click(boxes[7]); // Turn O
        await fireEvent.click(boxes[4]); // Turn X
        await fireEvent.click(boxes[8]); // Turn O
        await fireEvent.click(boxes[6]); // Turn X
        await fireEvent.click(boxes[3]); // Turn O
        await fireEvent.click(boxes[2]); // Turn X

		const scorePlayerX = screen.getByRole('status', {name: 'playerX'});
		const scorePlayerO = screen.getByRole('status', {name: 'playerO'});

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

        const scorePlayerX = screen.getByRole('status', {name: 'playerX'});
		const scorePlayerO = screen.getByRole('status', {name: 'playerO'});

		expect(scorePlayerX.textContent).toBe('0');
		expect(scorePlayerO.textContent).toBe('1');
	});
});
