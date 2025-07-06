<template>
  <header class="bg-white">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a class="block text-teal-600 mt-4" href="#">
        <img src="../assets/logo.png" alt="logo" class="h-30  w-auto">
      </a>

      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center text-sm">
            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Dashboard </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a @click="handleLogout" class="block rounded-md bg-[#2363BA] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700" href="#">
              Logout
            </a>
          </div>
        </div>
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
