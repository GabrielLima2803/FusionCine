<template>
    <header-principal />
    <div class="container">
        <h1>Redefinir Senha</h1>
        <form v-if="!success" @submit.prevent="resetPassword">
            <label for="token">Token:</label>
            <input v-model="token" type="text" id="token" required />
            <label for="newPassword">Nova Senha:</label>
            <input v-model="newPassword" type="password" id="newPassword" required />
            <button type="submit">Redefinir Senha</button>
        </form>

        <div v-if="error" class="error-message">
            <p>{{ errorMessage }}</p>
        </div>

        <div v-if="success" class="success-message">
            <p>{{ successMessage }}</p>
            <router-link class="reset" to="/login">
                <button >Voltar para a tela de login</button>
            </router-link>
        </div>
    </div>

    <full-footer />
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';

const token = ref('');
const newPassword = ref('');
const success = ref(false);
const successMessage = ref('');
const error = ref(false);
const errorMessage = ref('');

const resetPassword = async () => {
    try {
        const response = await axios.post('http://localhost:3000/reset-password', { token: token.value, newPassword: newPassword.value });
        console.log(response.data.message);

        success.value = true;
        successMessage.value = response.data.message;
    } catch (error) {
        console.error('Erro ao redefinir senha:', error);
        alert('Erro ao redefinir senha:')

        if (error.response && error.response.status === 400) {
            error.value = true;
            errorMessage.value = error.response.data.message;
        } else {
            error.value = true;
            errorMessage.value = 'Erro ao redefinir senha. Tente novamente mais tarde.';
        }
    }
};
</script>

<style scoped>
/* styles.css */

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    max-width: 400px;
    margin: 50px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 200px;
    background-color: #222121;
}

form {
    display: flex;
    flex-direction: column;
}

h1 {
    color: #ffffff;
    font-size: 30px;
    margin-bottom: 30px;
}

label {
    margin-bottom: 8px;
    color: #ffffff;
}

input {
    padding: 10px;
    margin-bottom: 16px;
    color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.error-message {
    color: #e74c3c;
    margin-top: 20px;
    font-size: 18px;
}
button {
    background-color: #ffffff;
    color: #000000;
    padding: 12px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #929292;
}

.success-message {
    color: #2ecc71;
    margin-top: 20px;
    font-size: 18px;
}

.reset {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    margin-top: 20px;
    display: inline-block;
    transition: color 0.3s ease;
}

.reset:hover {
    color: #868686;
}

</style>
  