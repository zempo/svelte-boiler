<script>
  export let players;
  let currentPlayer = players[0];
  let showControls = false;

  const toggleControls = () => (showControls = !showControls);
  const addPoint = () => (currentPlayer.score += 1);
  const rmvPoint = () => (currentPlayer.score -= 1);
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #204f6e;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Welcome, {currentPlayer.name}!</h1>
  <div class="container">
    <div class="card">
      <h2>{currentPlayer.name} | {currentPlayer.score}</h2>
      <br />
      <button class="btn btn-sm" on:click={toggleControls}>
        {#if showControls}collapse{:else}expand{/if}
      </button>
      <br />
      <br />

      {#if showControls}
        <button class="btn btn-success" on:click={addPoint}>+1</button>
        <button class="btn btn-danger" on:click={rmvPoint}>-1</button>
        <input type="number" bind:value={currentPlayer.score} />
      {/if}
    </div>
  </div>
  <h3>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </h3>
</main>
