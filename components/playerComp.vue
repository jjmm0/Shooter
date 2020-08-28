<template>
  <div class="wrapper">
    <div class="gra">
      <!-- <canvas id="game" width="800" height="800"></canvas> -->
    </div>
  </div>
</template>
<script>

export default {

  data(){
    return{
      //index variables

      //players
      player: {
        x: 10,
        y: 10,
        xSpeed: 1,
        ySpeed: 0
      },
      playerSize: 10,
      //buttons
      wPressed: false,
      sPressed: false,
      aPressed: false,
      dPressed: false,
      upPressed: false,
      downPressed: false,
      leftPressed: false,
      rightPressed: false,
      //speed variable
      SPEED: 10,
      speedLimit: 10,
      slowing: 3/4
      //obstacles
      //id

    }
  },
  computed:{

  },
  mixins:[

  ],
  props:{
      mode: String,
      id: Number
  },
  mounted(){
    this.animate()
      // let {wPressed, sPressed, aPressed, dPressed} = this;
    document.addEventListener('keydown', event => {
      // let {wPressed, sPressed, aPressed, dPressed} = this
      switch (event.code) {
        case 'KeyW':
        this.wPressed = true; 
        break;
      case 'KeyS':
        this.sPressed = true;
        break;
      case 'KeyA':
        this.aPressed = true;
        break;
      case 'KeyD':
        this.dPressed = true;
     }
    document.addEventListener('keyup', event => {
      switch (event.code) {
        case 'KeyW':
          this.wPressed = false;
        break;
        case 'KeyS':
          this.sPressed = false;
        break;
        case 'KeyA':
          this.aPressed = false;
        break;
        case 'KeyD':
          this.dPressed = false; 
        break;
      }
  })
})
  },
  methods:{
    animate() {
      
      let {id, wPressed, sPressed, aPressed, dPressed, player, slowing, SPEED, speedLimit, canvas, context, playerSize} = this 
      canvas = document.querySelector('#game');
      context = canvas.getContext('2d');
      slowing = 3/4
      //
      // if (player.x >= canvas.width) {
      //   dPressed = false
      // }
      // if (player.y >= canvas.height) {
      //   sPressed = false
      // }
      // if (player.x <= canvas.width) {
      //   wPressed = false
      // }
      // if (player.y <= canvas.height) {
      //   aPressed = false
      // }
    

      if(this.mode == 'multi'){
        
        if (player.y > 0 ) {;if(wPressed){;player.ySpeed = player.ySpeed - SPEED;}}
        if (player.y < canvas.height && sPressed) {;player.ySpeed = player.ySpeed + SPEED;}
        if (player.x > 0) {; if(aPressed){player.xSpeed = player.xSpeed - SPEED;}}
        if (player.x < canvas.width && dPressed) {player.xSpeed = player.xSpeed + SPEED;}
      }
      if(player.y < 1){wPressed = false; slowing = 1; player.y = 1}
      if(player.y > canvas.height){sPressed = false; slowing = 1; player.y = 789}
      if(player.x < 0){aPressed = false; slowing = 1; player.x = 1}
      if(player.x > canvas.width){dPressed = false; slowing = 1; player.x = 789}
      // stopping movement
      if(!wPressed && player.ySpeed < 0){player.ySpeed -= slowing * player.ySpeed}
      if(!sPressed && player.ySpeed > 0){player.ySpeed -= slowing * player.ySpeed}
      if(!aPressed && player.xSpeed < 0){player.xSpeed -= slowing * player.xSpeed}
      if(!dPressed && player.xSpeed > 0){player.xSpeed -= slowing * player.xSpeed}
      //Speed limit
      if(player.xSpeed > speedLimit){player.xSpeed = speedLimit}
      if(player.xSpeed < -speedLimit){player.xSpeed = -speedLimit}
      if(player.ySpeed > speedLimit){player.ySpeed = speedLimit}
      if(player.ySpeed < -speedLimit){player.ySpeed = -speedLimit}

      player.x = player.x + player.xSpeed;
      player.y = player.y + player.ySpeed;
      
      //poruszanie
      if(false){context.clearRect(player.x - 10, player.y - 10, player.x + playerSize, player.y + playerSize)};    
      if(id == 1){context.clearRect(0, 0, canvas.width, canvas.height)};    
      if(this.id == 1){context.fillRect(player.x, player.y, playerSize, playerSize);}
      if(this.id == 2){context.fillRect(player.x, player.y, playerSize, playerSize);}
       
      requestAnimationFrame(() => {
          this.animate();
      });
    },

  },
}
</script>
<style scoped>
@import '~/assets/styles/indexStyles.css';
</style>