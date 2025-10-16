<template>
  <div class="restaurant-screen">
    <PreloaderComponent v-if="!restaurant" class="restaurant-screen__preloader"/>

    <div class="restaurant-screen__content" v-else>
      <div class="restaurant-screen__preview">
        <CarouselComponent class="restaurant-screen__preview-carousel" :images="restaurant.images"/>

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

      <div class="restaurant-screen__info-labels-container">
        <div class="restaurant-screen__info-label restaurant-screen__info-label--green">
          {{ `₽ ${restaurant.avgCheck}` }}
        </div>

        <div class="restaurant-screen__info-label restaurant-screen__info-label--blue">
          <div class="restaurant-screen__info-label-icon restaurant-screen__info-label-icon--blue" v-html="trainIcon"/>

          {{ `${restaurant.minutesFromMetro} мин от метро` }}
        </div>

        <div class="restaurant-screen__info-label restaurant-screen__info-label--purple">
          <div class="restaurant-screen__info-label-icon restaurant-screen__info-label-icon--purple" v-html="clockIcon"/>

          {{ `${restaurant.schedule.monday}` }}
        </div>
      </div>

      <div class="restaurant-screen__info-container">
        <span class="restaurant-screen__info-title">
          О ресторане
        </span>


        <div class="restaurant-screen__info-description">
          <span>
            Аутентичная итальянская кухня в современной интерпретации в самом центре города. Наши шеф-повара готовят исключительные блюда, используя свежие местные ингредиенты
          </span>
        </div>

        <span class="restaurant-screen__info-title">
          Локация & Контакты
        </span>

        <div class="restaurant-screen__data-container">
          <div class="restaurant-screen__data">
            <div class="restaurant-screen__data-icon-background">
              <div class="restaurant-screen__data-icon" v-html="locationIcon"/>
            </div>

            <div class="restaurant-screen__data-text-container">
              <span>
                Тверская улица, 15
              </span>
            </div>
          </div>

          <div class="restaurant-screen__data">
            <div class="restaurant-screen__data-icon-background">
              <div class="restaurant-screen__data-icon" v-html="callIcon"/>
            </div>

            <div class="restaurant-screen__data-text-container">
              <span>
                +7 (495) 123-45-67
              </span>
            </div>
          </div>
        </div>

        <PVButton class="restaurant-screen__button restaurant-screen__button--book-table">
          <div class="restaurant-screen__button-content">
            <div class="restaurant-screen__button-icon" v-html="calendarAddIcon"/>

            Забронировать
          </div>
        </PVButton>

        <PVButton class="restaurant-screen__button restaurant-screen__button--telegram">
          <div class="restaurant-screen__button-content">
            <div class="restaurant-screen__button-icon" v-html="shareIcon"/>

            Поделиться в Telegram
          </div>
        </PVButton>
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
  import trainIcon from '@/assets/icons/train.svg?raw';
  import clockIcon from '@/assets/icons/clock.svg?raw';
  import locationIcon from '@/assets/icons/location.svg?raw';
  import callIcon from '@/assets/icons/call.svg?raw';
  import calendarAddIcon from '@/assets/icons/calendar-add.svg?raw';
  import shareIcon from '@/assets/icons/share.svg?raw';

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
    overflow: auto;
  }

  .restaurant-screen__content::-webkit-scrollbar {
    display: none;
  }

  .restaurant-screen__preview {
    position: relative;
    min-height: 320px;
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

  .restaurant-screen__info-labels-container {
    width: 100%;
    padding: 0 16px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 6px;
    row-gap: 8px;
    margin-bottom: 16px;
  }

  .restaurant-screen__info-label {
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    width: max-content;
    height: 36px;
    font-size: 14px;
    border-radius: 18px;
    gap: 4px
  }

  .restaurant-screen__info-label--green {
    background-color: #DCFCE7;
    color: #166534;
  }

  .restaurant-screen__info-label--blue {
    background-color: #DBEAFE;
    color: #1E40AF;
  }

  .restaurant-screen__info-label--purple {
    background-color: #F3E8FF;
    color: #6B21A8;
  }

  .restaurant-screen__info-label-icon {
    height: 20px;
    width: 20px;
  }

  .restaurant-screen__info-label-icon--blue {
    fill: #1E40AF;
  }

  .restaurant-screen__info-label-icon--purple {
    fill: #6B21A8;
  }

  .restaurant-screen__info-container {
    padding: 0 24px;
  }

  .restaurant-screen__info-title {
    font-size: 20px;
    color: black;
    display: block;
    margin-bottom: 12px;
  }

  .restaurant-screen__info-description {
    font-size: 16px;
    color: #8E8E93;
    margin-bottom: 12px;
  }

  .restaurant-screen__data-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }

  .restaurant-screen__data {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;
  }

  .restaurant-screen__data-icon-background {
    height: 32px;
    width: 32px;
    border-radius: 100%;
    background-color: #F2F2F7;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .restaurant-screen__data-icon {
    height: 20px;
    width: 20px;
    fill: #007AFF;
  }

  .restaurant-screen__data-text-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: black;
  }

  .restaurant-screen__button {
    width: 100%;
    height: 80px;
    border-radius: 24px;
    color: white;
    font-size: 18px;
    margin-bottom: 16px;
  }

  .restaurant-screen__button-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .restaurant-screen__button-icon {
    height: 24px;
    width: 24px;
    fill: white;
  }

  .restaurant-screen__button--book-table {
    background: linear-gradient(90deg, #10B981 0%, #10B981 100%);
  }

  .restaurant-screen__button--telegram {
    background: linear-gradient(90deg, #0f98dd 0%, #0088cc 100%);
  }
</style>
