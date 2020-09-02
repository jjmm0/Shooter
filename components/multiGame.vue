<template>
  <div class="wrapper">
    <div class="gra">
      <canvas class="game" width="800" height="800">
      </canvas>
      <canvas id="game" width="800" height="800"></canvas>
      <button id="newbul" @click="newBullet()">asdfasdf</button>{{}}
      <Player :id="1" :mode="mode" @shot-by="handleShot($event)" @check-hitbox="checkHitbox($event)"/>
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
      // timeout: false
      
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

        this.newBullet(args)

    },
    newBullet(args){
      let {bullets, playerId} = this
      bullets.push(new Bullet(args.id, args.yVel, args.xVel, 90, 10, args.xPos, args.yPos))
    },
    paintBullets(){
      //variables
      let canvas = document.querySelector('.game');
      let context = canvas.getContext('2d');
      let {bullets, } = this
      
      context.clearRect(0, 0, canvas.width, canvas.height)
      this.bullets.forEach(bullet => {
        
        bullet._yPos += bullet._yVelocity
        bullet._xPos += bullet._xVelocity
        context.fillStyle = 'green'
        context.fillRect(bullet._xPos, bullet._yPos, bullet._hitbox, bullet._hitbox)
      });
    },
    checkHitbox(args){
      let playerXPosition = args.xPos;
      let playerYPosition = args.yPos;
      let playerNum = args.id;
      let playerSize = args.playerSize;

      
      //for player
      let i = 0
      let j = 0
      //for bullet
      let k = 0
      let l = 0
      this.bullets.forEach(bullet =>  {     
        while(10 * j + i < playerSize){

          while(10 * l + k < bullet._hitbox){
          
            
            if((playerXPosition + i == bullet._xPos + k) && (playerYPosition + j == bullet._Pos + l))
            {
              console.log('działa')
            }

            //ending of loop
            k++
            if(k == bullet._hitbox){k = 0, l++}
          }

          //ending of loop
          i++
          if(i == playerSize){i = 0, j++}
        }
      })


      

      
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