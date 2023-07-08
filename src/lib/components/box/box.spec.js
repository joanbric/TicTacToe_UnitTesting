import { describe, it, expect } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import Box from './Box.svelte';

describe('Box component', () => {
	it('Should render the component', () => {
		render(Box, {props: {
            turn: 'O',
        }});
	});

	it('Should disable if clicked', async () => {
		const box = screen.getByRole('gridcell');
		await fireEvent.click(box);

		expect(box.disabled).toBe(true);
	});

	it('Should has O if its Os turn', async () => {
        const box = screen.getByRole('gridcell');
		await fireEvent.click(box);
		expect(box.textContent).toBe('O');
	});
    
    it('Should has X if its Xs turn', async () => {
        cleanup();
        render(Box, {props: {
            turn: 'X',
        }});
        const box = screen.getByRole('gridcell');
        await fireEvent.click(box);
        expect(box.textContent).toBe('X');
    })

    
});
