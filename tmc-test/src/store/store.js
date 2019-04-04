import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    userData: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      randomPass: true,
    },
    pageManagement: {
      pages:['Basic User Settings', 'Tags'],
      activepage: 1
    }
  },
  mutations: {
     nextPage: state => {
       state.pageManagement.activepage++
     },
     previousPage: state => {
       state.pageManagement.activepage--
     },
     updateUserFirstName: (state, value) => {
       state.userData.firstName = value;
     },
     updateUserLastName: (state, value) => {
       state.userData.lastName = value;
     },
     updateUserEmail:(state, value) => {
       state.userData.email = value;
     },
     updateUserUserName:(state, value) =>{
       state.userData.userName = value;
     },
     updateUserPassword:(state, value) =>{
       state.userData.password = value;
     },
     updateRandomPassword: (state, value) => {
       state.userData.randomPass = value;
     }
  }
});
