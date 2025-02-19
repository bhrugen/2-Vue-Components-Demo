import { createApp } from "vue";
import App from "./App.vue";
import ContactUs from "./components/ContactUs.vue";

const app = createApp(App);
//global components
app.component("contact-us", ContactUs);
app.mount("#app");
