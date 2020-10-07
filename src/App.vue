<template>
  <div id="app" class="v-content__wrap">
    <Header/>
    <router-view/>
    <Subscriber v-if="showSubscriber"/>
    <!-- <FooterSlider  v-if="showFooterSlider"/> -->
    <Footer v-if="showHeaderAndFooter"/>
  </div>
</template>
<script>
  import Header from'@/components/Header/Header'
  import Footer from'@/components/Footer/Footer'
  import Subscriber from 'Components/Sections/Subscriber'
	// import FooterSlider from 'Components/Sections/FooterSlider'

  export default{
    data(){
      return{
  		  showHeaderAndFooter: true,
  		  showSubscriber: true,
      //   showFooterSlider: true
      }
    },
    components:{
      Header,
		  Footer,
		//   FooterSlider,
      Subscriber
    },
    methods: {
      getUrl(){
        let val = this.$route.path.split("/");
        if(val[1] == 'login' || val[1] == 'sign-up' || val[1] == 'thank-you' || val[1] == 'maintenance' || val[1] == 'not-found')
        {
            this.showHeaderAndFooter = false;
            this.showFooterSlider = false;
        } else {
            this.showHeaderAndFooter = true;               
            this.showFooterSlider = true;
        }
  		},
  		showSubs(){
        let val = this.$route.path.split("/");
        if(val[1] == 'home' || val[1] == 'login' || val[1] == 'sign-up' || val[1] == 'thank-you' || val[1] == 'maintenance' || val[1] == 'not-found')
        {
            this.showSubscriber = false;
        } else {
            this.showSubscriber = true;               
        }
      }
    },
    mounted(){
		  this.getUrl();
      this.showSubs();		
    },
    watch: {
      $route() {
		    this.getUrl();
		    this.showSubs();				  
      }
    },
  }
</script>