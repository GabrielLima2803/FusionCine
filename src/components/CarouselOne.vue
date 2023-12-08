<script setup>
import { ref } from 'vue';
</script>

<template>
<div>
    <div class="parallax">
      <video autoplay muted loop id="myVideo">
        <source src="https://www.apple.com/105/media/us/apple-tv-plus/2022/4114721e-12d2-4260-87c4-678589d5f804/anim/supercut/large.mp4" type="video/mp4">
      </video>
    </div>

    <div class="content">
      <div style="height:1200px;background-color:black;font-size:36px">
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div>
    </div>

    <div class="parallax"></div>
  </div>
</template>

<style scoped>
.parallax {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#myVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
}
</style>