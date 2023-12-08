<script setup>
import { onMounted, ref } from 'vue'
import api from '@/plugins/axios'
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue'
import FullFooter from '@/components/footer/FullFooter.vue'

const peoples = ref([])
const props = defineProps({
  id: Number
})

const fetchPeopleDetail = async (id) => {
  try {
    const response = await api.get(`person/${id}`, {
      params: {
        language: 'pt-BR'
      }
    })
    const response2 = await api.get(`person/${id}/combined_credits`, {
      params: {
        language: 'pt-BR'
      }
    })
    const result = { ...response.data, ...response2.data }
    return result
  } catch (error) {
    console.error('Erro ao buscar os detalhes da pessoa:', error)
    return null
  }
}

onMounted(async () => {
  const peopleDetail = await fetchPeopleDetail(props.id)
  if (peopleDetail) {
    peoples.value = [peopleDetail]
  }
})

const filmesVisiveis = ref(12);
const todosFilmesVisiveis = ref(false);

const loadMore = () => {
  // Verificar se há dados antes de acessar o cast
  if (peoples.value.length > 0 && peoples.value[0].cast) {
    todosFilmesVisiveis.value = !todosFilmesVisiveis.value;
    filmesVisiveis.value = todosFilmesVisiveis.value ? peoples.value[0].cast.length : 12;
  }
};

</script>

<template>
  <div>
    <HeaderPrincipal />
    <div class="container-max">
      <div v-for="person in peoples" :key="person.id">
        <div class="display">
          <div class="box-img">
            <div class="container-img">
              <img :src="`https://image.tmdb.org/t/p/w500${person.profile_path}`" :alt="`Imagem de ${person.name}`"
                class="img-profile" width="300" height="450" />
            </div>
            <div class="box-IP">
              <i class="bi bi-instagram"></i>
              <h4 class="informações-pessoais">Informações Pessoais</h4>
              <p class="conhecido-por-down">conhecido(a) por</p>
              <p class="mt-2">{{ person.known_for_department }}</p>
              <p class="genero">Gênero</p>
              <p v-if="person.gender === 1" class="mt-2">Feminino</p>
              <p v-else-if="person.gender === 2" mt-2>Masculino</p>
              <p v-else mt-2>Outro</p>
              <p class="nascimento">Nascimento</p>
              <p class="mt-2">{{ person.birthday }}</p>
              <p class="local-de-nascimento">Local de nascimento (inglês)</p>
              <p class="mt-2">{{ person.place_of_birth }}</p>
            </div>
          </div>
          <div class="info-person">
            <h1 class="name">
              {{ person.name }}
            </h1>
            <div class="descrition">
              <h2 class="biografia">Biografia</h2>
              <p class="mt-3">{{ person.biography }}</p>
            </div>
            <div class="conhecido-up">Conhecido(a) por</div>
            <div v-if="peoples.length > 0">
      <div class="row filmes">
        <div v-for="(credit, index) in person.cast.slice(0, filmesVisiveis)" :key="index" class="col-2">
          <img
            :src="`https://image.tmdb.org/t/p/w500${credit.poster_path}`"
            :alt="credit.title"
            class="img-filmes"
          />
        </div>
      </div>

      <!-- Adicionar botão "Ver Mais/Menos" -->
      <div class="button-ver mt-5">
        <button v-if="person.cast && person.cast.length > 12" @click="loadMore">
          {{ todosFilmesVisiveis ? 'Ver Menos' : 'Ver Mais' }}
        </button>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
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
.button-ver{
  display: flex;
  justify-content: center;
  align-items: center;
}
.display {
  display: flex;
}

.bi {
  cursor: pointer;
  font-size: 20px;
}

.box-IP {
  margin-top: 10px;
}

.informações-pessoais {
  font-weight: bold;
  font-size: 22px;
  margin-top: 30px;
}

.conhecido-por-down {
  font-weight: 600;
  margin-top: 15px;
}

.creditado-em {
  font-weight: 600;
  margin-top: 30px;
}

.genero {
  font-weight: 600;
  margin-top: 30px;
}

.nascimento {
  margin-top: 30px;
  font-weight: 600;
}

.local-de-nascimento {
  margin-top: 30px;
  font-weight: 600;
}

.tambem-conhecido {
  margin-top: 30px;
  font-weight: 600;
}

.avaliação-conteudo {
  margin-top: 100px;
  font-weight: bold;
}

.numero-avaliação {
  margin-left: 15px;
}

.box-avaliação {
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
