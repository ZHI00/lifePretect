<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div :class="$style.div"></div> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
  }
}
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>
