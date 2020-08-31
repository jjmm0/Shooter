<template>
  <div class="wrapper">
    <div class="gra">
      <canvas id="game" width="800" height="800"></canvas>
      <Player :id="1" :mode="mode"/>
      <Player :id="2" :mode="mode"/>
    </div>
  </div>
</template>
<script>
import Player from '~/components/playerComp.vue'

export default {
  components:{
    Player
  },
  data(){
    return{

    }
  },
  computed:{

  },
  mixins:[

  ],
  props:{
      mode: String
  },
  
}
</script>
<style scoped>
@import '~/assets/styles/indexStyles.css';
</style>