<script setup>
import { ref } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const registerUser = async () => {
    try {
        // Verifique se as senhas coincidem
        if (password.value !== confirmPassword.value) {
            throw new Error('As senhas não coincidem');
        }

        const userData = {
            username: username.value,
            email: email.value,
            password: password.value,
        };

        const response = await axios.post('http://localhost:3000/register', userData);

        console.log('Usuário registrado com sucesso:', response.data);

    } catch (error) {
        console.error('Erro ao registrar o usuário:', error.message);
    }
};
</script>

<template id="body">
    <div class="container">
        <div class="form-image">
            <img src="@/assets/img/auth/register/undraw_shopping_re_3wst.svg" alt="">
        </div>
        <div class="form">
            <form action="#">
                <div class="form-header">
                    <div class="title">
                        <h1>Cadastre-se</h1>
                    </div>
                    <div class="login-button">
                        <router-link to="/login"><button class="text-white">Login</button></router-link>
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-box">
                        <label for="username">Nome de Usuário</label>
                        <input v-model="username" id="username" type="text" name="username" placeholder="Digite seu usuário" required>
                    </div>

                    <div class="input-box">
                        <label for="email">E-mail</label>
                        <input v-model="email" id="email" type="email" name="email" placeholder="Digite seu e-mail" required>
                    </div>

                    <div class="input-box">
                        <label for="password">Senha</label>
                        <input v-model="password" id="password" type="password" name="password" placeholder="Digite sua senha" required>
                    </div>

                    <div class="input-box">
                        <label for="confirmPassword">Confirme sua Senha</label>
                        <input v-model="confirmPassword" id="confirmPassword" type="password" name="confirmPassword" placeholder="Digite sua senha novamente" required>
                    </div>
                </div>

                <div class="continue-button">
                    <button @click.prevent="registerUser">Continuar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
#body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0c0ce94d;
}

.container {
    width: 80%;
    height: 80vh;
    display: flex;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
    margin-top: 100px;
}

.form-image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #414e5c;
    ;
    padding: 1rem;
}

.form-image img {
    width: 31rem;
}

.form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 3rem;
}

.form-header {
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
}

.login-button {
    display: flex;
    align-items: center;
}

.login-button button {
    border: none;
    background-color: #191F26;
    ;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.login-button button:hover {
    background-color: rgba(33, 31, 75, 0.945);
}

.login-button button a {
    text-decoration: none;
    font-weight: 500;
    color: #fff;
}

.form-header h1::after {
    content: '';
    display: block;
    width: 5rem;
    height: 0.3rem;
    background-color: #191F26;
    ;
    margin: 0 auto;
    position: absolute;
    border-radius: 10px;
}

.input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
}

.input-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem;
}

.input-box input {
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
    font-size: 0.8rem;
}

.input-box input:hover {
    background-color: rgba(218, 218, 218, 0.945);
}

.input-box input:focus-visible {
    outline: 1px solid #191F26;
    ;
}

.input-box label,
.gender-title h6 {
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
}

.input-box input::placeholder {
    color: #000000be;
}

.gender-group {
    display: flex;
    justify-content: space-between;
    margin-top: 0.62rem;
    padding: 0 .5rem;
}

.gender-input {
    display: flex;
    align-items: center;
}

.gender-input input {
    margin-right: 0.35rem;
}

.gender-input label {
    font-size: 0.81rem;
    font-weight: 600;
    color: #000000c0;
}

.continue-button button {
    width: 100%;
    margin-top: 2.5rem;
    border: none;
    background-color: #191F26;
    ;
    padding: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
}

.continue-button button:hover {
    background-color: rgba(33, 31, 75, 0.945);
    transition: .5s;
}

.continue-button button a {
    text-decoration: none;
    font-size: 0.93rem;
    font-weight: 500;
    color: #fff;
}

@media screen and (max-width: 1330px) {
    .form-image {
        display: none;
    }

    .container {
        width: 50%;
    }

    .form {
        width: 100%;
    }
}

@media screen and (max-width: 1064px) {
    .container {
        width: 90%;
        height: auto;
    }

    .input-group {
        flex-direction: column;
        z-index: 5;
        padding-right: 5rem;
        max-height: 10rem;
        overflow-y: scroll;
        flex-wrap: nowrap;
    }

    .gender-inputs {
        margin-top: 2rem;
    }

    .gender-group {
        flex-direction: column;
    }

    .gender-title h6 {
        margin: 0;
    }

    .gender-input {
        margin-top: 0.5rem;
    }
}</style>