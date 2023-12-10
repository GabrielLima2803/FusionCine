<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';
</script>

<template>
    <header-principal />
    <div class="container-max">
        <div>
            <img src="@/assets/img/suporte.jpg" alt="">
        </div>
        <h1 class="tex-principal">Suporte do FusionCine</h1>
        <div class="d-flex justify-content-evenly marginTop">
            <div class="cartaoDiv">
                <i class="bi bi-credit-card cartao"></i>
                <p class="text-icon">Assinaturas e cobrança ></p>
            </div>
            <div class="tvDiv">
                <i class="bi bi-tv tv"></i>
                <p class="text-icon">Suporte da TV ></p>
            </div>
            <div class="laptopDiv">
                <i class="bi bi-laptop notebook"></i>
                <p class="text-icon">Serviço e reparos ></p>
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
                <img src="@/assets/img/cinema.jpg" alt="" class="img"/>
            </div>
        </div>
        <div class="box-med">
            <h1 class="p-4">Meu Suporte</h1>
            <p class="text-center">Obtenha informações atualizadas sobre os Filmes.</p>
            <p class="mt-4 text-center text-blue cursor">Iniciar sessão no Meu suporte</p>
        </div>
        <div class="box-med-3">
            <div class="mt-5">
                <h2>Tome cuidado com peças falsificadas</h2>
                <p class="mt-5">
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
    margin: 0 auto;
    background-color: rgb(240, 240, 240);
    width: 100%;
    height: 100%; 
}
.text-principal{
    padding: 30px;
}

.cartaoDiv{
    text-align: center;
    padding: 20px;
}
.box-med-3{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.tvDiv{
    text-align: center;
    padding: 20px;
}
.laptopDiv{
    text-align: center;
    padding: 20px;
}
.text-icon:hover{
    color: rgb(151, 151, 151);
    text-decoration: underline;
    cursor: pointer;
    transition: ease 0.1s ;
}

.texto-destaque {
    color: #000000;
    font-weight: bold;
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
    padding-top: 10px;
}

h1 {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
}
.marginTop {
    margin-top: 30px;
}
.container-box {
    background-color: white;
    margin-top: 70px;
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
.cartao{
    font-size: 500%;
}
.tv{
    font-size: 500%;
}
.notebook{
    font-size: 500%;
}

</style>