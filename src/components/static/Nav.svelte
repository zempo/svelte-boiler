<script>
  import Link from "../../Link.svelte";
  let headerClass = "pin";
  let y = 0;
  let lastY = 0;
  let lastDirection = "up"; // new

  function setSticky(y) {
    let result = headerClass;
    const scrollPxs = lastY - y;
    const scrollDirection = scrollPxs < 0 ? "down" : "up";
    // new
    const changedDirection = scrollDirection !== lastDirection;
    // change result if the direction has changed
    lastDirection = scrollDirection;
    lastY = y;
    return result;
  }

  $: headerClass = setSticky(y);
</script>

<style>
  :root {
    --nav-height: 100px;
  }

  nav {
    position: fixed;
    width: 100%;
    text-align: center;
  }

  nav div {
    padding: 1rem;
  }

  .pin {
    top: 0;
  }

  .unpin {
    top: calc(var(--nav-height) * -1);
    color: pink;
  }
</style>

<svelte:window bind:scrollY={y} />

<header>
  <nav class={headerClass}>
    <div class="bg-primary">
      <Link page={{ path: '/', name: 'Home' }} />
      <Link page={{ path: '/about', name: 'About' }} />
      <Link page={{ path: '/contact', name: 'Contact' }} />
    </div>
  </nav>
</header>
