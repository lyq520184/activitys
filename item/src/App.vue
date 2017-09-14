<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
* {
  padding: 0;
  margin: 0;
}
body{
  font-size: 16px;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background: url("./imgs/bg.jpg") no-repeat;
  background-size: cover;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
