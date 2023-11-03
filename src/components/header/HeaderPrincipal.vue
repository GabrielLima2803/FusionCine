<script setup>
import HeaderTop from './HeaderTop.vue';
import HeaderBot from './HeaderBot.vue';
</script>

<template>
  <header>
    <div class="m">
      <header-top />
      <header-bot />
    </div>
  </header>
</template>

<style>
.m {
  margin-bottom: 100px;
}
</style>