<template>
  <div class="wrapper">

      <div class="header">
        <img src="~/assets/images/shooter.gif">

      </div>
    <HomePage @change-gamemode="changeMode($event)" v-if="!mode"/>
    <div class="gra" v-if="mode == 'multi'">
      <MultiGame :mode="mode" class="canvas"/>
    </div>
    <div class="controls">
      Gracz 1: WSAD = poruszanie SPACJA = strzał
      <br>
      Gracz 2: STRZAŁKI = poruszanie SLASH = strzał
    </div>
    
  </div>
</template>
<script>
import HomePage from '~/components/HomePage.vue'
import MultiGame from '~/components/multiGame.vue'
import Bullet from '~/classes/Bullet.js'
export default {
  components:{
    HomePage,
    MultiGame
  },
  data(){
    return{
      //index variables
      showGame: false,
      mode: '',
      Bullet
    }
  },
  methods:{
    changeMode(mode){
      this.mode = mode
    },
  }
}
</script>
<style scoped>
  @import '~/assets/styles/indexStyles.css';
</style>