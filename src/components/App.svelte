<script>
  export let name;
  import Route from "../Route.svelte";
  import Nav from "./static/Nav.svelte";
  import Footer from "./static/Footer.svelte";
  import Modal from "./modals/Modal.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    min-height: 200vh;
  }

  h1 {
    color: #204f6e;
    margin-top: 5rem;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Modal>
  <Nav />
  <main>
    <h1>Hello, {name}</h1>
    <Route />
  </main>
  <Footer />
</Modal>
