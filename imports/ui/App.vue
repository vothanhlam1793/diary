<template>
  <div>
  <div class="">
    <router-link to="/">Note</router-link> |
    <router-link to="/task">Task</router-link> |
    <router-link to="/diary">Diary</router-link>
  </div>
  <hr>
  <div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
