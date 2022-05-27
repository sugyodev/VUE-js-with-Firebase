<template>
  <main>
    <el-form>
      <el-form-item label="email" data-vi="email">
        <el-input v-model="form.email"/>
      </el-form-item>

      <el-form-item label="password" data-vi="password">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin" data-vi="login">Login</el-button>
        <el-button type="primary" @click="onSignup"><span data-vi="signup">Signup</span></el-button>
      </el-form-item>
    </el-form>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from '@/stores/main/main'

const form = reactive({
  email: '',
  password: '',
})



const store = useStore()

const onSignup = () => {
  store.setUser(form.email)
}

const onLogin = () => {

}

</script>

<style scoped>

</style>
