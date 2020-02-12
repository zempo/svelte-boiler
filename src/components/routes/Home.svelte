<script>
  import { getContext } from "svelte";
  import Terms from "../modals/Terms.svelte";

  const { open } = getContext("simple-modal");

  const showModal = () => {
    open(Terms, { title: "Terms and Conditions" });
  };
</script>

<h1>Home</h1>

<button on:click={showModal}>Here's A Modal</button>
