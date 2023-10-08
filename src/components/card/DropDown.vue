<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer" temporary class="Teste" app :z-index="drawerIsOpen ? 10 : 1">
          <v-list-item>
            <h1>Favoritos</h1>
          </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <!-- Conteúdo do drawer aqui -->
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px">
          <div class="d-flex justify-center align-center h-100">
            <v-btn color="primary" @click.stop="drawer = !drawer">
              <i class="bi bi-heart favorito hover"></i>
            </v-btn>
          </div>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: null,
        drawerIsOpen: false, // Corrigido o nome da variável para drawerIsOpen
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  </style>
  