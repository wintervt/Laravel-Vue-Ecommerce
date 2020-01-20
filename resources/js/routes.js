import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";

const routes = [
	{
		path: "/",
		component: ExampleComponent,
		name: "home",
	},
	{
		path: "/example",
		component: Example2,
		name: "example",
	},
];

const router = new VueRouter({
	routes, //short for routes: routes
	mode: "history", //to remove default URL hashing
});

export default router;