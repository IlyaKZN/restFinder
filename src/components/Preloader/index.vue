<template>
  <div>
    <span class="loader"/>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'PreloaderComponent',
  })
</script>

<style scoped>
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #757575;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
  }
</style>
