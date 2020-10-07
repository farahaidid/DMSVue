<template>
	<div>
		<PageTitle headerTitle="Our Latest Work" headerSubTitle="We build something great in the world.">
		</PageTitle>
		<div class="Gallery-grid section-gap page-port">
			<div class="container">
				<PortfolioGrid :showNoOfPosts="9"></PortfolioGrid>
			</div>
		</div>
	</div>
</template>
<script>
	import PortfolioGrid from 'Components/Sections/PortfolioGrid.vue'

	export default {
		components: {
			PortfolioGrid
		}
	}
</script>