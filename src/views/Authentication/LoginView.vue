<template>
    <div id="template">
        <div class="container-login">
            <form class="form-section">
                <h1>Login</h1>
                <div class="input-box">
                    <input type="text" required />
                    <label>Insira seu email</label>
                </div>
                <div class="input-box">
                    <input class="password" :type="inputType" required />
                    <label>Insira sua senha</label>
                    <div class="eye-wrapper" @click="showHide">
                        <span class="close" v-if="!showPassword">
                            <i class="bi bi-eye-slash"></i> </span>
                        <span class="open" v-else>
                            <i class="bi bi-eye"></i> </span>
                    </div>
                </div>
                <div class="remember-forgot">
                    <label for="remember">
                        <input type="checkbox" id="remember" />
                        <p>Remember me</p>
                    </label>
                    <a href="#" class="text-hover">Esqueceu a senha?</a>
                </div>
                <button class="btn-login">login</button>
                <div class="register">
                    <p >Não tem conta?<router-link to="/register" class="text-hover">Register</router-link></p>
                </div>
            </form>
        </div>
        </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';

const showPassword = ref(false);

const showHide = () => {
    showPassword.value = !showPassword.value;
};

const inputType = computed(() => (showPassword.value ? "text" : "password"));
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
#template {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    user-select: none;
    background-color: #191F26;
    background-size: cover;
}
.container{
    width: 80%;
    height: 40em;
    display: flex;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
}
.text-hover:hover{
    color: #3b5575;
    transition: .6s;
}
.form-image {
    width: 57%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  #3b5575;
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
    background-color:   #191F26;
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