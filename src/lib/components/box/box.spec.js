import { describe, it, expect } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import Box from './Box.svelte';

describe('Box component', () => {
	it('Should render the component', () => {
		render(Box, {props: {
            turn: 'O',
        }});
	});

	it('Should disable if clicked', () => {
		const box = screen.getByRole('box');
		fireEvent.click(box);

		expect(box.disabled).toBe(true);
	});

	it('Should has O if its Os turn', () => {
        const box = screen.getByRole('box');
		fireEvent.click(box);
		expect(box.textContent).toBe('O');
	});
    
    it('Should has X if its Xs turn', () => {
        cleanup();
        render(Box, {props: {
            turn: 'X',
        }});
        const box = screen.getByRole('box');
        fireEvent.click(box);
        expect(box.textContent).toBe('X');
    })

    
});
