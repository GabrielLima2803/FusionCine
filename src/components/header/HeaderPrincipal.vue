<script setup >
</script>

<template>
    <header>
        <div id="headerTop">
            <div class="house">
                <i class="bi bi-house-door color-house"></i>
            </div>
            <div class="linksTop">
                <span class="links borde">Ajuda</span>
                <span class="links borde">Junte-se a nós</span>
                <span class="links borde">Entrar</span>
            </div>
        </div>
        <div id="headerBot">
            <div class="wrap">
                <div class="logo">
                    <img src="@/assets/img/header/Logo.png" alt="" width="100">
                </div>
                <div class="WrapLinks">
                    <span class="links">Filmes</span>
                    <span class="links">Séries</span>
                    <span class="links">Pessoas</span>
                    <span class="links">Discussões</span>
                    <span class="links">Mais</span>
                </div>
                <div class="FSL">
                    <div class="search">
                        <i class="bi bi-search colorSearch"></i>
                        <p>Buscar</p>
                    </div>
                    <div class="WrapFL">
                        <i class="bi bi-heart favorito"></i>
                        <i class="bi bi-person login"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
#headerTop {
    display: flex;
    justify-content: flex-end; /* Move os elementos para a direita */
    align-items: center; /* Centraliza verticalmente */
    background-color: #D9D9D9;
}

.house {
    margin-right: auto; 
    padding: 3px;
    margin-left: 28px;
}

.borde{
    border-right: #252323 solid 1px;
    padding: 3px;
}
.color-house{
    color: gray;
}
#headerBot{
    background-color: black;
    color: white;
    height: 80px;
    display: flex;
    justify-content: space-between; /* Alinha os elementos horizontalmente */
    align-items: center; /* Centraliza verticalmente */
}
.wrap{
 display: flex;
}
.links{
    margin-right: 10px;
    cursor: pointer;
}
.WrapLinks{
    display: flex;
    justify-content: center;
    align-items: center;
}
.search{
    background-color: #252323;
    padding: 8px;
    border-radius: 30px ;
    display: flex;
    width: 140px;
}
p{
    margin: 0;
    color: gray;
}
.colorSearch{
    color: gray;
    margin-right: 10px;
}
.FSL{
    display: flex;
}
.WrapFL{   
    padding: 8px;
    width: 140px; 
}
</style>