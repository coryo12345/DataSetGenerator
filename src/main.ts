import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import PrimeVue from "primevue/config";
import App from "./App.vue";

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// "Plugins" (but not really)
const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(createPinia());

// Components
import Button from "primevue/button";
app.component("Button", Button);
import Card from "primevue/card";
app.component("Card", Card);
import InputSwitch from "primevue/inputswitch";
app.component("InputSwitch", InputSwitch);
import Slider from "primevue/slider";
app.component("Slider", Slider);

import DataTable from "primevue/datatable";
import Column from "primevue/column";
app.component("DataTable", DataTable);
app.component("Column", Column);

// Mount

app.mount("#app");
