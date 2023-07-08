<script>
    export let score = {
        x: 0,
        o: 0
    }
</script>
<div class="score-container" role="contentinfo">
    <span role="status" aria-label="playerX" class="player x">{score.x}</span>
    <span role="status" aria-label="playerO" class="player o">{score.o}</span>
</div>