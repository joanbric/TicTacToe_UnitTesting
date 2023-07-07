/**
 * Calculates the game based on the given moves.
 *
 * @param {Array} moves - The moves made during the game.
 * @return {any} The result of the game calculation.
 */
export function calculateGame(moves) {
	const row1Concated = moves[0].join('')
	const row2Concated = moves[1].join('');
	const row3Concated = moves[2].join('');

    const col1Contated = moves.map((row) => row[0]).join('');
    const col2Contated = moves.map((row) => row[1]).join('');
    const col3Contated = moves.map((row) => row[2]).join('');

    const diagonal1Contated = moves.map((row, index) => row[index]).join('');

	if (row1Concated === 'XXX' || row2Concated === 'XXX' || row3Concated === 'XXX') return results.X_WON;
    if (col1Contated === 'XXX' || col2Contated === 'XXX' || col3Contated === 'XXX') return results.X_WON;
    if(diagonal1Contated === 'XXX') return results.X_WON;
    if(row1Concated === 'OOO' || row2Concated === 'OOO' || row3Concated === 'OOO') return results.O_WON;
    if (col1Contated === 'OOO' || col2Contated === 'OOO' || col3Contated === 'OOO') return results.O_WON;
    if(diagonal1Contated === 'OOO') return results.O_WON;


	return results.DRAW;
}

export const results = {
	DRAW: Symbol('DRAW'),
	X_WON: Symbol('X_WON'),
	O_WON: Symbol('O_WON')
};
