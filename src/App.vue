<template>
  <div id="bg">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    width: 100vw;
    height: 100vh;
  }
  #bg {
    width: 100vw;
    background-color: #f5f5ea;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
  }
</style>
