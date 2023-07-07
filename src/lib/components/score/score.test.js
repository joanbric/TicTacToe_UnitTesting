import { cleanup, render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Score from './Score.svelte';

describe('Score component', () => {
	it('Should render the component', () => {
		render(Score);
	});

	it('Should has the role score', () => {
		screen.getByRole('score');
	});

	it('Should contain score for each player', () => {
		const score = screen.getByRole('score');

		const playerX = score.querySelector('.player.x');
		const playerO = score.querySelector('.player.o');

		expect(playerX).toBeTruthy();
		expect(playerO).toBeTruthy();
	});

	it('Should display X->4 and O->5', () => {
		cleanup();
		render(Score, {
			props: {
				score: {
					x: 4,
					o: 5
				}
			}
		});

		const playerX = screen.getByText('4');
		const playerO = screen.getByText('5');

		expect([...playerX.classList.values()]).toContain('x');
		expect([...playerO.classList.values()]).toContain('o');
	});

	it('Should display X->7 and O->8', () => {
		cleanup();
		render(Score, {
			props: {
				score: {
					x: 7,
					o: 8
				}
			}
		});

    const playerX = screen.getByText('7');
    const playerO = screen.getByText('8');

    expect([...playerX.classList.values()]).toContain('x');
    expect([...playerO.classList.values()]).toContain('o');
    
	});
});
