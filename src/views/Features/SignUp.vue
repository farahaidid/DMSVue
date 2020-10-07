<template>
  <!-- Sign Up Layout -->
  <div class="session-wrapper fade-in-up sign-up-page">
    <div class="container container-full-width">
      <div class="row">
        <div class="col-sm-12 col-md-11 col-lg-10 mx-auto">
          <div class="row no-gutters align-items-center">
            <div class="col-sm-12 col-md-6 d-xs-none">
              <div class="card text-white border-rad shadow-md border-0">
                <img
                  class="card-img w-100"
                  src="/static/img/sign-up.png"
                  alt="Card image"
                  width="445"
                  height="649"
                />
                <div class="card-img-overlay border-rad p-4 text-center">
                  <div>
                    <h2 class="text-white display-4 fw-700 text-uppercase">
                      WelCome!
                    </h2>
                    <p class="lead text-white mb-5">Register and enjoy our benifits, Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
							<div class="sign-up-using text-center">
								<h4 class="text-white mb-4">Sign Up Using</h4>
						   <ul class="list-inline">
                      <li class="list-inline-item mx-2">
                        <a href="javascript:void(0)" class="square-50 bg-facebook">
                          <i class="fab fa-facebook-f fa-inverse"></i>
                        </a>
                      </li>
                      <li class="list-inline-item mx-2">
                        <a href="javascript:void(0)" class="square-50 bg-twitter">
                          <i class="fab fa-twitter fa-inverse"></i>
                        </a>
                      </li>
                      <li class="list-inline-item mx-2">
                        <a href="javascript:void(0)" class="square-50 bg-google">
                          <i class="fab fa-google-plus-g fa-inverse"></i>
                        </a>
                      </li>
                    </ul>
						</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 py-4">
              <div class="card border-0 p-5 card-shadow">
                <form class="session-form mb-4" action="javascript:void(0)" method="post">
                  <div class="social-widget mb-4">
                    <h2 class="text-capitalize font-2x mb-4">Sign Up</h2>
                
                  </div>
                  <!-- Social widget closed -->
                  <div class="form-group">
                    <label for="InputEmail1">Email Address</label>
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      id="InputEmail1"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="password"
                      required
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="c-password">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="c-password"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block btn-lg submit-btn"
                    >Register</button>
                  </div>
                  <div class="form-group text-center">
                    <p>
                      Already Member?
                      <a routerLink="/login">Login</a>
                    </p>
                  </div>
                </form>
                <!-- session form closed -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- container closed -->
  </div>
  <!-- session Wrapper closed -->
</template>