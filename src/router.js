import Home from "./components/routes/Home.svelte";
import About from "./components/routes/About.svelte";
import Contact from "./components/routes/Contact.svelte";

export default [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];
