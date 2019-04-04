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
  },
  // getters: {
  //   checkFormValid: state => {
  //     state.formValid = true;
  //
  //     if(state.userData.firstName.trim()){
  //       state.userData.firstNameValid = true;
  //     } else {
  //       state.userData.firstNameValid = false;
  //       state.formValid = false;
  //     }
  //
  //     if(state.userData.lastName.trim()){
  //       state.userData.lastNameValid = true;
  //     } else {
  //       state.userData.lastNameValid = false;
  //       state.formValid = false;
  //     }
  //
  //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     let em = re.test(String(state.userData.email).toLowerCase());
  //     if(em){
  //       state.userData.emailValid = true;
  //     } else {
  //       state.userData.emailValid = false;
  //       state.formValid = false;
  //     }
  //
  //
  //
  //
  //   }
  // }
});
