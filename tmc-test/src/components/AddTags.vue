<template>
  <div class="add-tags">
    <div class="card">
      <div class="card-header text-center">
        <strong>Add Tags</strong>
      </div>
      <div class="card-body">

        <CoolB></CoolB>

        <div class="form-container">
          Add Tags


          <button class="btn btn-primary" v-on:click="prevousPage">Back</button>
        </div>





      </div>
    </div>
  </div>
</template>

<script>

import CoolB from './CoolB.vue'

export default {
  name: 'AddTags',
  components: {
    CoolB
  },
  data: function(){
    return {
      
    }
  },
  methods:{
    prevousPage: function(){
      this.$store.commit('previousPage');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
