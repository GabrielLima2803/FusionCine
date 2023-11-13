<script setup>
import { onMounted, ref } from 'vue';
import api from '@/plugins/axios';
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from '@/components/footer/FullFooter.vue';

const peoples = ref([]);
const props = defineProps({
    id: Number
});

const fetchPeopleDetail = async (id) => {
    try {
        const response = await api.get(`person/${id}`, {
            params: {
                language: 'pt-BR'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os detalhes da pessoa:', error);
        return null;
    }
};

onMounted(async () => {
    const peopleDetail = await fetchPeopleDetail(props.id);
    if (peopleDetail) {
        peoples.value = [peopleDetail];
    }
});
</script>

<template>
    <div>
        <HeaderPrincipal />
        <div class="container-max">
            <div v-for="person in peoples" :key="person.id">
                <div class="display">
                    <div class="box-img">
                        <div class="container-img">
                            <img :src="`https://image.tmdb.org/t/p/w500${person.profile_path}`"
                                :alt="`Imagem de ${person.name}`" class="img-profile" width="300" height="450" />
                        </div>
                        <div class= "box-IP">
                            <i class="bi bi-instagram"></i>
                            <h4 class="informações-pessoais">Informações Pessoais</h4>
                            <div class="infos">
                                <h5></h5>
                            </div>
                        </div>
                    </div>
                    <div class="info-person">
                        <h1 class="name">
                            {{ person.name }}
                        </h1>
                        <div class="descrition">
                            <h2 class="biografia">Biografia</h2>
                            <p class="mt-3">Descrição</p>
                        </div>
                        <div>
                            <h3 class="conhecido-por"> Conhecido(a) por</h3>
                            <div>
                                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1yUbmAiw2cUSpyXNIaiST7JzCtG.jpg"
                                    alt="" class="img-filmes">
                                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1yUbmAiw2cUSpyXNIaiST7JzCtG.jpg"
                                    alt="" class="img-filmes">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <FullFooter />
    </div>
</template> 

<style scoped>
.container-max {
    max-width: 1420px;
    margin: 0 auto;
    margin-top: 125px;
}

.name {
    font-size: 30px;
    font-weight: bold;
}

.img-profile {
    border-radius: 10px;
}

.display {
    display: flex;

}

.bi {
    cursor: pointer;
    font-size: 20px
}
.box-IP{
    margin-top: 10px;

}
.informações-pessoais{
    font-weight: bold;
    font-size: 22px;
    margin-top: 30px;
}
.infos{
    
}

.info-person {
    margin-left: 30px;
}

.descrition {
    margin-top: 30px;
}

.biografia {
    font-weight: bold;
    font-size: 20px;
}

.conhecido-por {
    font-weight: bold;
    font-size: 22px;
    margin-top: 30px;
}

.img-filmes {
    width: 140px;
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 10px;
}</style>
