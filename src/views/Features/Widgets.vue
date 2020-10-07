<template>
   <div>
      <PageTitle
         headerTitle="Sidebar Widgets"
         headerSubTitle="Do you have any questions or need your help?"
      >
      </PageTitle>
      <div class="sidebar-widget section-gap">
         <div class="container">
            <div class="card-columns">
               <div class="">
                  <div class="card border-bottom-dash zemle-widget">
                        <h4 class="mb-3"> Search </h4>
                        <Search/>
                  </div>
               </div>
               <!-- search now widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <Category/> 
               </div>
               <!-- Categories widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <PopularPosts/>
               </div>
               <!-- Popular post widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="social-share mb-3">
                     <socialShare/>
                  </div>
               </div>
               <!-- Social Share widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="social-share mb-3">
                     <SocialTags/>
                  </div>
               </div>
               <!-- Social icon widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="recent-comment mb-3">
                     <RecentCommentsWithDate></RecentCommentsWithDate>
                  </div>
               </div>
               <!-- Recent Comment widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="recent-comment mb-3">
                     <RecentCommentsWithIcon></RecentCommentsWithIcon>
                  </div>
               </div>
               <!-- Recent Comment icon widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="subscribe mb-3 border border-rad">
                     <SubsribeSidebar></SubsribeSidebar>
                  </div>
               </div>
               <!-- Subscribe closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <InstagramGallary></InstagramGallary>
               </div>
               <!-- Instagram Gallery widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="mb-3">
                     <TabStructure></TabStructure>
                  </div>
               </div>
               <!-- Tab post Widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="contact-widget mb-3">
                     <ContactUsList></ContactUsList>
                  </div>
               </div>
               <!-- Contact list widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="contact-form mb-3">
                     <ContactUs2></ContactUs2>
                  </div>
               </div>
               <!-- Contact Form widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="cart-widget mb-3">
                     <Cart></Cart>
                  </div>
               </div>
               <!-- Cart widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="mb-3">
                     <LatestTweets></LatestTweets>
                  </div>
               </div>
               <!-- Latest tweets Widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="mb-3">               
                     <Category2></Category2>
                  </div>
               </div>
               <!-- Categories Widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="mb-3">
                     <Tags1></Tags1>
                  </div>
               </div>
               <!-- Tags Widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="mb-3">
                     <Testimonial1></Testimonial1>
                  </div>
               </div>
               <!-- Testimonial-1 Widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="mb-3">
                     <Testimonial2></Testimonial2>
                  </div>
               </div>
               <!-- Testimonial-2 Widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="mb-3">
                     <Archive></Archive>
                  </div>
               </div>
               <!-- Archive Widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="mb-3">
                     <Tags2></Tags2>
                  </div>
               </div>
               <!-- Tags Widget closed -->
               <div class="zemle-widget card border-bottom-dash">
                  <div class="mb-3">
                     <AboutAuthor></AboutAuthor>
                  </div>
               </div>
               <!-- Author Widget closed -->
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import Search from 'Components/Widgets/Search'
   import Category from 'Components/Widgets/Category'
   import PopularPosts from 'Components/Widgets/PopularPosts'
   import socialShare from 'Components/Widgets/socialShare'
   import SocialTags from 'Components/Widgets/SocialTags'
   import RecentCommentsWithDate from 'Components/Widgets/RecentCommentsWithDate'
   import RecentCommentsWithIcon from 'Components/Widgets/RecentCommentsWithIcon'
   import SubsribeSidebar from 'Components/Widgets/SubsribeSidebar'
   import InstagramGallary from 'Components/Widgets/InstagramGallary'
   import TabStructure from 'Components/Widgets/TabStructure'
   import ContactUsList from 'Components/Widgets/ContactUsList'
   import ContactUs2 from 'Components/Widgets/ContactUs2'
   import Cart from 'Components/Widgets/Cart'
   import LatestTweets from 'Components/Widgets/LatestTweets'
   import Category2 from 'Components/Widgets/Category2'
   import Tags1 from 'Components/Widgets/Tags1'
   import Testimonial1 from 'Components/Widgets/Testimonial1'
   import Testimonial2 from 'Components/Widgets/Testimonial2'
   import Archive from 'Components/Widgets/Archive'
   import Tags2 from 'Components/Widgets/Tags2'
   import AboutAuthor from 'Components/Widgets/AboutAuthor'
   
   export default{
      components:{
         Search,
         Category,
         PopularPosts,
         socialShare,
         SocialTags,
         RecentCommentsWithDate,
         RecentCommentsWithIcon,
         SubsribeSidebar,
         InstagramGallary,
         TabStructure,
         ContactUsList,
         ContactUs2,
         Cart,
         LatestTweets,
         Category2,
         Tags1,
         Testimonial1,
         Testimonial2,
         Archive,
         Tags2,
         AboutAuthor
      }
   }
</script>