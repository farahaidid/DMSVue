<template>
   <div class="user-comment-section">
      <form class="leave-comment" action="javascript:void(0);" method="post">
         <div class="row">
            <div class="col-xl-12">
               <div class="row">
                  <div class="col-sm-12 col-md-4">
                     <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="Name" class="form-control" placeholder="" required />
                     </div>
                  </div>
                  <div class="col-sm-12 col-md-4">
                     <div class="form-group">
                        <label>Email Address</label>
                        <input type="email" name="Email" class="form-control" placeholder="" required />
                     </div>
                  </div>
                  <div class="col-sm-12 col-md-4">
                     <div class="form-group">
                        <label>Website</label>
                        <input type="text" name="Website" class="form-control" placeholder="" required />
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-md-12 mb-4">
               <label>Textarea</label>
               <textarea class="form-control" placeholder="" rows="5"></textarea>
            </div>

         </div>
         <div class="form-group mb-0">
            <button type="submit" class="btn btn-primary px-4">Post</button>
         </div>
      </form>
   </div>  
</template>
<script>
   export default {
            
   }
</script>

