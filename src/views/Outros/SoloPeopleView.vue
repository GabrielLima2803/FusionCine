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
        <HeaderPrincipal/>
        <div class="container-max">
            <div v-for="person in peoples" :key="person.id">
                <div class="display">
                    <div class="container-img">
                        <img :src="`https://image.tmdb.org/t/p/w500${person.profile_path}`" :alt="`Imagem de ${person.name}`"
                            class="img-profile" width="300" height="450" />
                    </div>
                    <div class="info-person">
                        <h1 class="name">
                            {{ person.name }}
                        </h1>
                        <div class="descrition">
                            <h2 class="biografia" >Biografia</h2>
                            <p class="mt-3">Descrição</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <FullFooter/>
    </div>
</template> 

<style scoped>
.container-max{
    max-width: 1420px;
    margin: 0 auto;
    margin-top: 125px; 
}
.name{
    font-size: 30px;
    font-weight: bold;
}
.img-profile{
    border-radius: 10px;
}
.display{
display: flex;

}
.info-person{
    margin-left: 30px;
}
.descrition{
    margin-top: 30px;
}
.biografia{
    font-weight: bold;
    font-size: 20px;
}
</style>
