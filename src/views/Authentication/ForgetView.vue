<template>
  <header-principal/>
  <div class="margin">
    <div class="row">
      <h1>Esqueci a Senha</h1>
      <h6 class="information-text mt-4">Digite seu nome de usuário registrado para redefinir sua senha.</h6>
      <form @submit.prevent="forgotPassword">
        <div class="form-group">
          <input type="text" v-model="username" name="username" id="username" required>
          <p><label for="username">Username</label></p>
          <button type="submit">Enviar Solicitação</button>
        </div>
      </form>
      <div class="footer">
        <div v-if="resetToken">
          <p>Token de redefinição de senha:</p>
          <pre>{{ resetToken }}</pre>
          <p>Copie este token para usar durante a redefinição de senha.</p>
          <button @click="goToResetPage" class="mt-5">Ir para a página de redefinição</button>
        </div>
        <div v-if="error" class="error-message">
          <p>{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
  <full-footer/>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const resetToken = ref(null);
const error = ref(false);
const errorMessage = ref('');

const forgotPassword = async () => {
  try {
    const response = await axios.post('http://localhost:3000/forgot-password', { username: username.value });
    console.log(response.data.message);

    resetToken.value = response.data.resetToken;
    error.value = false;
  } catch (error) {
    console.error('Erro ao solicitar redefinição de senha:', error);

    if (error.response && error.response.status === 404) {
      error.value = true;
      errorMessage.value = 'Usuário não encontrado. Verifique o nome de usuário e tente novamente.';
      alert('Usuário não encontrado. Verifique o nome de usuário e tente novamente.')
    } else {
      error.value = true;
      errorMessage.value = 'Erro ao solicitar redefinição de senha. Tente novamente mais tarde.';
    }
  }
};

const goToResetPage = () => {
  router.push('/resetP');
};
</script>

<style scoped>
/* styles.css */

.margin{
  margin-top: 200px;
}
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}


form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
}

button {
  background-color: #000000;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #101113;
}

.error-message {
  color: #e74c3c;
  margin-top: 10px;
}

.success-message {
  color: #2ecc71;
  margin-top: 10px;
}
.row {
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  text-align: center;
  padding: 2em 2em 0.5em;
  width: 90%;
  margin: 2em	auto;
  border-radius: 5px; }
  .row h1 {
    font-size: 2.5em; }
  .row .form-group {
    margin: 0.5em 0; }
    .row .form-group label {
      display: block;
      color: #fff;
      text-align: left;
      font-weight: 600; }
    .row .form-group input, .row .form-group button {
      display: block;
      padding: 0.5em 0;
      width: 100%;
      margin-top: 1em;
      margin-bottom: 0.5em;
      background-color: inherit;
      border: none;
      border-bottom: 1px solid #555;
      color: #eee; }
      .row .form-group input:focus, .row .form-group button:focus {
        background-color: #fff;
        color: #000;
        border: none;
        padding: 1em 0.5em; animation: pulse 1s infinite ease;}
    .row .form-group button {
      border: 1px solid #fff;
      border-radius: 5px;
      outline: none;
      -moz-user-select: none;
      user-select: none;
      color: #333;
      font-weight: 800;
      cursor: pointer;
      margin-top: 2em;
      padding: 1em; }
      .row .form-group button:hover, .row .form-group button:focus {
        background-color: #fff; }
      .row .form-group button.is-loading::after {
        animation: spinner 500ms infinite linear;
        content: "";
        position: absolute;
        margin-left: 2em;
        border: 2px solid #000;
        border-radius: 100%;
        border-right-color: transparent;
        border-left-color: transparent;
        height: 1em;
        width: 4%; }
  .row .footer h5 {
    margin-top: 1em; }
  .row .footer p {
    margin-top: 2em; }
    .row .footer p .symbols {
      color: #444; }
  .row .footer a {
    color: inherit;
    text-decoration: none; }

.information-text {
  color: #ddd; }

@media screen and (max-width: 320px) {
  .row {
    padding-left: 1em;
    padding-right: 1em; }
    .row h1 {
      font-size: 1.5em !important; } }
@media screen and (min-width: 900px) {
  .row {
    width: 50%; } }

</style>
