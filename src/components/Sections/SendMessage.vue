<template>
   <div class="border-0 border-rad p-4 card-shadow contact-us-form bg-white">
      <div class="mb-4">
         <h4 class="font-weight-med mb-4">Send Us Message</h4>
      </div>
      <form>
         <div class="row">
            <div class="form-group col-12 col-md-12 col-lg-12 col-xl-12 mb-4">
               <label class="mb-3" for="first-name">Your Name</label>
               <input id="first-name" type="text" class="form-control form-control-lg" placeholder="" formControlName = "first_name" required>
            </div>
         </div>
         <div class="form-group mb-4">
            <label class="mb-3" for="email-address">Email</label>
            <input id="email-address" type="email" class="form-control form-control-lg" placeholder="" formControlName = "email" required>
         </div>
         <div class="form-group mb-4">
            <label class="mb-3" for="message">Messages</label>
            <textarea id="message" class="form-control form-control-lg" rows="5" placeholder="" formControlName = "textarea" required></textarea>
         </div>
         <div class="form-group">
            <button type="submit" class="btn btn-primary">Send Messages</button>
         </div>
      </form>
   </div>
</template>

<script>
   export default {
      
   }
</script>
