<script>
  const stickNav = evnt => {
    let nav = document.querySelector("nav");
    console.log(nav.offsetTop);
  };
  window.onscroll = e => {
    stickNav(e);
  };
</script>

<style>
  nav {
    position: sticky;
    top: 0;
    width: 100%;
    text-align: center;
  }
  nav div {
    padding: 1rem;
  }
</style>

<nav id="navbar" class="sticky">
  <div class="bg-primary">
    <h1>Nav</h1>
  </div>
</nav>
