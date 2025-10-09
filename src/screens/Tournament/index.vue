<template>
  <div class="screen">
    <div class="header">
      <PVButton @click="goBack" variant="text" class="back-button">
        <img :src="ArrowBack"/>
      </PVButton>

      <span class="header-text">
        Выберите один вариант
      </span>
    </div>

    <div class="rests-container">
      <TournamentRestItem position="top" v-if="firstRest" :rest-data="firstRest"/>

      <TournamentRestItem position="bottom" v-if="secondRest" :rest-data="secondRest"/>

      <div class="rests-data">
        <div class="rest-data-column">
          <span class="rest-data-primary">
            {{ firstRest?.avgCheck }} руб.
          </span>

          <span class="rest-data-secondary">
            Чек
          </span>

          <span class="rest-data-primary">
            {{ secondRest?.avgCheck }} руб.
          </span>
        </div>

        <div class="rest-data-column">
          <span class="rest-data-primary">
            {{ firstRest?.minutesFromMetro }} мин
          </span>

          <span class="rest-data-secondary">
            От метро
          </span>

          <span class="rest-data-primary">
            {{ secondRest?.minutesFromMetro }} мин
          </span>
        </div>

        <div class="rest-data-column">
          <span class="rest-data-primary">
            {{ firstRest?.schedule.sunday }}
          </span>

          <span class="rest-data-secondary">
            График
          </span>

          <span class="rest-data-primary">
            {{ secondRest?.schedule.sunday }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import restaurants from './mocks';
  import ArrowBack from '@/assets/icons/arrow-back.svg';
  import TournamentRestItem from './RestItem';
import { useRouter } from 'vue-router';

  defineOptions({
    name: 'TournamentScreen'
  })

  const router = useRouter();

  const firstRest = computed(() => restaurants[0]);
  const secondRest = computed(() => restaurants[1]);

  function goBack() {
    router.push({ name: 'vibes' }).catch(console.error);
  }
</script>

<style scoped>
  .screen {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  /* .splide {
    height: 200px;
  } */

  /* .splide__slide {
    height: 100px;
    width: 200px;
  } */

  .rests-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  }

  .rest-container {
    overflow: hidden;
    flex-grow: 1;
    /* background-color: burlywood; */
  }

  .header {
    background-color: rgb(19, 19, 19);
    display: flex;
    align-items: center;
    height: 50px;
    position: relative;
    padding: 0 8px;
  }

  .back-button {
    height: 32px;
    width: 32px;
    background-color: transparent;
  }

  .header-text {
    font-size: 18px;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-wrap: nowrap;
  }

  .test {
    height: 200px;
  }

  .splide__list {
    color: black;
  }

  .rest-image {
    height: calc((100vh - 50px) / 2);
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .rests-data {
    width: calc(100% - 20px);
    z-index: 10;
    position: absolute;
    height: 70px;
    background-color: #1a1a1a;
    border: 1px solid #2A2A2A;
    border-radius: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 4px 20px;
  }

  .rest-data-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: calc(100% - 8px);
    position: absolute;
  }

  .rest-data-column:nth-of-type(1) {
    top: 4px;
    left: 20px;
  }

  .rest-data-column:nth-of-type(2) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .rest-data-column:nth-of-type(3) {
    top: 4px;
    right: 20px;
  }

  .rest-data-primary {
    font-weight: 500;
    font-size: 14px;
    color: #F5F5F5;
  }

  .rest-data-secondary {
    font-weight: 400;
    font-size: 12px;
    color: #9CA3AF;
  }
</style>
