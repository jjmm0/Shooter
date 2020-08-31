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
        x: 100,
        y: 100,
        xSpeed: 0,
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
      SPEED: 1,
      speedLimit: 5,
      slowing: 0.1,
      //obstacles
      //id
      i: 0,

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
          break;
        }
      })
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
    document.addEventListener('keydown', event => {
      // let {wPressed, sPressed, aPressed, dPressed} = this
      switch (event.code) {
        case 'ArrowUp':
        this.upPressed = true; 
        break;
      case 'ArrowDown':
        this.downPressed = true;
        break;
      case 'ArrowLeft':
        this.leftPressed = true;
        break;
      case 'ArrowRight':
        this.rightPressed = true;
        break;
      }})
    document.addEventListener('keyup', event => {
      switch (event.code) {
        case 'ArrowUp':
          this.upPressed = false;
        break;
        case 'ArrowDown':
          this.downPressed = false;
        break;
        case 'ArrowLeft':
          this.leftPressed = false;
        break;
        case 'ArrowRight':
          this.rightPressed = false; 
        break;
      }
    }) 
  },
  methods:{
    animate() {
      
      let {id,wPressed, sPressed, aPressed, dPressed, upPressed, downPressed, leftPressed, rightPressed, player, slowing, SPEED, speedLimit, canvas, context, playerSize} = this 
      canvas = document.querySelector('#game');
      context = canvas.getContext('2d');
      if(player.xSpeed <0 )debugger

      if(this.mode == 'multi'){
        if(id == 1){ 
          if ((player.y > 0) && wPressed){player.ySpeed = player.ySpeed - SPEED;}
          if (player.y < canvas.height && sPressed) {player.ySpeed = player.ySpeed + SPEED;}
          if ((player.x > 0) && aPressed){player.xSpeed = player.xSpeed - SPEED;}
          if (player.x < canvas.width && dPressed) {player.xSpeed = player.xSpeed + SPEED;}
        }
        else if(id == 2){ // for arrows
          if (player.y > 0 && upPressed){player.ySpeed = player.ySpeed - SPEED;}
          if (player.y < canvas.height && downPressed) {player.ySpeed = player.ySpeed + SPEED;}
          if ((player.x > 0) && leftPressed){player.xSpeed = player.xSpeed - SPEED;}
          if (player.x < canvas.width && rightPressed) {player.xSpeed = player.xSpeed + SPEED;}
        }
          //map limits
        if(this.mode){
          if(id == 1){
            if(player.y < 1){wPressed = false; slowing = speedLimit; player.y = 1}
            if(player.y > canvas.height){sPressed = false; slowing = speedLimit; player.y = 789}
            if(player.x < 1){aPressed = false; slowing = speedLimit; player.x = 1}
            if(player.x > canvas.width){dPressed = false; slowing = speedLimit; player.x = 789}
          }
        }
        //for arrows
        if(id == 2){
          if(player.y < 1){upPressed = false; slowing = speedLimit; player.y = 1}
          if(player.y > canvas.height){downPressed = false; slowing = speedLimit; player.y = 789}
          if(player.x < 0){leftPressed = false; slowing = speedLimit; player.x = 1}
          if(player.x > canvas.width){rightPressed = false; slowing = speedLimit; player.x = 789}   
        }
      }
      // stopping movement
      if(id == 1)
        {if(!wPressed && player.ySpeed < 0){player.ySpeed = player.ySpeed + slowing; if(player.ySpeed > 0){player.ySpeed = 0}}
        if(!sPressed && player.ySpeed > 0){player.ySpeed =  player.ySpeed - slowing; if(player.ySpeed < 0){player.ySpeed = 0}}  
        if(!aPressed && player.xSpeed < 0){player.xSpeed = player.xSpeed + slowing; if(player.xSpeed > 0){player.xSpeed = 0}}
        if(!dPressed && player.xSpeed > 0){player.xSpeed = player.xSpeed - slowing; if(player.xSpeed < 0){player.xSpeed = 0}}}
        //stopping for arrows
        if(id == 2){
        {if(!upPressed && player.ySpeed < 0){player.ySpeed = player.ySpeed + slowing; if(player.ySpeed > 0){player.ySpeed = 0}}
        if(!downPressed && player.ySpeed > 0){player.ySpeed =  player.ySpeed - slowing; if(player.ySpeed < 0){player.ySpeed = 0}}  
        if(!leftPressed && player.xSpeed < 0){player.xSpeed = player.xSpeed + slowing; if(player.xSpeed > 0){player.xSpeed = 0}}
        if(!rightPressed && player.xSpeed > 0){player.xSpeed = player.xSpeed - slowing; if(player.xSpeed < 0){player.xSpeed = 0}}}
        }
      //Speed limit
        if(player.xSpeed > speedLimit){player.xSpeed = speedLimit}
        if(player.xSpeed < -speedLimit){player.xSpeed = -speedLimit}
        if(player.ySpeed > speedLimit){player.ySpeed = speedLimit}
        if(player.ySpeed < -speedLimit){player.ySpeed = -speedLimit}
      //adding speed
        player.x = player.x + player.xSpeed;
        player.y = player.y + player.ySpeed;

      //poruszanie
        if(id == 1){context.clearRect(0, 0, canvas.width, canvas.height)};    
        context.fillStyle = 'red'
        if(this.id == 1){context.fillRect(player.x, player.y, playerSize, playerSize);}
        context.fillStyle = 'blue'
        if(this.id == 2){context.fillRect(player.x, player.y, playerSize, playerSize);}
        this.i++
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