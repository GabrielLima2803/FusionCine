<template>
    <div class="p-5 footer-flex ft-main-marginTop borde">
      <div class="ft-main">
        <h4>
          Sobre Nós
        </h4>
        <p class="about-text">
            Na FusionCine, somos uma equipe de entusiastas da sétima arte.Cada Filme É Uma História para Ser Contada.
        </p>
      </div>
  
      <div class="ft-main ft-menu-mudar">
        <h4>
          Menu
        </h4>
        <p>
          <span class="hvr-underline-from-center">Filmes</span>
        </p>
        <p>
          <span class="hvr-underline-from-center">Séries</span>
        </p>
      </div>
  
      <div class="ft-main">
        <h4>
          Ajuda
        </h4>
        <p>
            <span class="hvr-underline-from-center">Termos e Condições</span>
        </p>
        <p>
          <span class="hvr-underline-from-center">Política e Privacidade</span>
        </p>
        <p>
        <span class="hvr-underline-from-center">Perguntas Frequentes</span>
        </p>
      </div>

      <div class="ft-main">
        <h4>
          Nossas Redes
        </h4>
        <p>
            <span><i class="bi bi-instagram"></i></span>
            <span><i class="bi bi-facebook mr"></i></span>
        </p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .footer-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: -40px;
    background-color: #000000;
    color: white;
  }
  .mr{
    margin-left: 10px;
  }
  .bi{
    font-size: 20px;
  }
  .ft-main {
    width: 20%;
    margin: 0 120px;
  }
  
  .about-text {
    width: 80%;
  }
  p{
    margin-bottom: 12px;
    font-size: 15px;
    
  }
  h4{
    font-size: 19px;
  }
  .ft-main-marginTop{
    margin-top: 200px;
  }
  .ft-menu-mudar{
    margin-left: 150px;
  }
  .header-links {
      text-decoration: none;
      position: relative; /* Importante para posicionar a borda */
      transition: border-bottom 0.3s ease; /* Adiciona uma transição suave à borda */
      cursor: pointer;
  }
  
  .header-links::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #43055D; /* Cor da borda */
      transition: width 0.3s ease; /* Adiciona uma transição suave à largura da borda */
      
    }
  
    .header-links:hover::after {
      width: 100%;
    }
  
  .header-links:last-child {
      margin-right: 0;
  }
  
  h4 {
    padding-bottom: 1em;
  }
  .hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  cursor: pointer;

}
.hvr-underline-from-center:before {
  content: "";
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
.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}
  </style>