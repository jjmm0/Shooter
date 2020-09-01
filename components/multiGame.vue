<template>
  <div class="wrapper">
    <div class="gra">
      <canvas class="game" width="800" height="800">
      </canvas>
      <canvas id="game" width="800" height="800"></canvas>
      <button id="newbul" @click="newBullet()">asdfasdf</button>{{bullets}}
      <Player :id="1" :mode="mode" @shot-by="handleShot($event)"/>
      <Player :id="2" :mode="mode" @shot-by="handleShot($event)"/>
    </div>
  </div>
</template>
<script>
import Player from '~/components/playerComp.vue'
import Bullet from '~/classes/Bullet.js'

export default {
  components:{
    Player
  },
  data(){
    return{
      bullets:[],
      playerId: 0,
      i: 0,
      
      
    }
  },
  computed:{

  },
  mixins:[

  ],
  mounted(){
    this.animBullet()
  },
  methods:{
    animBullet()
    {
      this.paintBullets()
      this.i++;
        setTimeout(() => {
          requestAnimationFrame(this.animBullet())
          }, 100);

    },
    handleShot(id){
      console.log(id)
      this.playerId = id
    },
    newBullet(){
      let {bullets, playerId} = this
      bullets.push(new Bullet(playerId, 1, 2, 9, 10, 200, 200))
      bullets.push(new Bullet(playerId, 1, 2, 9, 10, 300, 200))
      bullets.push(new Bullet(playerId, 1, 2, 9, 10, 400, 200))
      // this.animBullet()
    },
    paintBullets(){
      
      let canvas = document.querySelector('.game');
      let context = canvas.getContext('2d');
      let {bullets, } = this
      
      this.bullets.forEach(bullet => {
        
        context.fillStyle = 'green'
        context.fillRect(bullet._xPos, bullet._yPos, bullet._hitbox, bullet._hitbox)
        console.log(bullet._xPos, bullet._yPos, bullet._hitbox, bullet._hitbox)
        // context.clearRect(0, 0, canvas.width, canvas.height)
      });
    }
  },
  props:{
      mode: String
  },
  
}
</script>
<style scoped>
@import '~/assets/styles/indexStyles.css';
</style>