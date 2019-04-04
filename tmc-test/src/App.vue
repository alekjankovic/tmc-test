<template>
  <div id="app">
    <div class="app-container  container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
          <AddUser v-if="activepage==1"></AddUser>
          <AddTags v-if="activepage==2"></AddTags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue'
import AddTags from './components/AddTags.vue'

export default {
  name: 'app',
  components: {
    AddUser,
    AddTags
  },
  computed: {
    activepage(){
      return this.$store.state.pageManagement.activepage
    }
  }
}
</script>
