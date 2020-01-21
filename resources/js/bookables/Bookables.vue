<template>
	<div>
		<BookableListItem title="Cheap Villa" content="content prop" v-bind:price="1000"></BookableListItem>	
		<BookableListItem title="Cheap Villa 2" content="content prop 2" v-bind:price="1200"></BookableListItem>	
	</div>
</template>

<script>
	import BookableListItem from "./BookableListItem";

	export default {
		components: {
			BookableListItem
		},
		// beforeCreate() {
		// 	console.log('before create');
		// },
		created() {
			console.log('created');
		},
		// beforeMount() {
		// 	console.log('before mount');
		// },
		mounted() {
			console.log('mounted');
		},
		// beforeDestroy() {
		// 	console.log('before destroy');
		// },
		// destroyed() {
		// 	console.log('destroyed');
		// },	
	}
</script>