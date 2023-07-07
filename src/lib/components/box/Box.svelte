<script>
    let active = true;
    export let turn = "";
    function activeBox(e) {
        const btn = e.target

        btn.textContent = turn; 
        btn.disabled = true

    }
</script>
<button role="box" on:click={activeBox}></button>
