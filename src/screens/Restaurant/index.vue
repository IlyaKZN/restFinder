<template>
  <div class="restaurant-screen">
    <PreloaderComponent v-if="!restaurant" class="restaurant-screen__preloader"/>

    <div class="restaurant-screen__content" v-else>
      <div class="restaurant-screen__preview">
        <CarouselComponent :images="restaurant.images"/>

        <div class="restaurant-screen__preview-overlay"/>

        <div class="restaurant-screen__preview-data">
          <span class="restaurant-screen__name">
            {{ restaurant.name }}
          </span>

          <div class="restaurant-screen__cuisines-container">
            <span class="restaurant-screen__cuisine" :key="cuisine" v-for="cuisine in restaurant.cuisines">
              {{ cuisine }}
            </span>
          </div>
        </div>
      </div>

      <div class="restaurant-screen__info-data">
        <div class="restaurant-screen__info-data-row">
          <div class="restaurant-screen__info-icon-container"/>

          <div class="restaurant-screen__info-data-row-column">
            <span class="restaurant-screen__info-text--primary">{{ restaurant.avgCheck }}₽</span>

            <span class="restaurant-screen__info-text--secondary">Средний чек</span>
          </div>
        </div>

        <div class="restaurant-screen__info-data-row">
          <div class="restaurant-screen__info-icon-container"/>

          <div class="restaurant-screen__info-data-row-column">
            <span class="restaurant-screen__info-text--primary">{{ restaurant.avgCheck }}₽</span>

            <span class="restaurant-screen__info-text--secondary">Средний чек</span>
          </div>
        </div>

        <div class="restaurant-screen__info-data-row">
          <div class="restaurant-screen__info-icon-container"/>

          <div class="restaurant-screen__info-data-row-column">
            <span class="restaurant-screen__info-text--primary">{{ restaurant.avgCheck }}₽</span>

            <span class="restaurant-screen__info-text--secondary">Средний чек</span>
          </div>
        </div>
        <!-- <div class="restaurant-screen__info-data-column">
          <div class="restaurant-screen__info-icon-container">

          </div>

          <span class="restaurant-screen__info-text--primary">{{ restaurant.avgCheck }}₽</span>

          <span class="restaurant-screen__info-text--secondary">Средний чек</span>
        </div>

        <div class="restaurant-screen__info-data-column">
          <div class="restaurant-screen__info-icon-container">

          </div>

          <span class="restaurant-screen__info-text--primary">{{ restaurant.minutesFromMetro }}мин</span>

          <span class="restaurant-screen__info-text--secondary">От метро</span>
        </div>

        <div class="restaurant-screen__info-data-column">
          <div class="restaurant-screen__info-icon-container">

          </div>

          <div class="restaurant-screen__info-time-container">
            <span class="restaurant-screen__info-time">11:00 -</span>
            <span class="restaurant-screen__info-time">23:00</span>
          </div>

          <span class="restaurant-screen__info-text--secondary">График</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import restaurants from '../Tournament/mocks';
  import type { TRestItem } from '@/types';
  import { ref } from 'vue';
  import PreloaderComponent from '@/components/Preloader';
  import CarouselComponent from '@/components/Carousel';

  defineOptions({
    name: 'RestaurantScreen',
  })

  const route = useRoute();

  const restaurant = ref<TRestItem>();

  function getRestaurant(id: number) {
    setTimeout(() => {
      restaurant.value = restaurants.find((rest) => rest.id === id);
    }, 1000);
  }

  getRestaurant(+route.params.id!);
</script>

<style scoped>
  .restaurant-screen {
    height: 100vh;
    width: 100vw;
    background-color: white;
  }

  .restaurant-screen__preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .restaurant-screen__content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .restaurant-screen__preview {
    position: relative;
    height: 320px;
    margin-bottom: 32px;
  }

  .restaurant-screen__preview-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.7) 100%);
    pointer-events: none;
  }

  .restaurant-screen__preview-data {
    position: absolute;
    z-index: 10;
    bottom: 30px;
    left: 20px;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .restaurant-screen__name {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .restaurant-screen__cuisines-container {
    font-weight: 500;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8)
  }

  .restaurant-screen__cuisine:not(:last-child)::after {
    content: ' • ';
  }

  /* .restaurant-screen__info-data {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
  } */

  .restaurant-screen__info-data {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
    gap: 12px;
  }

  .restaurant-screen__info-data-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }

  /* .restaurant-screen__info-icon-container {
    width: 48px;
    height: 48px;
    background-color: #F2F2F7;
    border-radius: 100%;
    margin-bottom: 8px;
  } */

  .restaurant-screen__info-text--primary {
    font-size: 16px;
    color: black;
    margin-bottom: 2px;
  }

  .restaurant-screen__info-text--secondary {
    font-size: 14px;
    color: #8E8E93;
  }

  .restaurant-screen__info-time-container {
    display: flex;
    flex-direction: column;
  }

  .restaurant-screen__info-time {
    font-size: 14px;
    color: black;
  }

  .restaurant-screen__info-data-row {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .restaurant-screen__info-icon-container {
    width: 32px;
    height: 32px;
    background-color: #F2F2F7;
    border-radius: 100%;
  }

  .restaurant-screen__info-data-row-column {
    display: flex;
    flex-direction: column;
  }
</style>
