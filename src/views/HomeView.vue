<template>
  <main>
    <SelectGameMode />
    <GameBoard v-if="selectedGameMode" />
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
      selectedGameMode: false,
    };
  },
  mounted() {
    this.$root.$on('selected-game-mode', () => {
      this.selectedGameMode = true;
    });

    this.$root.$on('selected-game-mode', (gameMode) => {
      if (gameMode === 'selected-reload') {
        this.selectedGameMode = false;
      } else {
        this.selectedGameMode = true;
      }
    });
  },
};

</script>

<style scoped>

main {
  width: 100%;
}

</style>
