<template>
  <div class="add-tags">
    <div class="card">
      <div class="card-header text-center">
        <strong>Add Tags</strong>
      </div>
      <div class="card-body">

        <CoolB v-bind:pages="pages" v-bind:activepage="activepage" v-on:gotoPage="gotoPage"></CoolB>

        <div class="tags-container">
          <template  v-for="(item, index) in selectedTags">
            <span class="badge badge-success tag-item">
              {{ item }}
              <a  title="Click to remove"> X </a>
            </span>
          </template>
          <a class="add-tag-btn" v-if="addTagBtn" v-on:click="addTagBtn = false"><strong> + Add More </strong></a>

          <AddStringItem v-if="!addTagBtn" v-on:addNewTag="addNewTag" v-on:cancelAddTag="addTagBtn = !addTagBtn" v-bind:preloadTags="preloadTags"></AddStringItem>

        </div>

        <div style="padding-top:30px;"> <!-- Just a quick dirty way to add padding-->
          <button class="btn btn-primary" v-on:click="prevousPage">Back</button>
          <button class="btn btn-primary float-right" v-on:click="saveTags">Save</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import CoolB from './CoolB.vue'
import AddStringItem from './AddStringItem.vue'

export default {
  name: 'AddTags',
  components: {
    CoolB,
    AddStringItem
  },
  data: function(){
    return {
      addTagBtn : true,

    }
  },
  methods:{
    prevousPage: function(){
      this.$store.commit('previousPage');
    },
    gotoPage: function(pg){
      if(pg > this.activepage){
        this.saveTags();
      }
      if(pg < this.activepage){
        this.prevousPage();
      }
    },
    saveTags: function(){
      alert("Done");
    },
    addNewTag: function(tagval){
      this.$store.commit('updateSelectedTags', tagval);
    }
  },
  computed: {
    pages(){
      return this.$store.state.pageManagement.pages
    },
    activepage(){
      return this.$store.state.pageManagement.activepage
    },
    selectedTags: {
      get(){
        return this.$store.state.tags.selectedTags;
      },
      // set(value){
      //    this.$store.commit('updateSelectedTags', value);
      //  }
    },
    preloadTags: {
      get(){
        return this.$store.state.tags.preloadedTags;
      },

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
