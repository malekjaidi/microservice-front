<template>
    <h1>users List</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in userList" :key="user">
      <th scope="row">{{index}}</th>
      <td>{{user.firstName}}</td>
      <td>{{user.lastName}}</td>
      <td>{{user.email}}</td>
      <td class="td-bt"><button type="button" class="btn btn-primary" @click="updateUser(user.id)">Update User</button></td>
      <td class="td-bt"><button type="button" class="btn btn-danger" @click="deleteUser(user)">Delete User</button></td>
    </tr>

  </tbody>
</table>
</template>
<script>
export default {
data(){
  return{
    userList:[],
  }
},
  async mounted(){
    await this.$store.dispatch('loadUsers');
    this.userList=await this.$store.getters['usersList'];
    await console.log(this.userList)
  },
  // computed:{
  //   usersList() {
  //     return this.$store.getters['usersList'];
  //   },
  // },
  methods:{
    deleteUser(user){
      this.$store.dispatch('deleteUser',user);
    },
    updateUser(id){
      this.$router.push({
      name: 'update',
      params: {
          id: id
              }
      });
    }
  }
    
}
</script>
<style scoped>
.td-bt{
width: 150px  !important; 
margin-right: 30px; 
}
</style>