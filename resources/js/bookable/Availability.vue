<template>
	<div>
		<h6 class="text-uppercase text-secondary font-weight-bolder">Check Availability
		<span v-if="noAvailability" class="text-danger">(NOT AVAILABLE)</span>
		<span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
		</h6>

		<div class="form-row">
			<div class="form-group col-md-6">
				<label for="from">From</label>
				<input type="text" v-on:keyup.enter="check" v-model="from" name="from" class="form-control form-control-sm" placeholder="Start Date" :class="[{'is-invalid': this.errorFor('from')}]">
				<div class="invalid-feedback" v-for="(error, index) in this.errorFor('from')" :key="'from' + index">{{ error }}</div>
			</div>
			<div class="form-group col-md-6">
				<label for="to">To</label>
				<input type="text" v-on:keyup.enter="check" v-model="to" name="to" class="form-control form-control-sm" placeholder="End Date" :class="[{'is-invalid': this.errorFor('to')}]">
				<div class="invalid-feedback" v-for="(error, index) in this.errorFor('to')" :key="'to' + index">{{ error }}</div>
			</div>
		</div>
		<button v-on:click="check" v-bind:disabled="loading" class="btn btn-secondary btn-block">Check</button>
	</div>
</template>

<script>
	export default {
		props: {
			bookableId: String
		},
		data() {
			return {
				from: null,
				to: null,
				loading: false,
				status: null,
				errors: null
			};
		},
		methods: {
		check() {
			this.loading = true;
			this.errors = null;
			
			axios.get(`/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`
				).then(response => {
					this.status = response.status;
				}).catch(error => {
					if (422 === error.response.status) {
						this.errors = error.response.data.errors
					}
					this.status = error.response.status;
				}).then(() => (this.loading = false));
		 },
		 errorFor(field) {
		 	return this.hasErrors && this.errors[field] ? this.errors[field] : null;
		 }
		},
		computed: {
			hasErrors() {
				return 422 === this.status && this.errors !== null;
			},
			hasAvailability() {
				return 200 === this.status;
			},
			noAvailability() {
				return 404 === this.status;
			}
		}
	};
	
</script>

<style scoped>
label {
	font-size: .7rem;
	text-transform: uppercase;
	color: grey;
	font-weight: bolder;
}

.is-invalid {
	background-image: none;
}

</style>