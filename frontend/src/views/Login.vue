<template>
  <div class="flex justify-center items-center h-screen bg-white">
    <div class="w-[25%] rounded-lg p-5 bg-white text-white border-gray-300 border-[2px]">
      <h2 class="text-2xl text-black text-center font-bold">Connexion</h2>
      <form class="text-black">
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium">Email</label>
          <input
              v-model="user.email"
              type="email"
              id="email"
              class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
              placeholder="Votre email"
              required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-medium">Mot de passe</label>
          <input
              v-model="user.password"
              type="password"
              id="password"
              class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
              placeholder="*********"
              required
          />
        </div>
        <div class="flex-col flex mb-4">
          <button
              @click.prevent="handleLogin"
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 mx-auto sm:w-auto"
          >
            Connexion
          </button>
          <div v-if="successMessage" class="mb-4 mt-4 p-2 bg-green-100 text-green-800 rounded">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="mb-4 mt-4 p-2 bg-red-100 text-red-800 rounded">
            {{ errorMessage }}
          </div>
          <div class="flex justify-center mt-4 text-sm">
            <p>Vous n'avez pas de compte ?</p>
            <a href="/register" class="underline cursor-pointer ml-1">Inscription</a>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth.js'
const router = useRouter();
const auth = useAuthStore();

const user = ref({
  email: '',
  password: ''
});

let successMessage = ref('');
let errorMessage = ref('');

if (localStorage.getItem('token')) {
  router.push('/dashboard');
}

const handleLogin = async () => {
  successMessage.value = '';
  errorMessage.value = '';

  const result = await auth.login(user.value.email, user.value.password);

  if (result.success) {
    successMessage.value = 'Connexion réussie !';
    router.push('/dashboard');
  } else {
    errorMessage.value = result.message;
  }
};
</script>
