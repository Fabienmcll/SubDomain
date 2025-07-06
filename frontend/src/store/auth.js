import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null
    }),

    getters: {
        isLoggedIn: (state) => !!state.token
    },

    actions: {
        async login(email, password) {
            try {
                const response = await fetch('http://localhost:3000/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                    credentials: 'include'
                });
                const data = await response.json();

                if (response.ok && data.token) {
                    this.user = data.user;
                    this.token = data.token;
                    localStorage.setItem('token', data.token);
                    return { success: true };
                } else {
                    return { success: false, message: data.message || 'Erreur lors de la connexion' };
                }
            } catch (error) {
                return { success: false, message: 'Impossible de contacter le serveur.' };
            }
        },

        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('token');
        }
    }
})
