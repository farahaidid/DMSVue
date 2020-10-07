import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/Pages/About.vue'

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      redirect: '/home'
   },
   {
      path: '/home',
      name: 'home',
      component: Home
   },
   {
      path: '/about',
      name: 'about',
      component: About
   },
   {
      path: '/features',
      name: 'features',
      component: () => import('../views/Pages/Features.vue')
   },
   {
      path: '/contact',
      name: 'contactus',
      component: () => import('../views/Pages/ContactUs.vue')
   },
   {
      path: '/support',
      name: 'support',
      component: () => import('../views/Pages/Support.vue')
   },
   {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/Pages/Pricing.vue')
   },
   {
      path: '/search',
      name: 'search',
      component: () => import('../views/Pages/Search.vue')
   },
   {
      path: '/portfolio-v1',
      name: 'portfoliov1',
      component: () => import('../views/Pages/PortfolioV1.vue')
   },
   {
      path: '/portfolio-v2',
      name: 'portfoliov2',
      component: () => import('../views/Pages/PortfolioV2.vue')
   },
   {
      path: '/portfolio-v3',
      name: 'portfoliov3',
      component: () => import('../views/Pages/PortfolioV3.vue')
   },
   {
      path: '/testimonial-v1',
      name: 'testimonialv1',
      component: () => import('../views/Pages/TestimonialV1.vue')
   },
   {
      path: '/testimonial-v2',
      name: 'testimonialv2',
      component: () => import('../views/Pages/TestimonialV2.vue')
   },
   {
      path: '/blog-listing-sidebar',
      name: 'bloglisitingsidebar',
      component: () => import('../views/Blogs/BlogLisitingSidebar.vue')
   },
   {
      path: '/blog-detail',
      name: 'blogdetail',
      component: () => import('../views/Blogs/BlogDetail.vue')
   },
   {
      path: '/blog-column2',
      name: 'blogcolumn2',
      component: () => import('../views/Blogs/BlogColumn2.vue')
   },
   {
      path: '/blog-column3',
      name: 'blogcolumn3',
      component: () => import('../views/Blogs/BlogColumn3.vue')
   },
   {
      path: '/blog-masonry2',
      name: 'blogmasonry2',
      component: () => import('../views/Blogs/BlogMasonry2.vue')
   },
   {
      path: '/blog-masonry3',
      name: 'blogmasonry3',
      component: () => import('../views/Blogs/BlogMasonry3.vue')
   },
   {
      path: '/sidebar-widgets',
      name: 'sidebarwidgets',
      component: () => import('../views/Features/Widgets.vue')
   },
   {
      path: '/login',
      name: 'login',
      component: () => import('../views/Features/Login.vue')
   },
   {
      path: '/sign-up',
      name: 'signup',
      component: () => import('../views/Features/SignUp.vue')
   },
   {
      path: '/thank-you',
      name: 'thankyou',
      component: () => import('../views/Features/ThankYou.vue')
   },
   {
      path: '/not-found',
      name: 'notfound',
      component: () => import('../views/Features/NotFound.vue')
   },
   {
      path: '/maintenance',
      name: 'maintenance',
      component: () => import('../views/Features/Maintenance.vue')
   },
   {
      path: '/blog-sidebar',
      name: 'blogsidebar',
      component: () => import('../views/Blogs/BlogSidebar.vue')
   },
   {
      path: '/blog-no-sidebar',
      name: 'blognosidebar',
      component: () => import('../views/Blogs/BlogNoSidebar.vue')
   },
   {
      path: '/product-grid',
      name: 'productgrid',
      component: () => import('../views/Shop/ProductGrid.vue')
   },
   {
      path: '/product-cart',
      name: 'productcart',
      component: () => import('../views/Shop/ProductCart.vue')
   },
   {
      path: '/product-checkout',
      name: 'productcheckout',
      component: () => import('../views/Shop/ProductCheckout.vue')
   },
   {
      path: '/product-detail',
      name: 'productdetail',
      component: () => import('../views/Shop/ProductDetail.vue')
   },
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
