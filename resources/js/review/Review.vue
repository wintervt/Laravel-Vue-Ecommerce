<template>
	<div>
		<div class="form-group">
			<label class="text-muted">Select the start rating (1 is worst - 5 is best)</label>
			<star-rating :rating="review.rating" class="fa-3x" v-on:rating:changed="review.rating = $event"></star-rating>	
		</div>
		<div class="form-group">
			<label for="content" class="text-muted">Describe your experience with</label>
			<textarea name="content" id="content" cols="30" rows="10" class="form-control"></textarea>
		</div>

		<button class="btn btn-lg btn-primary btn-block">Submit</button>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				review: {
					rating: 5,
					content: null
				}
			};
		}
		// methods: {
		// 	onRatingChanged(rating) {
		// 		console.log(rating);
		// 	}
		// }
	};
</script>