<template>
   <div>
      <!-- Subscribe now widget -->
      <div class="card border-0">
         <img class="card-img-top border-rad-top" src="/static/img/1-blog.jpg" alt="Card image cap" width="371" height="160" />
         <div class="card-img-overlay black-tp-layer text-white border-rad-top">
            <div class="d-flex justify-content-center align-items-center text-center h-100">
               <h2 class="font-2x text-white mb-0">Subscribe</h2>
            </div>
         </div>
      </div>
      <div class="card-body">
         <form>	
            <div class="form-group">
               <input type = "email" class="form-control form-control-lg" placeholder=" Email Address " formControlName = "email" />
            </div>
            <div class="form-group">
               <button type = "submit" class="btn btn-block btn-primary btn-lg submit-btn"> Subscribe </button>
            </div>	
         </form>
      </div>
   </div>
</template>