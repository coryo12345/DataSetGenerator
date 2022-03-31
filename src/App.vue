<template>
  <div class="mx-6 pt-4">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "assets/styles.scss";

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: $background;
  min-height: 100vh;
  min-width: 100vw;
}

// Fixes white background for Mac browsers where you
//    can scroll outside the body temporarily
html {
  background-color: $background;
}
</style>
