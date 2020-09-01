<template>
  <div class="wrapper">
    <div class="gra">
      <canvas class="game" width="800" height="800">
      </canvas>
      <canvas id="game" width="800" height="800"></canvas>
      <button id="newbul" @click="newBullet()">asdfasdf</button>{{}}
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
    async animBullet()
    {
      await this.paintBullets()
      this.i++;
      requestAnimationFrame(() => {
          this.animBullet();
      });

    },
    handleShot(args){
      console.log(args.id)
      this.newBullet(args)
    },
    newBullet(args){
      let {bullets, playerId} = this
      
        bullets.push(new Bullet(args.id, args.yVel, args.xVel, 90, 10, args.xPos, args.yPos))
      // this.animBullet()
    },
    paintBullets(){
      
      let canvas = document.querySelector('.game');
      let context = canvas.getContext('2d');
      let {bullets, } = this
      
      context.clearRect(0, 0, canvas.width, canvas.height)
      this.bullets.forEach(bullet => {
        bullet._yPos += bullet._yVelocity
        bullet._xPos += bullet._xVelocity
        context.fillStyle = 'green'
        context.fillRect(bullet._xPos, bullet._yPos, bullet._hitbox, bullet._hitbox)

        
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