<template>
  <header class="bg-[#2A2F4A] border-b border-[#3E5C76]">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8 text-white justify-between">
      <a class="block text-teal-600" href="#">
        <img src="../assets/logo.png" alt="logo" class="h-30 w-auto" />
      </a>

      <div class="sm:flex sm:gap-4">
        <a @click="handleLogout" class="block rounded-md bg-[#5478A6] px-5 py-2.5 text-sm font-bold text-[#F1F6F9] transition hover:bg-[#3E5C76]" href="#">
          Deconnexion
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth.js'

const router = useRouter()
const auth = useAuthStore()

const handleLogout = () => {
  auth.logout()
  router.push('/')
}
</script>
