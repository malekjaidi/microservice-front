import { createStore } from 'vuex';
import axios from 'axios'
import _ from 'lodash';
// import VueAxios from 'vue-axios'


const store = createStore({

  state() {
    return {
      usersList: [],
    };
  },
  mutations:{
        registerUser(state,payload){
             state.usersList.push(payload);
        },
        setUsers(state, payload) {
          state.usersList = payload;
        },
        deleteUser(state,payload){
          const filtersList = state.usersList.filter(element => element.id !== payload.id)
          state.usersList=filtersList;
        },
        updateUser(state,payload){
          let x = state;
          let result =  _.find(x.usersList, value=> value.id === payload.Id);
          result.email=payload.email;
          result.firstName=payload.firstName;
          result.lastName=payload.lastName;
        }
  },
  actions:{


    ///////////////Register a user//////////////

    async registerUser(context, payload) {
      const dataToSend={
        FirstName:payload.FirstName,
        LastName:payload.LastName,
        Address:payload.Address,
        Email:payload.Email,
        Password:payload.Password,
      };
        await axios.request({
          method: 'POST',
          url: `http://localhost:55301/api/sign-up`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: dataToSend,
        
        });
        context.commit('registerUser', payload);
    },
        ///////////////Update a user//////////////

        async updateUser(context, payload) {
          const dataToSend={
            FirstName:payload.FirstName,
            LastName:payload.LastName,
            Address:payload.Address,
            Email:payload.Email,
            Password:payload.Password,
            Id:payload.Id,
          };
            await axios.request({
              method: 'PUT',
              url: `http://localhost:55301/api`,
              headers: {
                'Content-Type': 'application/json'
              },
              data: dataToSend,
            
            });
            context.commit('updateUser', payload);
        },

    ///////////////Load users//////////////
    async loadUsers(context) {
      const config = {
        headers:{
          'Access-Control-Allow-Origin': '*',
        }
      };
      const dataResponse= await axios.get('http://localhost:5005/api/customers', config);
      const users = [];
  
      for (const key in dataResponse.data) {
        const user = {
          id: dataResponse.data[key].id,
          firstName: dataResponse.data[key].firstName,
          lastName: dataResponse.data[key].lastName,
          email: dataResponse.data[key].email,
        };
        users.push(user);
      }
      await context.commit('setUsers', users);
    },


    ///////////////Delete a user//////////////
    async deleteUser(context,payload){
      const dataToSend={
        id:payload.id,
      };
        await axios.request({
          method: 'DELETE',
          url: `http://localhost:55301/api`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: dataToSend,
        
        });
      context.commit('deleteUser', payload);

    },

  },
  getters: {
    usersList(state) {
      return state.usersList;
    }
  }
});

export default store;