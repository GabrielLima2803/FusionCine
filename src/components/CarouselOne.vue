<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const handleScroll = () => {
  const scrollPosition = window.scrollY;

  // Ajuste os valores de opacidade e outros estilos conforme necessário
  videoOpacity.value = 1 - scrollPosition / 500;
};

const videoOpacity = ref(1);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <!-- Seção do vídeo -->
    <div class="video-section">
      <div class="parallax" :style="{ opacity: videoOpacity }">
        <video autoplay muted loop id="myVideo">
          <source src="https://www.apple.com/105/media/us/apple-tv-plus/2022/4114721e-12d2-4260-87c4-678589d5f804/anim/supercut/large.mp4" type="video/mp4">
        </video>
      </div>
    </div>

    <!-- Seção das frases -->
    <div class="content">
      <div class="parallax" :style="{ opacity: 1 - videoOpacity }">
        <div class="overlay" :style="{ opacity: 1 - videoOpacity, top: 50 - videoOpacity * 50 + '%', transform: 'translate(-50%, -50%) scale(' + (1 - videoOpacity) + ')' }">
        </div>
      </div>

      <div class="parallax" :style="{ opacity: 1 - videoOpacity }">
        <div class="overlay" :style="{ opacity: 1 - videoOpacity, top: 50 - videoOpacity * 50 + '%', transform: 'translate(-50%, -50%) scale(' + (1 - videoOpacity) + ')' }">
        </div>
      </div>

      <div class="parallax" :style="{ opacity: 1 - videoOpacity }">
        <div class="overlay" :style="{ opacity: 1 - videoOpacity, top: 50 - videoOpacity * 50 + '%', transform: 'translate(-50%, -50%) scale(' + (1 - videoOpacity) + ')' }">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-section {
  position: relative;
  height: 500px; /* Ajuste a altura conforme necessário */
}

.parallax {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

#myVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  border-radius: 10px;
  color: white;
  font-size: 24px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s, top 0.5s, transform 0.5s;
}

.overlay {
  margin: 0;
}
</style>