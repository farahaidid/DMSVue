<template>
   <!-- Sign In Layout -->
   <div class="session-wrapper fade-in-up">
      <div class="container container-full-width">
         <div class="row">
            <div class="col-sm-12 col-md-11 col-lg-9 mx-auto">
               <div class="row no-gutters align-items-center">
                  <div class="col-sm-12 col-md-6 d-xs-none">
                     <div class="card text-white border-rad shadow border-0 z-index">
                        <img class="card-img img-fluid" src="/static/img/login.png" alt="Card image" width="400" height="500" />
                     </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                     <div class="card border-0 p-5 rounded-0 card-shadow">
                        <form class="session-form" action="javascript:void(0)" method="post">
                           <div class="social-widget mb-4">
                              <h2 class="text-capitalize font-2x mb-4">Sign In</h2>
                           </div><!-- Social widget closed -->
                           <div class="mb-4">
                              <div class="form-group">
                                 <label for="InputEmail1">Email Address</label>
                                 <input type="email" class="form-control form-control-lg" id="InputEmail1" required>
                              </div>
                              <div class="form-group">
                                 <label for="password">Password</label>
                                 <input type="password" class="form-control form-control-lg" id="password" required>
                              </div>
                           </div>
                           <div class="form-group">
                              <button type="submit" class="btn btn-primary btn-block btn-lg submit-btn">Sign In</button>
                           </div>
                           <div class="form-group text-center">
                              <p>New User ?  <a routerLink="/sign-up"> Register Now</a></p>
                           </div>
                        </form><!-- session form closed -->
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div><!-- container closed -->
   </div><!-- session Wrapper closed -->
</template>