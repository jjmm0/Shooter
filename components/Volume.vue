<template>
    <div>
        <input type="range" min="0" max="100" id="volumeSlider" v-model="volume" @change="changeVolume()" />
    </div>
</template>

<script>
export default {
    data(){
        return{
            volume: 50,
        }
    },
    methods:{
        changeVolume(){
            this.$emit('vol', this.volume /100)
        }
    }
}
</script>