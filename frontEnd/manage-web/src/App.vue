<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  /* width: 100%; */
  background-image: url("./assets/pic.jpg");
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
</style>
