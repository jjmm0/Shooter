<template>
  <div class="wrapper">
    <div class="gra">
      <canvas class="game" width="800" height="800">
      </canvas>
      <canvas id="game" width="800" height="800"></canvas>
      
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
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      p1:{xPos: 0,yPos: 0,playerSize: 0,id: 0},
      p2:{xPos: 0,yPos: 0,playerSize: 0,id: 0}

      
    }
  },
  computed:{

  },
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
      let {p1, p2} = this
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
      
      let {p1, p2} = this
      
      //for player
      let {i,j,k,l, m, n,o ,p} = this
      this.bullets.forEach(bullet =>  {     
        
        if(bullet._number == 1){
          if((bullet._xPos < p2.xPos + 2 * p2.playerSize)
          && (bullet._yPos < p2.yPos + 2 * p2.playerSize))
          {
            while(i == 0 && j == 0){
              if(p2.xPos < bullet._xPos + i < (p2.xPos + p2.playerSize)){k++}
              i += bullet._hitbox
              if(p2.yPos < bullet._yPos + j < (p2.yPos + p2.playerSize)){l++}
              j += bullet._hitbox

              if(k && l){
                alert('p2 died')
                break
              }
            }
          }
        }
        if(bullet._number == 2){
          if((bullet._xPos < p1.xPos + 2 * p1.playerSize)
          && (bullet._yPos < p1.yPos + 2 * p1.playerSize))
          {
            while(i == 0 && j == 0){
              if(p1.xPos < bullet._xPos + o < (p1.xPos + p1.playerSize)){m++}
              o += bullet._hitbox
              if(p1.yPos < bullet._yPos + p < (p1.yPos + p1.playerSize)){n++}
              p += bullet._hitbox

              if(m && n){
                debugger
                break
              }
            }
          }
        }


        //FIRST//////////////
        // if((bullet._number != playerNum) && (bullet._xPos < playerXPosition + 2 * playerSize) && (bullet._yPos < playeryYPosition + 2 * playerSize))
        // {
        //   while(i == 0 && j == 0)
        //   if(playerXPosition < bullet._xPos + i < (playerXPosition + playerSize)){console.log('debugger')}
        //   i += bullet._hitbox
        //   if(playerYPosition < bullet._yPos + j < (playerYPosition + playerSize)){console.log('//////działa')}
        //   j += bullet._hitbox
        // }
        //////////////////////////
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