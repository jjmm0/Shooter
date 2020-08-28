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
    //   //index variables

    //   //players
    //   player: {
    //     x: 10,
    //     y: 10,
    //     xSpeed: 0,
    //     ySpeed: 0
    //   },
    //   playerSize: 10,
    //   //buttons
    //   wPressed: false,
    //   sPressed: false,
    //   aPressed: false,
    //   dPressed: false,
    //   upPressed: false,
    //   downPressed: false,
    //   leftPressed: false,
    //   rightPressed: false,
    //   //speed variable
    //   SPEED: 1,
    //   speedLimit: 4,
    //   //obstacles
     
    }
  },
  computed:{

  },
  mixins:[

  ],
  props:{
      mode: String
  },
  // mounted(){
  //   this.animate()
  //   document.addEventListener('keydown', event => {
  //     switch (event.code) {
  //       case 'KeyW':
  //       this.wPressed = true;
  //       break;
  //     case 'KeyS':
  //       this.sPressed = true;
  //       break;
  //     case 'KeyA':
  //       this.aPressed = true;
  //       break;
  //     case 'KeyD':
  //       this.dPressed = true;
  //    }
  //   document.addEventListener('keyup', event => {
  //     switch (event.code) {
  //       case 'KeyW':
  //         this.wPressed = false;
  //       break;
  //       case 'KeyS':
  //         this.sPressed = false;
  //       break;
  //       case 'KeyA':
  //         this.aPressed = false;
  //       break;
  //       case 'KeyD':
  //         this.dPressed = false; 
  //       break;
  //     }
  // })
// })
  
  // methods:{
    // animate() {
      
    //   let {wPressed, sPressed, aPressed, dPressed, player, SPEED, speedLimit, canvas, context, playerSize} = this 
    //   canvas = document.querySelector('#game');
    //   context = canvas.getContext('2d');
    //   //
      

    //   if(this.mode == 'multi'){
    //   if (wPressed) {player.ySpeed = player.ySpeed - SPEED; }
    //   if (sPressed) {player.ySpeed = player.ySpeed + SPEED;}
    //   if (aPressed) {player.xSpeed = player.xSpeed - SPEED;}
    //   if (dPressed) {player.xSpeed = player.xSpeed + SPEED;}
    //   }
    //   // stopping movement
    //   if(!wPressed && player.ySpeed < 0){player.ySpeed -= 3/4 * player.ySpeed}
    //   if(!sPressed && player.ySpeed > 0){player.ySpeed -= 3/4 * player.ySpeed}
    //   if(!aPressed && player.xSpeed < 0){player.xSpeed -= 3/4 * player.xSpeed}
    //   if(!dPressed && player.xSpeed > 0){player.xSpeed -= 3/4 * player.xSpeed}
      
    //   if(player.xSpeed > speedLimit){player.xSpeed = speedLimit}
    //   if(player.xSpeed < -speedLimit){player.xSpeed = -speedLimit}
    //   if(player.ySpeed > speedLimit){player.ySpeed = speedLimit}
    //   if(player.ySpeed < -speedLimit){player.ySpeed = -speedLimit}

    //   player.x = player.x + player.xSpeed;
    //   player.y = player.y + player.ySpeed;
      
    //   //poruszanie
    //   context.clearRect(0, 0, canvas.width, canvas.height);    
    //   context.fillRect(player.x, player.y, playerSize, playerSize);
    //   //odbijanie
    //   if (player.x > canvas.width) {
    //       player.xSpeed = -player.xSpeed;
    //       player.x = canvas.width - playerSize;
    //   }
    //   if (player.y > canvas.height) {
    //       player.ySpeed = -player.ySpeed;
    //       player.y = canvas.height - playerSize;
    //   }
    //   if (player.x < 0) {
    //       player.xSpeed = -player.xSpeed;
    //       player.x = playerSize;
    //   }
    //   if (player.y < 0) {
    //       player.ySpeed = -player.ySpeed;
    //       player.y = playerSize;
    //   }

    //   requestAnimationFrame(() => {
    //       this.animate();
    //   });
    // },

  // }
}
</script>
<style scoped>
@import '~/assets/styles/indexStyles.css';
</style>