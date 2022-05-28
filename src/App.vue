<script setup>
import LogIn from './components/login/LogIn.vue'
</script>

<template>
    <h1 data-cy="title">VuFire</h1>
    <div class="login-form">
      <LogIn/>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.login-form {
  display: flex;
  justify-content: center;
}

</style>
