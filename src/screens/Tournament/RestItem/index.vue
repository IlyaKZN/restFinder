<template>
  <div
  class="rest-container"
  :class="{
    'rest-container--bottom': position === 'bottom',
  }">
    <div ref="slider" class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <li :key="index" v-for="(image, index) in restData.images" class="splide__slide">
            <div class="rest-image" :style="{
              backgroundImage: `url(${image})`
            }"/>

            <div
            class="overlay"
            :class="{
              'overlay--bottom': position === 'bottom'
            }"/>
          </li>
        </ul>
      </div>
    </div>

    <div
    class="rest-data"
    :class="{
      'rest-data--bottom': position === 'bottom',
    }"
    >
      <span class="rest-name">
        {{ restData.name }}
      </span>

      <div class="rest-cuisines-container">
        <span class="rest-cuisine" :key="cuisine" v-for="cuisine in restData.cuisines">
          {{ cuisine }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, useTemplateRef } from 'vue';
  import type { TRestItem } from '@/types';
  import Splide from '@splidejs/splide';


  defineOptions({
    name: 'TournamentRestItem',
  })

  const { restData } = defineProps<{
    restData: TRestItem,
    position: 'top' | 'bottom',
  }>();

  const sliderRef = useTemplateRef('slider');

  onMounted(() => {
    if (!sliderRef.value) return;

    new Splide(sliderRef.value, {
      type: 'loop',
      perPage: 1,
      autoplay: false,
      arrows: false,
    }).mount();
  })
</script>

<style>
  .rest-container {
    position: relative;

    .splide__pagination {
      height: max-content;
      top: 24px;
    }
  }

  .rest-container--bottom {
    .splide__pagination {
      top: auto;
      bottom: 24px;
    }
  }

  .splide__slide {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  }

  .rest-image {
    height: calc((100vh - 50px) / 2);
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .splide {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .rest-data {
    position: absolute;
    z-index: 10;
    bottom: 60px;
    left: 20px;
    pointer-events: none;
  }

  .rest-data--bottom {
    top: 60px;
  }

  .rest-name {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .rest-cuisines-container {
    font-weight: 500;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8)
  }

  .rest-cuisine:not(:last-child)::after {
    content: ' • ';
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 100%);
  }

  .overlay--bottom {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 1) 100%);
  }

  /* .rest-container--bottom {
    .splide__pagination {
      bottom: 24px;
    }
  } */
</style>
