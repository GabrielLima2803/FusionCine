<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
</script>

<template>
    <header-principal />
    <div class="container-max">
        <h1>Suporte do FusionCine</h1>
        <div class="d-flex justify-content-around marginTop">
            <div class="box">
                <i class="bi bi-chat-left-text"></i>
            </div>
            <div class="box">
                <i class="bi bi-chat-left-text"></i>
            </div>
            <div class="box">
                <i class="bi bi-chat-left-text"></i>
            </div>
        </div>
    </div>
    <div class="container-box">
        <div class="big-box">
            <div>
                <h1 class="secton">Participe de sessões gratuitas no FusionCine</h1>
                <p class="mt-4 text-center">Saiba mais sobre os recursos mais recentes e como ir além.
                </p>
                <p class="mt-3 text-center text-blue cursor">Inscreva-se</p>
                <img src="@/assets/img/cinema-midia.jpg" alt="" class="img"/>
            </div>
        </div>
        <div class="box-med">
            <h1 class="p-4">Meu Suporte</h1>
            <p class="text-center">Obtenha informações atualizadas sobre os Filmes.</p>
            <p class="mt-4 text-center text-blue cursor">Iniciar sessão no Meu suporte</p>
        </div>
        <div class="box-med-3">
            <div class="mr-3">
                <h2>Tome cuidado com peças falsificadas</h2>
                <p>
                É importante ressaltar que acessórios e dispositivos não originais podem comprometer a experiência de streaming no FusionCine.
            </p>
            <p>
                Recomendamos fortemente o uso de equipamentos originais e certificados para garantir a qualidade e segurança durante a reprodução dos nossos filmes.
            </p>
            <p class="texto-destaque">
                Para obter acessórios e serviços confiáveis, visite nossos parceiros autorizados FusionCine.
            </p>
            </div>
        </div>
    </div>
    <full-footer />
</template>

<style scoped>
.container-max {
    max-width: 1420px;
    margin: 0 auto;
    margin-top: 125px;
}
.texto-destaque {
    color: #000000;
    font-weight: bold;
}
.box-med{
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    color: black;
    width: 1000px;
    border-radius: 10px;
    height: 200px;
    margin-top: 100px;
}
.box-med-2{
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    color: black;
    width: 1000px;
    border-radius: 10px;
    height: 500px;
    margin-top: 30px;
}
.box-med-3{
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    color: black;
    width: 1000px;
    border-radius: 10px;
    height: 300px;
    margin-top: 30px;
}
.cursor{
    cursor: pointer;
}
img {
    width: 100%;
    height: 100%; 
    margin-top: 40px;
    object-fit: cover; 
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;  
}

.secton {
    padding-top: 50px;
}

h1 {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
}

.box {
    background-color: #f5f5f7;
    padding: 40px 8.33%;
    width: 300px;
    cursor: pointer;
    height: 150px;
    transition: all .2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.marginTop {
    margin-top: 100px;
}

.box:hover {
    transform: scale(1.1);
}

.container-box {
    background-color: rgb(219, 219, 219);
    margin-top: 100px;
    padding: 30px;
}


.big-box {
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    color: black;
    border-radius: 10px;
    width: 1000px;
    height: 760px;
    overflow: hidden;
}


</style>