<template>
  <div class="wrapper">
    <div class="gra">
      <canvas class="game" width="800" height="800">
      </canvas>
      <canvas id="game" width="800" height="800"></canvas>
      <button id="newbul" @click="newBullet()">asdfasdf</button>{{}}
      <Player :id="1" :mode="mode" :sendData="sendData" :neededId="neededId" @shot-by="handleShot($event)" 
      @check-hitbox="checkHitbox($event)" @sending-data="handleSentData($event)"/>
      <Player :id="2" :mode="mode" :sendData="sendData" :neededId="neededId" @shot-by="handleShot($event)" 
      @check-hitbox="checkHitbox($event)" @sending-data="handleSentData($event)"/>
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
      sendData: false,
      neededId: 0, 
      // timeout: false
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      p1:{xPos,yPos,playerSize,id},
      p2:{xPos,yPos,playerSize,id}

      
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
    async animBullet(){
      await this.paintBullets()

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
    handleSentData(playerData){
      if(playerData.id == 1){
        p1.xPos = playerData.xPos
        p1.yPos = playerData.yPos
        p1.playerSize = playerData.playerSize
        p1.id = playerData.id
      }
      if(playerData.id == 2){
        p2.xPos = playerData.xPos
        p2.yPos = playerData.yPos
        p2.playerSize = playerData.playerSize
        p2.id = playerData.id
      }
      
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
      this.sendData = true
      if(args.id == 2){this.neededId = 1}
      if(args.id == 1){this.neededId = 2 }
      let playerXPosition = args.xPos;
      let playerYPosition = args.yPos;
      let playerNum = args.id;
      let playerSize = args.playerSize;

      
      //for player
      let {i,j,k,l} = this
      console.log('działa')
      this.bullets.forEach(bullet =>  {     
        
        if((bullet._number != playerNum) && (bullet._xPos < playerXPosition + 2 * playerSize) && (bullet._yPos < playeryYPosition + 2 * playerSize))
        {
          while(i == 0 && j == 0)
          if(playerXPosition < bullet._xPos + i < (playerXPosition + playerSize)){console.log('działa')}
          i += bullet._hitbox
          if(playerYPosition < bullet._yPos + j < (playerYPosition + playerSize)){console.log('//////działa')}
          j += bullet._hitbox
        }

        //don't touch//////////////////////////////////////////////
        // while((10 * j + i < playerSize * playerSize) && 10 * l + k < bullet._hitbox * bullet._hitbox){
          
        //   console.log(`-----------PLAYER pixel number = ${i} and ${j}`)
        //   while(k <10 && l < 10){
          
        //     console.log(`bullet pixel number = ${k} and ${l}`)
        //     if((Math.floor(playerXPosition + i) == Math.floor(bullet._xPos + k)) 
        //     && (Math.floor(playerYPosition + j) == Math.floor(bullet._yPos + l)) 
        //     && bullet._number != playerNum)
        //     {
        //       console.log('działa')
        //       debugger
        //     }

        //     //ending of loop


        //     k++
            
        //     if(k == bullet._hitbox){
        //       k = 0;
        //       l++;
        //       }
        //     }

        //     //ending of loop
        //     i++
        //     if(i == playerSize){
        //       i = 0;
        //       j += 1;
              
        //     }
        //   }
        // })
      })
    },
  },
  
  props:{
      mode: String
  },
}

</script>
<style scoped>
@import '~/assets/styles/indexStyles.css';
</style>