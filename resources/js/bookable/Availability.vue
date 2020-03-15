<template>
	<div>
		<h6 class="text-uppercase text-secondary font-weight-bolder">Check Availability
			<transition name="fade">
				<span v-if="noAvailability" class="text-danger">(NOT AVAILABLE)</span>
				<span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
			</transition>
		</h6>

		<div class="form-row">
			<div class="form-group col-md-6">
				<label for="from">From</label>
				<input type="text" v-on:keyup.enter="check" v-model="from" name="from" class="form-control form-control-sm" placeholder="Start Date" :class="[{'is-invalid': errorFor('from')}]">
				<v-errors :errors="errorFor('from')"></v-errors>
			</div>
			<div class="form-group col-md-6">
				<label for="to">To</label>
				<input type="text" v-on:keyup.enter="check" v-model="to" name="to" class="form-control form-control-sm" placeholder="End Date" :class="[{'is-invalid': errorFor('to')}]">
				<v-errors :errors="errorFor('to')"></v-errors>
			</div>
		</div>
		<button v-on:click="check" v-bind:disabled="loading" class="btn btn-secondary btn-block">
			<span v-if="!loading">Check</span>
			<span v-if="loading"><i class="fas fa-circle-noth fa-spin"></i> Checking...</span>
		</button>
	</div>
</template>

<script>
	import { is422 } from "./../shared/utils/response";
	import validationErrors from "./../shared/mixins/validationErrors";

	export default {
		mixins: [validationErrors],
		props: {
			bookableId: [String, Number]
		},
		data() {
			return {
				from: this.$store.state.lastSearch.from,
				to: this.$store.state.lastSearch.to,
				loading: false,
				status: null,
			};
		},
		methods: {
		async check() {
			this.loading = true;
			this.errors = null;

			this.$store.dispatch('setLastSearch', {
				from: this.from,
				to: this.to
			});

			try {
				this.status = (await axios.get(
					`/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`
					)).status;
				this.$emit("availability", this.hasAvailability);
			} catch(error) {
				if (is422(error)) {
					this.errors = error.response.data.errors;
				}
				this.status = error.response.status;
				this.$emit("availability", this.hasAvailability);
			}

			this.loading = false;
			
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