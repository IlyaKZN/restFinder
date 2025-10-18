<template>
  <div class="block"
  :style="{
    background: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.9) 100%),
      url('${background}')`,
  }">
    <div class="rows-block">
      <div :key="index" v-for="(vibes, index) in vibesArrays" class="row">
        <div class="row-block-padding"/>

        <div
        v-for="{ id, text } in vibes"
        @click="toggle(id)"
        class="filter-button"
        :class="{
          'filter-button--selected': selectedIds.includes(id),
        }"
        :key="id">
          {{ text }}
        </div>
      </div>
    </div>

    <PVButton
    @click="goToTournament"
    severity="secondary"
    class="next-button"
    label="Продолжить"/>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import background from '@/images/background.avif';


  defineOptions({
    name: 'App',
  })

  const router = useRouter();

  function goToTournament() {
    router.push({ name: 'tournament' }).catch(console.error);
  }

  const vibes = new Array(10).fill('').map((item, index) => {
    return {
      text: `Вайб ${index}`,
      id: `${index}`,
    };
  })

  const vibesTwo = new Array(10).fill('').map((item, index) => {
    return {
      text: `Еще вайб ${index}`,
      id: `two-${index}`,
    };
  })

  const vibesThree = new Array(10).fill('').map((item, index) => {
    return {
      text: `Вайбик ${index}`,
      id: `three-${index}`,
    };
  })

  const vibesArrays = [vibes, vibesTwo, vibesThree];

  const selectedIds = ref<string[]>([]);

  function toggle(id: string) {
    navigator.vibrate(100);

    if (selectedIds.value.includes(id)) {
      selectedIds.value = selectedIds.value.filter((item) => item !== id);
    } else {
      selectedIds.value.push(id);
    }
  }
</script>


<style scoped>
  .block {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .row-block-padding {
    width: 2px;
  }

  .rows-block {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    gap: 4px;
    margin-bottom: 80px;
  }

  .row {
    display: flex;
    gap: 4px;
    overflow: auto;
  }

  .row::-webkit-scrollbar {
    display: none;
  }

  .filter-button {
    color: rgba(255, 255, 255, 0.8);
    width: max-content;
    border: 2px rgba(255, 255, 255, 0.3) solid;
    background-color: rgba(0, 0, 0, 0.6);
    height: 56px;
    white-space: nowrap;
    border-radius: 20px;
    padding: 2px 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
    font-size: 20px;
  }

  .filter-button--selected {
    border: 2px rgb(185, 185, 185) solid;
    color: rgba(255, 255, 255, 1);
  }

  .next-button {
    margin: 10px;
    /* border: 2px rgba(255, 255, 255, 0.4) solid; */
    /* color: white; */
    height: 60px;
    /* background-color: rgba(255, 255, 255, 0.1); */
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    /* border-radius: 16px; */
  }
</style>
