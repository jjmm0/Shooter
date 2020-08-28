<template>
  <div class="wrapper">
      <div class="header">
        Shooter
      </div>
      <div class="gamemodes">
        <button @click="handleSwitch('solo')">Solo</button>
        <button @click="handleSwitch('multi')">2 graczy</button>
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