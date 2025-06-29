<template>
  <div class="flex justify-center items-center h-screen bg-white">
    <div class="w-[25%]  rounded-lg p-5 bg-white text-white border-gray-300 border-[2px]">
    <h2 class="text-2xl text-black text-center font-bold">Inscription</h2>
    <form class="text-black">
      <div class="mb-4">
        <label for="name" class="block mb-2 text-sm font-medium">Nom</label>
        <input v-model="user.lastName"
            type="text"
            id="lastName"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
            placeholder="Votre nom"
            required
            value="">
      </div>
      <div class="mb-4">
        <label for="name" class="block mb-2 text-sm font-medium">Prénom</label>
        <input v-model="user.firstName"
            type="text"
            id="firstName"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
            placeholder="Votre prénom"
            required
            value="">
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium">Email</label>
        <input v-model="user.email"
            type="email"
            id="email"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg 0 w-full py-2.5 px-4"
            placeholder="Votre email"
            required
            value="">
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2 text-sm font-medium">Mot de passe</label>
        <input v-model="user.password"
            type="password"
            id="password"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-2.5 px-4"
            placeholder="*********"
            required
            value="">
      </div>
      <div>
        <p class="text-red-500 pb-5"></p>
      </div>
      <div class="flex-col flex mb-4">
        <button @click="submitForm"
            type="button"
            class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 mx-auto sm:w-auto">
          Inscription
        </button>
        <div v-if="successMessage" class="mb-4 mt-4 p-2 bg-green-100 text-green-800 rounded">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="mb-4 mt-4 p-2 bg-red-100 text-red-800 rounded">
          {{ errorMessage }}
        </div>
        <div class="flex justify-center mt-4 text-sm">
          <p>Vous avez déjà un compte?</p>
          <p class="underline cursor-pointer ml-1">Connexion</p>
        </div>
      </div>
    </form>
  </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const user = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})

let successMessage = ref('')
let errorMessage = ref('')

const submitForm = async () => {
  successMessage.value = '';
  errorMessage.value = '';
  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user.value)
    });

    if (response.ok) {
      successMessage.value = 'Inscription réussie !';
    } else {
      errorMessage.value = 'Erreur lors de l\'inscription !';
    }
  } catch (error) {
    console.error(error);
    errorMessage.value = 'Impossible de contacter le serveur.';
  }
};

</script>
