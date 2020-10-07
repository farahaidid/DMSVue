<template>
	<div class="row col-space">
		<div class="col-sm-12 col-md-6 col-lg-4" v-for="(portfolio,index) of portfoliov1.data.slice(0,showNoOfPosts)"
			:key="index">
			<div class="overlay-wrap">
				<img :src="portfolio.image_path" width="500" height="500" class="img-fluid border-rad w-100"
					alt="gallery images" />
				<a :href="portfolio.image_path" data-fancybox="images"
					class="card-img-overlay primary-tp-layer pos-center text-center">
					<span class="center-holder">
						<a class="ih-fade-down square-40 rounded-circle bg-white shadow-md">
							<i class="fa fa-plus align-middle"></i>
						</a>
					</span>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	import portfoliov1 from 'Components/data/portfolio-v1.json'

	export default {
		props: ['showNoOfPosts'],
		data() {
			return {
				portfoliov1
			}
		}
	}
</script>