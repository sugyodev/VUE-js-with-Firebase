<template>
  <main class="login-form">
    <el-form label-width="80px" label-position="left">
      <el-form-item label="Email" data-vi="email">
        <el-input v-model="user.email"/>
      </el-form-item>

      <el-form-item label="Password" data-vi="password">
        <el-input v-model="user.password"/>
      </el-form-item>
      <div class="action-buttons">
        <el-form-item>
          <el-button type="primary" @click="onLogin()"><span data-vi="login">Login</span></el-button>
          <el-button type="primary" @click="onSignUp()"><span data-vi="signup">Signup</span></el-button>
        </el-form-item>
      </div>
    </el-form>
  </main>
</template>

<script setup>
  import { reactive } from 'vue';
  import { useAuthStore } from '@/stores/auth/auth-store'

  const user = reactive({
    email: '',
    password: '',
  })

  const store = useAuthStore()

  const onSignUp = () => {
    store.signUp(user)
  }

  const onLogin = () => {
    store.login(user)
  }

</script>

<style scoped>
  .login-form {
    display: flex;
    justify-content: center;
  }

  .action-buttons {
    display: flex;
    justify-content: center;
  }

</style>
