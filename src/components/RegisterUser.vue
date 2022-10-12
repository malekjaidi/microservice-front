<template>
    <h1>RegisterUser </h1>
    <div class="container">
        <form  @submit.prevent="submitForm">
<!-- 1 -->
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" v-model.trim="firstName" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter First Name">
  </div>
  <!-- 2 -->
  <div class="form-group">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="text" v-model.trim="lastName" class="form-control" id="exampleInputLast" aria-describedby="emailHelp" placeholder="Enter Last Name">
  </div>
  <!-- 3 -->
  <div class="form-group">
    <label for="exampleInputEmail1">Address</label>
    <input type="text" v-model.trim="address" class="form-control" id="exampleInputAdd" aria-describedby="emailHelp" placeholder="Enter Address">
  </div>
  <!-- 4 -->
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" v-model.trim="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <!-- 5 -->
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" v-model.trim="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    
</template>


<script>
export default {
    data(){
        return {
            firstName:"",
            lastName:"",
            address:"",
            email:"",
            password:"",
        }
    },
    methods:{
        submitForm() {
            const formData = {
                FirstName: this.firstName,
                LastName: this.lastName,
                Address: this.address,
                Email: this.email,
                Password: this.password,
            };
            console.log(formData);
        this.$store.dispatch('registerUser', formData);
        this.$router.replace('/list');


        }


    }
    
}
</script>