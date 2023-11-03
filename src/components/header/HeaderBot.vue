<script setup>
import { ref, onMounted } from 'vue'

const isHeaderHidden = ref(false)
let prevScrollY = window.scrollY

function handleScroll() {
  const scrollY = window.scrollY

  // Verifique a direção do scroll
  if (scrollY > prevScrollY) {
    // Scroll para baixo
    isHeaderHidden.value = true
  } else {
    // Scroll para cima
    isHeaderHidden.value = false
  }

  prevScrollY = scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div id="headerBot" :class="['header', 'sticky', { hidden: isHeaderHidden }]">
    <div class="header__logo">
      <router-link to="/"
        ><img src="@/assets/img/header/Logo.png" alt="" width="100"
      /></router-link>
    </div>
    <div class="header__links">
      <router-link to="/filmes" class="text-white"
        ><span class="links-2 hvr-underline-from-center">Filmes</span></router-link
      >
      <router-link to="/series" class="text-white"
        ><span class="links-2 hvr-underline-from-center">Séries</span></router-link
      >
      <router-link to="/pessoas" class="text-white">
        <span class="links-2 hvr-underline-from-center">Pessoas</span>
      </router-link>
      <span class="links-2 hvr-underline-from-center">Discussões</span>
      <span class="links-2 hvr-underline-from-center">Suporte</span>
      <span class="links-2 F hvr-underline-from-center">Mais</span>
    </div>
    <div class="header__rest">
      <div class="FSL">
        <div class="search">
          <i class="bi bi-search colorSearch marginS"></i>
          <!-- <input type="text"> -->
          <p class="marginS pbuscar">Buscar</p>
        </div>
        <div class="WrapFL">
            <router-link to="/favorito">
                <i class="bi bi-heart favorito hover text-white"></i>
            </router-link>
          <router-link to="/login">
            <i class="bi bi-person login hover1 text-white"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticky {
  /* position: sticky;
    top: 0; */
}

.header.hidden {
  top: -80px;
  /* Esconda o cabeçalho movendo-o para cima */
}

.hover:hover {
  font-size: 22px;
  transition: 0.6s;
}

.hover1:hover {
  font-size: 24px;
  transition: 0.6s;
}

#headerTop {
  display: flex;
  justify-content: flex-end;
  /* Move os elementos para a direita */
  align-items: center;
  /* Centraliza verticalmente */
  background-color: #d9d9d9;
}

.pbuscar {
  margin-top: 4px;
}

i {
  font-size: 20px;
  cursor: pointer;
}

.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}

.hvr-underline-from-center:before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #ffffff;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-underline-from-center:hover:before,
.hvr-underline-from-center:focus:before,
.hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}

.marginS {
  margin-left: 4px;
}

.linksTop {
  margin-right: 39px;
}

.house {
  margin-right: auto;
  padding: 3px;
  margin-left: 28px;
}

.borde {
  border-right: #252323 solid 1px;
  padding-right: 15px;
  padding-left: 15px;
  cursor: pointer;
}

.borde-Ultimo {
  padding-right: 15px;
  padding-left: 15px;
  cursor: pointer;
}

.color-house {
  color: gray;
}

#headerBot {
  background-color: black;
  color: white;
  height: 80px;
}

.wrap {
  display: flex;
}

.links {
  margin-right: 10px;
  cursor: pointer;
}

.links-2 {
  margin-right: 30px;
  cursor: pointer;
}

.WrapLinks {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
  background-color: #252323;
  padding: 10px;
  border-radius: 30px;
  display: flex;
  width: 160px;
}

p {
  margin: 0;
  color: gray;
}

.colorSearch {
  color: gray;
  margin-right: 10px;
}

.FSL {
  display: flex;
  margin-left: 140px;
}

.WrapFL {
  padding: 8px;
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  transition: top 0.3s; /* Adicione uma transição suave para animação */
  position: fixed;
  top: 21px;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header__logo {
  grid-column: 1;
  grid-row: 1;
  display: flex;
}

.header__links {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__rest {
  grid-column: 3;
  margin-left: 10px;
  grid-row: 1;
  display: flex;
  align-items: center;
}

.login {
  margin-left: 10px;
  font-size: 22px;
  cursor: pointer;
}

.favorito {
  font-size: 20px;
  cursor: pointer;
}

span {
  font-size: 16px;
}

router-link {
  text-decoration: none;
}
</style>
