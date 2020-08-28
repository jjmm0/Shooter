<template>
  <div class="wrapper">

    <HomePage @change-gamemode="changeMode($event)"/>

    <div class="gra" v-show="mode == 'multi'">
      <MultiGame :mode="mode"/>
    </div>
  </div>
</template>
<script>
import HomePage from '~/components/HomePage.vue'
import MultiGame from '~/components/multiGame.vue'

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