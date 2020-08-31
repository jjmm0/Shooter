<template>
  <div class="wrapper">

      <div class="gamemodes">
        <button @click="handleSwitch('solo')">
          <img src="~/assets/images/solo.gif">
        </button>
        <button @click="handleSwitch('multi')">
          <img src="~/assets/images/2graczy.gif">
        </button>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    handleSwitch(mode){
      this.$emit('change-gamemode',mode)
    }
  } 
}
</script>

<style scoped>
@import '~/assets/styles/homePageStyles.css';
</style>