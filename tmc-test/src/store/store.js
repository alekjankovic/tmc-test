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
    tags: {
      selectedTags : ['test tag 01', 'test tag 02' ],
      preloadedTags: ['test tag 01', 'test tag 02','test tag 03','test tag 04','test tag 05','test tag 06','test tag 07']
    },

    pageManagement: {
      pages:['Basic User Settings', 'Tags'],
      activepage: 2
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
     },
     updateSelectedTags: (state, value) => {
       for(let i = 0; i < value.length; i++){
         if(!state.tags.selectedTags.includes(value[i])){
           state.tags.selectedTags.push(value[i]);
         }
       }
     }
  }
});
