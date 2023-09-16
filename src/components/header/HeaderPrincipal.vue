<script setup >
</script>

<template>
    <header>
        <div id="headerTop">
            <div class="house">
                <i class="bi bi-house-door color-house"></i>
            </div>
            <div class="linksTop">
                <span class="borde">Ajuda</span>
                <span class="borde">Junte-se a nós</span>
                <span class="borde-Ultimo">Entrar</span>
            </div>
        </div>
        <div id="headerBot" class="header">
            <div class="header__logo">
                <img src="@/assets/img/header/Logo.png" alt="" width="100">
            </div>
            <div class="header__links">
                <span class="links-2">Filmes</span>
                <span class="links-2">Séries</span>
                <span class="links-2">Pessoas</span>
                <span class="links-2">Discussões</span>
                <span class="links-2">Suporte</span>
                <span class="links-2 F">Mais</span>
            </div>
            <div class="header__rest">
                <div class="FSL">
                    <div class="search">
                        <i class="bi bi-search colorSearch marginS"></i>
                        <p class="marginS">Buscar</p>
                    </div>
                    <div class="WrapFL">
                        <i class="bi bi-heart favorito"></i>
                        <i class="bi bi-person login"></i>
                        <label>
                            <input type="checkbox">
                            <ion-icon name="moon-outline" class="moon"></ion-icon>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
#headerTop {
    display: flex;
    justify-content: flex-end;
    /* Move os elementos para a direita */
    align-items: center;
    /* Centraliza verticalmente */
    background-color: #D9D9D9;
}

.marginS {
    margin-left: 4px;
}
.linksTop{
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
.borde-Ultimo{
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
    margin-left: 25px;
    font-size: 22px;
    cursor: pointer;
}

.favorito {
    font-size: 20px;
    cursor: pointer;

}

span {
    font-size: 16px;
}</style>