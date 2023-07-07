<script>
	import Box from '$lib/components/box/Box.svelte';
    import Score from '$lib/components/score/Score.svelte';
    const score = {
        x: 0,
        o: 0
    }



    let turn = 'X'
    const moves = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

    
</script>

<h1>Tic Tac Toe</h1>


<Score {score} />
<div role="row">
    <Box {turn} on:click={()=>{moves[0][0] = turn}} />
    <Box {turn} on:click={()=>{moves[0][1] = turn}} />
	<Box {turn} on:click={()=>{moves[0][2] = turn}} />
</div>

<div role="row">
    <Box {turn} on:click={()=>{moves[1][0] = turn}} />
    <Box {turn} on:click={()=>{moves[1][1] = turn}} />
	<Box {turn} on:click={()=>{moves[1][2] = turn}} />
</div>
<div role="row">
    <Box {turn} on:click={()=>{moves[2][0] = turn}} />
    <Box {turn} on:click={()=>{moves[2][1] = turn}} />
    <Box {turn} on:click={()=>{moves[2][2] = turn}} />
    </div>
