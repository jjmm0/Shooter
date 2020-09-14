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
    <audio ref="ptero" src="../assets/pterod.mp4" ></audio>
    <p>Głośność <strong>(UWAGA JEST GLOSNE W CHU)</strong></p>
    <Vol  @vol="changeVol($event)" id="volumeHandler"/>
  </div>
</template>
<script>
import Player from '~/components/playerComp.vue'
import Bullet from '~/classes/Bullet.js' 
import Vol from '~/components/Volume.vue' 

export default {
  components:{
    Player,
    Vol
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

      loopIndex: 0,
      volume: 0.50,
      bulletXAdd: 0,
      bulletYAdd: 0,
      playerXAdd: 10,
      playerYAdd: 10,

      p1:{xPos: 0,yPos: 0,playerSize: 0,id: 1, HP: 100},
      p2:{xPos: 0,yPos: 0,playerSize: 0,id: 2, HP: 100}

      
    }
  },
  computed:{

  },
  mounted(){
    this.animBullet()
    this.handleBullet()
  },
  methods:{
    changeVol(vol){
      this.volume = vol
    },
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    handleBullet(){

      requestAnimationFrame(() =>
      {
        this.bullets.forEach((bullet) => {
          if(bullet.active){
            this.checkHitbox(bullet)
          }
        });
      })
      requestAnimationFrame(()=> this.handleBullet())
    },

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
      bullets.push(new Bullet(args.id, args.yVel, args.xVel, 90, 10, args.xPos, args.yPos, true))
      
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
        if(bullet.active){
        bullet._yPos += bullet._yVelocity
        bullet._xPos += bullet._xVelocity
        context.fillStyle = 'green'
        context.fillRect(bullet._xPos, bullet._yPos, bullet._hitbox, bullet._hitbox)
        }
      });
    },
    
    checkHitbox(bullet){
        let {p1, p2, loopIndex, bulletXAdd, bulletYAdd, playerXAdd, playerYAdd} = this
        let dead1 = false
        let dead2 = false
        let dead3 = false
        let dead4 = false

        const krzyk = new Audio('../assets/pterod.mp3')
        // krzyk.volume = 0.1

        let canvas = document.querySelector('.game');
       let context = canvas.getContext('2d');
        //for player
        // let {i,j,k,l, m, n,o ,p} = this
        if((bullet._yPos > canvas.height) && (bullet._yPos < 0) &&  (bullet._xPos > canvas.width) && (bullet._xPos < 0)){
          bullet.active = false
        }

        
          
          if(bullet._number == 1){
            if((bullet._xPos < p2.xPos + 2 * p2.playerSize)
            && (bullet._yPos < p2.yPos + 2 * p2.playerSize)){
              while(loopIndex < 4){
                debugger
                if(loopIndex == 1){bulletXAdd = bullet._hitbox}
                if(loopIndex == 2){bulletXAdd = bullet._hitbox; bulletYAdd = bullet._hitbox}
                if(loopIndex == 3){bulletYAdd = bullet._hitbox; bulletXAdd = 0}

                if((bullet._xPos + bulletXAdd) >= p2.xPos && (bullet._xPos + bulletXAdd) <= (p2.xPos + p2.playerSize)){dead1 = true}
                if((bullet._yPos + bulletYAdd)>= p2.yPos && (bullet._yPos + bulletYAdd) <= (p2.yPos + p2.playerSize)){dead2 = true}
                
                if((bullet._xPos > p2.xPos + 2 * p2.playerSize) && (bullet._yPos > p2.yPos + 2 * p2.playerSize)){
                  break
                }
                // if(p2.yPos < bullet._yPos + j < (p2.yPos + p2.playerSize)){l++}
                if(dead1 && dead2){ 
                  // alert('dead')
                  // krzyk.play()
                  
                  
                  this.$refs.ptero.volume = this.volume
                  
                  this.$refs.ptero.play()
                  bullet.active = false
                  break
                }
                loopIndex += 1
              }
              
            }    
          } 
          if(bullet._number == 2){
            if((bullet._xPos < p1.xPos + 2 * p1.playerSize)
            && (bullet._yPos < p1.yPos + 2 * p1.playerSize)){
              while(loopIndex < 4){
                
                if(loopIndex == 1){bulletXAdd = bullet._hitbox}
                if(loopIndex == 2){bulletXAdd = bullet._hitbox; bulletYAdd = bullet._hitbox}
                if(loopIndex == 3){bulletXAdd = bullet._hitbox}

                if((bullet._xPos + bulletXAdd) >= p1.xPos && (bullet._xPos + bulletXAdd) <= (p1.xPos + p1.playerSize)){dead3 = true}
                if((bullet._yPos + bulletYAdd)>= p1.yPos && (bullet._yPos + bulletYAdd) <= (p1.yPos + p1.playerSize)){dead4 = true}
                
                if((bullet._xPos > p1.xPos + 2 * p1.playerSize) && (bullet._yPos > p1.yPos + 2 * p1.playerSize)){
                  break
                }
                // if(p2.yPos < bullet._yPos + j < (p2.yPos + p2.playerSize)){l++}
                if(dead3 && dead4){ 
                  // alert('dead')
                  this.$refs.ptero.volume = this.volume
                  this.$refs.ptero.play()
                  bullet.active = false
                  break
                }
                loopIndex += 1
              }
              
            }    
          } 
        

      
    },
  },
  
  props:{
      mode: String,
      
  },
}

</script>
<style scoped>
@import '~/assets/styles/indexStyles.css';
</style>