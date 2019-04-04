<!-- Very Cool Breadcrumb -->
<template>
  <div class="coolb-cont">
    <div class="coolb">
      <template v-for="(value, key) in pages">
        <div class="coolb-spacer" v-if="key+1 > 1" ></div>
        <a class="coolb-circ" v-bind:class="(key+1 === activepage) ? 'active' : ''">
          {{key + 1}}
          <span class="coolb-txt">{{value}}</span>
        </a>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CoolB',
  computed: {
    pages(){
      return this.$store.state.pageManagement.pages
    },
    activepage(){
      return this.$store.state.pageManagement.activepage
    }
  }
}

</script>

<style scoped>
.coolb-cont {
    padding:40px 40px 60px 40px;
}

.coolb {
  display:flex;
  justify-content: center;
}

.coolb .coolb-circ {
  flex-basis: 42px;
  flex-grow:0;
  flex-shrink:0;

  height:42px;
  border-radius:21px;
  border:2px solid #717171;
  color: #717171;
  font-size:16px;
  line-height: 36px;
  text-align: center;
  font-weight: bold;
  cursor:pointer;
  position: relative;
}

.coolb .coolb-circ:hover {
  cursor:pointer;
}

.coolb .coolb-circ.active {
  border-color:#7938e6;
  color:#333;
  box-shadow:-3px 3px 5px #eee;
}

.coolb-txt {
  position: absolute;
  display: block;
  line-height: 22px;
  font-size:16px;
  top:45px;
  width:150px;
  left:calc(50% - 75px);
}

.coolb-spacer {
  flex-basis:370px;
  flex-grow:0;
  flex-shrink:1;

  margin-top: 20px;
  height: 3px;
  background-color: #eeeeee;
}
</style>
