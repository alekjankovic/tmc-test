<template>
  <div class="add-user">
    <div class="card">
      <div class="card-header text-center">
        <strong>Add User</strong>
      </div>
      <div class="card-body">

        <CoolB v-bind:pages="pages" v-bind:activepage="activepage" v-on:gotoPage="gotoPage"></CoolB>

        <div class="form-container">
          <div class="row">

              <div class="col-12 col-md-4">
                <div class="composit-header col-11">
                  <span class="composit-header-prim">
                    Main user settings
                  </span>
                  <span class="composit-header-sec">
                    Set the main user settings
                  </span>
                </div>

                <div class="form-group">
                  <label>First Name:</label>
                  <input type="text" class="form-control" v-model.lazy="firstName">
                  <small class="form-text text-danger" v-bind:class="{ 'vis-hidden' : formValid.firstNameValid }" >Please enter first name.</small>
                </div>

                <div class="form-group">
                  <label>Last Name:</label>
                  <input type="text" class="form-control" v-model.lazy="lastName">
                  <small class="form-text text-danger" v-bind:class="{ 'vis-hidden' : formValid.lastNameValid }" >Please enter last name.</small>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="composit-header col-11">
                  <span class="composit-header-prim">
                    User Email
                  </span>
                  <span class="composit-header-sec">
                    Set the user email
                  </span>
                </div>

                 <div class="form-group">
                  <label>Email:</label>
                  <input type="text" class="form-control" v-model.lazy="email">
                  <small class="form-text text-danger" v-bind:class="{ 'vis-hidden' : formValid.emailValid }" >Please enter valid email.</small>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="composit-header col-11">
                  <span class="composit-header-prim">
                    Login Settings
                  </span>
                  <span class="composit-header-sec">
                    User login settings
                  </span>
                </div>

                <div class="form-group">
                  <label>Username:</label>
                  <input type="text" class="form-control" v-model.lazy="userName">
                  <small class="form-text text-danger" v-bind:class="{ 'vis-hidden' : formValid.userNameValid }" >Please enter username.</small>
                </div>

                <div class="form-group">
                  <label>Password:</label>
                  <input type="password" class="form-control" v-model.lazy="password" v-bind:disabled="randomPass == true">
                  <small class="form-text text-danger" v-bind:class="{ 'vis-hidden' : formValid.passwordValid }" >Please enter password.</small>
                </div>

                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" v-model="randomPass">
                  <label class="form-check-label"> Add random password to the user and send it on email including a little welcome message</label>
                </div>

                <button class="btn btn-primary float-right" v-on:click="nextPage" >Next</button>

              </div>

          </div>
        </div>





      </div>
    </div>
  </div>
</template>

<script>

import CoolB from './CoolB.vue'

export default {
  name: 'AddUser',
  components: {
    CoolB
  },
  data: function(){
    return {
      formValid: {
        firstNameValid: true,
        lastNameValid: true,
        emailValid: true,
        userNameValid: true,
        passwordValid: true,
        isFormValid: false
      }
    }
  },
  methods:{
    gotoPage: function(pg){
      if(pg > this.activepage){
        this.nextPage();
      }

    },
    nextPage: function(){
      this.formValid.isFormValid = true;

      this.checkFirstName(this.firstName);
      this.checkLastName(this.lastName);
      this.checkEmail(this.email);
      this.checkUserName(this.userName);
      this.checkPassword(this.password);


      if(this.formValid.isFormValid){
        this.$store.commit('nextPage');
      }
    },
    checkFirstName: function(vdata){
      if(vdata.trim()){
        this.formValid.firstNameValid = true;
      } else {
        this.formValid.firstNameValid = false;
        this.formValid.isFormValid = false;
      }
    },
    checkLastName: function(vdata){
      if(vdata.trim()){
        this.formValid.lastNameValid = true;
      } else {
        this.formValid.lastNameValid = false;
        this.formValid.isFormValid = false;
      }
    },
    checkEmail: function(vdata){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let em = re.test(String(vdata).toLowerCase());
      if(em){
        this.formValid.emailValid = true;
      } else {
        this.formValid.emailValid = false;
        this.formValid.isFormValid = false;
      }
    },
    checkUserName: function(vdata){
      if(vdata.trim()){
        this.formValid.userNameValid = true;
      } else {
        this.formValid.userNameValid = false;
        this.formValid.isFormValid = false;
      }
    },
    checkPassword: function(vdata){
      if(vdata || this.randomPass){
        this.formValid.passwordValid = true;
      } else {
        this.formValid.passwordValid = false;
        this.formValid.isFormValid = false;
      }
    }

  },
  computed: {
    pages(){
      return this.$store.state.pageManagement.pages
    },
    activepage(){
      return this.$store.state.pageManagement.activepage
    },
    firstName: {
      get(){
        return this.$store.state.userData.firstName;
      },
      set(value){
        this.$store.commit('updateUserFirstName', value);
        this.checkFirstName(value);
      }
    },
    lastName: {
      get(){
        return this.$store.state.userData.lastName;
      },
      set(value){
        this.$store.commit('updateUserLastName', value);
        this.checkLastName(value);
      }
    },
    email: {
      get(){
        return this.$store.state.userData.email;
      },
      set(value){
        this.$store.commit('updateUserEmail', value);
        this.checkEmail(value);
      }
    },
    userName: {
      get(){
        return this.$store.state.userData.userName;
      },
      set(value){
        this.$store.commit('updateUserUserName', value);
        this.checkUserName(value);
      }
    },
    password: {
      get(){
        return this.$store.state.userData.password;
      },
      set(value){
        this.$store.commit('updateUserPassword', value);
        this.checkPassword(value);

      }
    },
    randomPass: {
      get(){
        return this.$store.state.userData.randomPass;
      },
      set(value){
        this.$store.commit('updateRandomPassword', value);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
