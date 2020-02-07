<script>
  export let players;
  let currentPlayer = players[0];

  const callName = () => {
    console.log(players);
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: rgb(255, 62, 0);
    text-transform: uppercase;
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
  <h1 on:click={callName}>Hello {currentPlayer.name}!</h1>
  <h3 class="points">{currentPlayer.score}</h3>
  <h2>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </h2>
</main>
