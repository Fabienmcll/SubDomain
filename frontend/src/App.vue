<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from './store/auth'

const authStore = useAuthStore()

onMounted(async () => {
  if (authStore.token && !authStore.user) {
    await authStore.fetchUser()
  }
})
</script>