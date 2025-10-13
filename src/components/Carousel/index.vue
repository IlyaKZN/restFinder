<template>
  <div class="carousel">
    <div ref="carousel" class="splide" :class="{
      'splide--bottom-pagination': paginationPos === 'bottom',
    }">
      <div class="splide__track">
        <ul class="splide__list">
          <li :key="index" v-for="(image, index) in images" class="splide__slide">
            <div class="carousel-image" :style="{
              backgroundImage: `url(${image})`
            }"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, useTemplateRef } from 'vue';
  import Splide from '@splidejs/splide';

  defineOptions({
    name: 'CarouselComponent',
  })

  const { images, paginationPos = 'top' } = defineProps<{
    images: string[]
    paginationPos?: 'top' | 'bottom',
  }>()

  const carouselRef = useTemplateRef('carousel');

  onMounted(() => {
    if (!carouselRef.value) return;

    new Splide(carouselRef.value, {
      type: 'loop',
      perPage: 1,
      autoplay: false,
      arrows: false,
      height: '100%',
    }).mount();
  })
</script>

<style>
  .carousel {
    position: relative;
    height: 100%;
  }

  .splide {
    .splide__pagination {
      height: max-content;
      top: 24px;
    }
  }

  .splide--bottom-pagination {
    .splide__pagination {
      top: auto;
      bottom: 24px;
    }
  }

  .carousel-image {
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .splide__track {
    height: 100%;
  }
</style>
