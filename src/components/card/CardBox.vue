<script setup>
</script>

<template>
<div id="Box">
    <div class="img">
       <img src="@/assets/img/card/Box.png" alt=""> 
    </div>
    <div class="text">
        <div class="h1">
        <h1>
            Os melhores filmes do mundo.
        </h1>
        <h1>
            Onde você quiser.
        </h1>
        <h1>
            Quando você quiser
        </h1>
        </div>
        <div class="text-1">
        <p>
            Assista os últimos lançamentos dos maiores festivais de cinema do mundo, diretamente do seu celular, computador, tablet ou Chromecast.
        </p>
        </div>
        <div class="text-2">
        <p>
            Começar
        </p>
        </div>
    </div>
</div>
</template> 

<style scoped>
#Box {
  width: 100%;
  height: 450px;
  background-color: #878787;
  display: flex; /* Use flex para alinhar os elementos lado a lado */
  align-items: center; /* Alinhe verticalmente no centro */
  justify-content: center; /* Alinhe horizontalmente no centro */
}

.img {
  flex: 2; /* A imagem ocupará 1/3 do espaço */
}

.text {
  flex: 2; /* O texto ocupará 2/3 do espaço */
  text-align: left; /* Alinhe o texto à esquerda */
  padding: 20px; /* Adicione algum espaço entre a imagem e o texto */

}

h1 {
  font-size: 38px;
  font-weight: bold;
}

.text-2 {
  margin-top: 10px; /* Adicione espaço acima do segundo texto */
  font-size: 20px;
}

img {
    padding-top: 40px;
}
.text-1{
    max-width: 80%;
    font-size: 20px;
}

</style>