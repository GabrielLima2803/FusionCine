<script setup>
</script>

<template>
  <div id="Box">
    <div class="text">
      <div>

      </div>
      <div class="h1">
        <h1 class="text-center">
          Assista em qualquer lugar no app Fusi-on Cine.
        </h1>
      </div>
      <div>
        <p class="text-center">O app Fusion Cine já está nos seus aparelhos favoritos.
          E você também pode assistir online em </p>
      </div>
      <div class="display">
        <div class="cel m-20">
          <i class="bi bi-phone-landscape tamanho "></i>
          <p class="celular">Celular</p>
        </div>
        <div>
          <i class="bi bi-tablet-landscape tamanho"></i>
          <p class="tablet">Tablet</p>
        </div>
        <div>
          <i class="bi bi-laptop tamanho"></i>
          <p class="note">Notebook</p>
        </div>
        <div>
          <i class="bi bi-tv tamanho"></i>
          <p class="tv">TV</p>
        </div>
      </div>
    </div>
  </div>
</template> 

<style scoped>
h1 {
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  width: 900px;
  margin-left: 260px;
}

.tamanho {
  font-size: 90px;
}

.display {
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
}
.celular{
  margin-left: 15px;
}
.tablet{
margin-left: 18px;
}
.note{
margin-left: 10px;
}
.tv{
margin-left: 35px;
}
</style>