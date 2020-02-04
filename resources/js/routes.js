import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import Bookable from "./bookable/Bookable";
import Review from "./review/Review";

const routes = [
	{
		path: "/",
		component: Bookables,
		name: "home",
	},
	{
		path: "/bookable/:id",
		component: Bookable,
		name: "bookable",
	},
	{
		path: "/review/:id",
		component: Review,
		name: "Review",
	},
];

const router = new VueRouter({
	routes, //short for routes: routes
	mode: "history", //to remove default URL hashing
});

export default router;