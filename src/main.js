import App from "./components/App.svelte";

const app = new App({
  target: document.body,
  props: {
    players: [
      {
        name: "Solomon",
        score: 100
      },
      {
        name: "Tia",
        score: 200
      },
      {
        name: "Janet",
        score: 150
      }
    ]
  }
});

export default app;
