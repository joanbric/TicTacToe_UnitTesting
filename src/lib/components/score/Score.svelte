<script>
    export let score = {
        x: 0,
        o: 0
    }
</script>
<div class="score-container" role="score">
    <span class="player x">{score.x}</span>
    <span class="player o">{score.o}</span>
</div>