import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./assets/style.css";

const app = createApp(App);

app.config.globalProperties.$http = axios;

app.use(router);
app.mount("#app");
