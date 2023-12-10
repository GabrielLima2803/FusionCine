<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
const apiURL = 'http://localhost:3000/login';

const usernameRef = ref('');
const passwordRef = ref('');
const showPassword = ref(false);
const loggedInUser = ref(null);
const showLoggedInMessage = ref(false);
const isLoggedIn = ref(false);
const errorMessage = ref('');

const showHide = () => {
  showPassword.value = !showPassword.value;
};

const inputType = computed(() => (showPassword.value ? 'text' : 'password'));

const loginUser = async () => {
  try {
    const userData = {
      username: usernameRef.value,
      password: passwordRef.value,
    };

    console.log('Credenciais:', userData);
    const response = await axios.post(apiURL, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.token) {
      loggedInUser.value = response.data.username;
      showLoggedInMessage.value = true;
      isLoggedIn.value = true;
      errorMessage.value = '';
      localStorage.setItem('loggedInUser', response.data.username);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('usernameRef');
    } else {
      errorMessage.value = 'Credenciais inválidas. Tente novamente.';
    }

    console.log(response.data);
  } catch (error) {
    console.error('Erro ao autenticar o usuário:', error.message);
    errorMessage.value = 'Credenciais inválidas. Tente novamente.';
  }
};

const logoutUser = () => {
  console.log('Função logoutUser chamada.');
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('usernameRef');
  loggedInUser.value = null;
  showLoggedInMessage.value = false;
  isLoggedIn.value = false;
};

onMounted(() => {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
  const storedUsername = localStorage.getItem('loggedInUser');
  const UsernameRef = localStorage.getItem('usernameRef');

  if (storedIsLoggedIn === 'true' && storedUsername) {
    loggedInUser.value = storedUsername;
    showLoggedInMessage.value = true;
    isLoggedIn.value = true;
    usernameRef.value = UsernameRef; 
  }
});
</script>


<template>
  <div id="template" v-if="!showLoggedInMessage">
    <div class="container-login" >
      <form class="form-section">
        <h1>Login</h1>
        <div class="input-box">
          <input v-model="usernameRef" type="text" required />
          <label>Insira seu username</label>
        </div>

        <div class="input-box">
          <input v-model="passwordRef" :type="inputType" required />
          <label>Insira sua senha</label>
          <div class="eye-wrapper" @click="showHide">
            <span class="close" v-if="!showPassword"> <i class="bi bi-eye-slash"></i> </span>
            <span class="open" v-else> <i class="bi bi-eye"></i> </span>
          </div>

        </div>
        <div>
        </div>
        <div class="remember-forgot">
          <label for="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <router-link to="/forget" class="resetRouter">
          <a href="#" class="text-hover">Esqueceu a senha?</a>
           </router-link>
        </div>
        <button class="btn-login" @click.prevent="loginUser">Login</button>

        <div class="register">
          <p>Não tem conta?<router-link to="/register" class="text-hover">Register</router-link></p>
        </div>
      </form>
      <div class="mt-5">
        <router-link to="/" class="resetRouter"> Home </router-link>
      </div>
      <div v-if="errorMessage || !showLoggedInMessage" class="error-message">
    {{ errorMessage }}
  </div>

    </div>
  </div>
  <div class="container-user">
    <header-principal/>
      <div class="loggedInMessage" v-if="showLoggedInMessage">
        <p class="bemVindo">Seja Bem-Vindo, {{ usernameRef }}</p>        
          <button @click="logoutUser" class="logout">Logout</button>
        </div>
        <full-footer/>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#template {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  user-select: none;
  background-color: #191f26;
  background-size: cover;
}
.error-message {
  margin-top: 1em;
  border-radius: 0.3em;
  text-align: center;
  color: #ff6347; 
}
.container-user{
  display: flex;
  flex-direction: column; 
  align-items: center; 
  text-align: center;
}
.resetRouter {
  color: black;
  text-decoration: none;
}
.logout{
  background-color: #fff;
  color: #000000;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: lighter;
  text-transform: uppercase;
  margin-top: 20px;
  border: 0.5px solid #000000;
}
.resetRouter:hover {
  text-decoration: underline;

}
.bemVindo {
  text-align: center;
  text-decoration: none;
  color: #43055d;
  font-size: 180%;
  font-weight: bold;
}

.container {
  width: 80%;
  height: 40em;
  display: flex;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
}

.text-hover:hover {
  color: #3b5575;
  transition: 0.6s;
}

.form-image {
  width: 57%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b5575;
  padding: 1rem;
}

.container-login {
  width: 25em;
  height: 30em;
  padding: 1.5em;
  border-radius: 0.6em;
  backdrop-filter: blur(01.5em);
  background-color: rgb(255, 255, 255);
  text-align: center;
  border: 0.1em solid #ffffff80;
}

.loggedInMessage {
  margin-top: 1em;
  padding: 0.5em;
  border-radius: 0.3em;
  text-align: center;
  display: inline-block;
}

.container-login .form-section {
  display: flex;
  flex-direction: column;
}

.form-section h1 {
  font-size: 2rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  margin: 0 0 1em 0;
}

.form-section .input-box {
  position: relative;
  border-bottom: 0.1em solid gray;
  margin: 0 0 2em 0;
}

.form-section .input-box label {
  position: absolute;
  top: 50%;
  left: 0;
  color: rgb(0, 0, 0);
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.2s ease;
}

.input-box input {
  width: 100%;
  height: 2.4em;
  font-size: 1.2rem;
  color: rgb(0, 0, 0);
  font-family: Poppins;
}

.input-box input:focus~label,
.input-box input:valid~label {
  font-size: 0.8rem;
  top: 0.6em;
  transform: translateY(-120%);
}

.input-box .eye-wrapper {
  position: absolute;
  height: 1.7em;
  width: 1.7em;
  background-color: transparent;
  color: rgb(0, 0, 0);
  right: 0;
  top: 0.7em;
  border-radius: 1em;
  cursor: pointer;
  z-index: 1;
  transition: 0.5s;
}

.eye-wrapper .close {
  display: block;
}

.eye-wrapper .open {
  display: none;
}

.eye-wrapper .close,
.open {
  position: absolute;
  transform: translate(0.2em, 0.4em);
  font-size: 1rem;
}

.form-section .remember-forgot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 0 1em 0;
  color: rgb(0, 0, 0);
}

.form-section .remember-forgot label {
  display: flex;
  align-items: center;
  justify-content: center;
}

.remember-forgot label #remember {
  accent-color: rgb(0, 0, 0);
  cursor: pointer;
}

.container-login .btn-login {
  padding: 0.75em 1.25em;
  cursor: pointer;
  border-radius: 0.3em;
  font-size: 1rem;
  font-weight: bold;
  margin: 1.5em 0;
  color: white;
  background-color: #191f26;
  transition: 0.3s ease;
  border: 0.2em solid transparent;
  text-transform: uppercase;
}

.container-login .btn-login:hover {
  color: rgb(255, 255, 255);
  border-color: white;
}

.register p {
  color: rgb(0, 0, 0);
}

.register p a:hover {
  text-decoration: underline;
}

.remember-forgot label p,
.register p a {
  margin-left: 0.5em;
}

.remember-forgot a,
.register p a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

p {
  margin: 0;
}
</style>
