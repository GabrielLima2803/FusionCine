<script setup>
import { useSearchStore } from '@/stores/search'
import { onMounted } from 'vue';
const searchStore = useSearchStore()
// 

</script>

<template>
  <div class="box-search">
    <table>
      <tr>
        <th class="result">Resultado da busca</th>
      </tr>
      <tr>
        <router-link to="/search" class="clear">
          <td>Filmes</td>
        </router-link>
        <router-link to="/searchTv" class="clear">
          <td>Séries</td>
        </router-link>
        <router-link to="/searchPerson" class="clear">
          <td>Pessoa</td>
        </router-link>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.clear{
  text-decoration: none;
  color: black;
}
.result {
  background-color: gray;
  color: white;
  padding: 1rem;
  font-size: 20px;
}

th,
td {
  padding: 10px;
  text-align: left;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
}
td:hover {
  background-color: rgb(219, 217, 217);
  transition: 0.2s;
}

table {
  width: 18%;
  border-collapse: collapse;
  margin-top: 110px;
  border-radius: 10px 10px;
  border: solid 1px black;
}
</style>
