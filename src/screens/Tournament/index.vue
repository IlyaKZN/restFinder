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
      <Transition name="change-top">
        <TournamentRestItem class="testt" :key="topRest.id" @click="selectItem('top')" position="top" v-if="topRest" :rest-data="topRest"/>
      </Transition>

      <Transition name="change-bottom">
        <TournamentRestItem class="testt" :key="bottomRest.id" @click="selectItem('bottom')" position="bottom" v-if="bottomRest" :rest-data="bottomRest"/>
      </Transition>

      <div class="rests-data">
        <div class="rest-data-column">
          <Transition mode="out-in" name="fade">
            <span :key="topRest?.id" class="rest-data-primary">
              {{ topRest?.avgCheck }} руб.
            </span>
          </Transition>

          <span class="rest-data-secondary">
            Чек
          </span>

          <Transition mode="out-in" name="fade">
            <span :key="bottomRest?.id" class="rest-data-primary">
              {{ bottomRest?.avgCheck }} руб.
            </span>
          </Transition>
        </div>

        <div class="rest-data-column">
          <Transition mode="out-in" name="fade">
            <span :key="topRest?.id" class="rest-data-primary">
              {{ topRest?.minutesFromMetro }} мин
            </span>
          </Transition>

          <span class="rest-data-secondary">
            От метро
          </span>

          <Transition mode="out-in" name="fade">
            <span :key="bottomRest?.id" class="rest-data-primary">
              {{ bottomRest?.minutesFromMetro }} мин
            </span>
          </Transition>
        </div>

        <div class="rest-data-column">
          <Transition mode="out-in" name="fade">
            <span :key="topRest?.id" class="rest-data-primary">
              {{ topRest?.schedule.sunday }}
            </span>
          </Transition>

          <span class="rest-data-secondary">
            График
          </span>

          <Transition mode="out-in" name="fade">
            <span :key="bottomRest?.id" class="rest-data-primary">
              {{ bottomRest?.schedule.sunday }}
            </span>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import restaurants from './mocks';
  import ArrowBack from '@/assets/icons/arrow-back.svg';
  import TournamentRestItem from './RestItem';
  import { useRouter } from 'vue-router';

  defineOptions({
    name: 'TournamentScreen'
  })

  const router = useRouter();

  const lastRestIndex = ref(1);

  const topRestIndex = ref(0);
  const bottomRestIndex = ref(1);

  const topRest = computed(() => restaurants[topRestIndex.value]);
  const bottomRest = computed(() => restaurants[bottomRestIndex.value]);

  function goBack() {
    router.push({ name: 'vibes' }).catch(console.error);
  }

  function endTournamentHandler(winnerRestId: number) {
    router.push({ name: 'restaurant', params: { id: winnerRestId } })
  }

  function selectItem(number: 'top' | 'bottom') {
    if (lastRestIndex.value === restaurants.length - 1) {
      const winnerId = number === 'top' ? topRest.value!.id : bottomRest.value!.id;

      endTournamentHandler(winnerId);

      return;
    }

    lastRestIndex.value += 1;

    if (number === 'top') {
      bottomRestIndex.value = lastRestIndex.value;
    } else {
      topRestIndex.value = lastRestIndex.value;
    }
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

  .rests-container {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  }

  .rest-container {
    overflow: hidden;
    flex-grow: 1;
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

  /* .rest-image {
    height: calc((100vh - 50px) / 2);
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  } */

  .rests-data {
    width: calc(100% - 20px);
    z-index: 10;
    position: absolute;
    height: 90px;
    background-color: #1a1a1a;
    border: 1px solid #2A2A2A;
    border-radius: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 6px 20px;
  }

  .rest-data-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: calc(100% - 12px);
    position: absolute;
    width: 120px;
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
    font-size: 18px;
    color: #F5F5F5;
  }

  .rest-data-secondary {
    font-weight: 400;
    font-size: 14px;
    color: #9CA3AF;
  }

  .testt {
    z-index: 4;
  }


  .change-top-enter-active {
    animation: entertop 0.5s;
  }

  .change-top-leave-active {
    animation: leavetop 0.5s;
    position: absolute;
    z-index: 5;
    width: 100%;
  }

  .change-bottom-enter-active {
    animation: enterbottom 0.5s;
    z-index: 1;
  }

  .change-bottom-leave-active {
    animation: leavebottom 0.5s;
    position: absolute;
    z-index: 5;
    width: 100%;
  }

  @keyframes leavetop {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -100%);
    }
  }

  @keyframes entertop {
    0% {
      transform: translate(0, 100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes enterbottom {
    0% {
      transform: translate(0, -100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes leavebottom {
    0% {
      transform: translate(0, 100%);
    }
    100% {
      transform: translate(0, 200%);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
