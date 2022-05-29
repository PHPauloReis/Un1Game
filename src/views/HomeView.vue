<template>
  <main>
    <SelectGameMode />
    <GameBoard />
  </main>
</template>

<script>

import SelectGameMode from '@/components/SelectGameMode.vue';
import GameBoard from '@/components/GameBoard.vue';

export default {
  name: 'HomeView',
  components: {
    SelectGameMode,
    GameBoard,
  },
  data() {
    return {
    };
  },
};

</script>

<style scoped>

main {
  width: 100%;
}

</style>
