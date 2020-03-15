<template>
	<div>
		<nav class="navbar bg-white border-bottom navbar-light">
			<router-link class="navbar-brand mr-auto" :to="{name: 'home'}">Laravel Bnb</router-link>

			<router-link class="btn nav-button":to="{name: 'home'}">
				Basket
				<span v-if="itemsInBasket" class="badge badge-secondary">{{ itemsInBasket }}</span>
			</router-link>
		</nav>

		<div class="container my-4">
			<router-view></router-view>
		</div>
	</div>
</template>


<script>
	import { mapState, mapGetters } from "vuex";
	export default {
		// data() {
		// 	return {
		// 		lastSearch: this.$store.state.lastSearch
		// 	}
		// },
		computed: {
			...mapState([
				'lastSearch'
			]),
			...mapGetters([
				'itemsInBasket'
			]),
		}
	}
</script>