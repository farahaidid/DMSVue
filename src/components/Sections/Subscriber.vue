<template>
  <!-- Subscribe-section -->
  <div class="subscribe-section bg-gray-dark py-6">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7 col-md-space col-md-center">
          <div>
            <h2 class="text-white">Join Our Newsletter</h2>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 subs-form">
          <!-- <form class="d-block" [formGroup] = "subscribe" (ngSubmit) = "subscribeNow(subscribe.value)"> -->
          <form class="d-block">
            <div class="d-flex justify-align-center">
              <input
                type="email"
                class="form-control subscribe-input form-control"
                placeholder="Enter Your Email"
                id="validationCustom01"
                formControlName="email"
                required
              />
              <div class="invalid-feedback">Please provide a valid Email.</div>
              <button type="submit" class="btn btn-success">Join Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Subscribe-section Closed -->
</template>