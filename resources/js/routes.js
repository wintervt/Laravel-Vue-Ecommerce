import VueRouter from "vue-router";
import Example2 from "./components/Example2";
import Bookables from "./bookables/Bookables";

const routes = [
	{
		path: "/",
		component: Bookables,
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