<script setup>
import axios from 'axios'
import {ref} from 'vue'

const currentPasswordRef = ref('')
const newPasswordRef = ref('')


const changePassword = async () => {
  try {
    const response = await axios.post(
      'http://localhost:3000/forget',
      {
        currentPassword: currentPasswordRef.value,
        newPassword: newPasswordRef.value,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response.data.message);
    // Lógica adicional se necessário, como exibir uma mensagem de sucesso
  } catch (error) {
    console.error('Erro ao alterar a senha:', error.message);
    // Lógica adicional para lidar com erros, como exibir uma mensagem de erro
  }
};
</script>

<template>
    <div>
  
      <div class="input-box">
        <label>Senha Atual</label>
        <input v-model="currentPasswordRef" type="password" required />
      </div>
  
      <div class="input-box">
        <label>Nova Senha</label>
        <input v-model="newPasswordRef" type="password" required />
      </div>
  
      <button @click="changePassword">Alterar Senha</button>
    </div>
  </template>
  