<template>
    <h1>Update User </h1>
    <div class="container">
        <form @submit.prevent="submitForm" >
            
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
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" v-model.trim="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
    inheritAttrs:false,
    data(){
        return {
            firstName:"",
            lastName:"",
            address:"",
            email:"",
            password:"",
            id:"",
        }
    },
    mounted(){
            this.id=this.$route.params.id;

    },
    methods:{
        async submitForm() {
            const formData = {
                Id:this.id,
                FirstName: this.firstName,
                LastName: this.lastName,
                Address: this.address,
                Email: this.email,
                Password: this.password,
            };
            this.$store.dispatch('updateUser', formData).then(
             this.$router.push('/list')

            );
        }
    }
    
}
</script>