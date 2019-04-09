<template>

  <div class="add-tag-manage">
    <div class="tag-input-container">
      <input type="text" class="tag-input" v-on:keyup.enter="addTag" v-model="tagValue">
      <a class="tag-input-cancel" v-on:click="cancelAddTag"> X </a>
    </div>
    <ul class="tag-preload">
      <li class="tag-preload-add-all">
        <a class="tag-preload-add-one" v-on:click="addAllTags()">Add all tags</a>
      </li>
      <li v-for="item in preloadTags">
        <a class="tag-preload-add-one" v-on:click="addTag([item])">{{ item }}</a>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'AddStringItem',
  data(){
    return {
      tagValue: '',
    }
  },
  props: {
    preloadTags: Array

  },
  methods: {
    addTag(tgData){
      if(!Array.isArray(tgData)){
        if(typeof tgData === "object" ){
          tgData = [this.tagValue];
        }
      }
      this.$emit('addNewTag', tgData );
      this.tagValue = "";
    },
    addAllTags(){
      this.addTag(this.preloadTags);
    },
    cancelAddTag(){
      this.$emit('cancelAddTag');
    },
    onTagInputBlur(event){
      debugger;

    }
  }
}

</script>

<style scoped>

.add-tag-manage {
  display: inline-block;
}

.tags-container {
  min-height: 200px;
}

.tag-item {
  display: block;
  float:left;
  margin: 10px 10px 0 0;
  font-size:100%;
}

.tag-input-container {
  height: 24px;
  margin-top: 10px;
  padding:1px 4px;
  border:1px solid #aaa;
  border-radius: 3px;
}

.tag-input {
  height: 100%;
  width: 180px;
  border: none;
  display: block;
  float:left;
  outline: none;
}

.tag-input-cancel {
  height: 100%;
  border: none;
  display: block;
  float:left;
  line-height: 20px;
  padding: 0px 4px;
  cursor:pointer;
}

.tag-preload {
  list-style: none;
  margin-top: 1px;
  padding:4px;
  border:1px solid #aaa;
  border-radius:3px;
  max-height: 300px;
  overflow-y: scroll;
}

.tag-preload-add-all {
  border-bottom:1px solid #eee;

}

.tag-preload-add-all-chk {
  margin-top:4px;
}

.tag-preload-add-one {
  display: block;
  cursor: pointer;
  padding:0px 4px;
}

.tag-preload-add-one:hover {
  background-color:#efefef;
}




</style>
