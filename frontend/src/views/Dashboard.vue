<template>
  <div class="h-screen bg-[#232946] text-white flex flex-col">
    <Header />
    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 p-4">
        <h2 class="font-bold text-2xl">Bonjour {{ auth.user.firstName }}</h2>
        <p>Bienvenue sur votre tableau de bord</p>
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import {useAuthStore} from "@/store/auth.js";

const auth = useAuthStore();

</script>
