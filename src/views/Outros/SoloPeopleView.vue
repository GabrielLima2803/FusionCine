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
            const response = await api.get(`person/${id}&append_to_response=movie_credits`, {
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
                                <p class="conhecido-por-down">conhecido(a) por</p>
                                <p class="creditado-em"> creditado(a) em</p>
                                <p class="genero"> Gênero </p>
                                <p class="nascimento">Nascimento</p>
                                <p class="local-de-nascimento">Local de nascimento (inglês)</p>
                                <p class="tambem-conhecido">Também conhecido(a) como</p>
                                <p class="avaliação-conteudo">Avaliação do conteúdo</p> 
                                <div class="box-avaliação">
                                    <p class="numero-avaliação">100</p>

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
                                <h3 class="conhecido-up "> Conhecido(a) por</h3>
                                <div>
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
    .conhecido-por-down{
        font-weight: 600;
        margin-top: 15px;
    }
    .creditado-em{
        font-weight: 600;
        margin-top: 30px;
    }
    .genero{
        font-weight: 600;
        margin-top: 30px;
    }
    .nascimento{
        margin-top: 30px;
        font-weight: 600;
    }
    .local-de-nascimento{
        margin-top: 30px;
        font-weight: 600;

    }
    .tambem-conhecido{
        margin-top: 30px;
        font-weight: 600;  
    }
    .avaliação-conteudo{
        margin-top: 100px;
        font-weight: bold;
    }
    .numero-avaliação{
        margin-left: 15px;
        
    }
    .box-avaliação{
    
        background-color: darkgray;
        width: 100%;
        height: 50px;
        padding: 10px;
        border-radius: 10px;
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

    .conhecido-up {
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
