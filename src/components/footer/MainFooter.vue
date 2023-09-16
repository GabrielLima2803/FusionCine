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
          <span>Filmes</span>
        </p>
        <p>
          <span>Séries</span>
        </p>
      </div>
  
      <div class="ft-main">
        <h4>
          Ajuda
        </h4>
        <p>
            <span>Termos e Condições</span>
        </p>
        <p>
          <span>Política e Privacidade</span>
        </p>
        <p>
        <span>Perguntas Frequentes</span>
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
  
  </style>