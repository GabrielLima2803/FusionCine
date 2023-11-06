<script>

</script>
<template>
    <div id="headerTop">
        <div class="house">
            <router-link to="/"><i class="bi bi-house-door color-house"></i></router-link>
        </div>
        <div class="linksTop">
            <span class="borde">Ajuda</span>
            <span class="borde">Junte-se a nós</span>
            <router-link to="/login" class="text-black text">
                <span class="borde-Ultimo">Entrar</span>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
#headerTop {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #D9D9D9;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9000;
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
.tet{
    text-decoration: none;
}
</style>