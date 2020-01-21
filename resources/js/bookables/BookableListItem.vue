<template>
	<div>
		<h1>{{ title }}</h1>
		<p>{{ content }}</p>
		<p>{{ price }}</p>
	</div>
</template>


<script>

	export default {
		props: {'title': String, 'content': String, 'price': Number },
		mounted() {
			console.log(this.title);
		}
	};

</script>