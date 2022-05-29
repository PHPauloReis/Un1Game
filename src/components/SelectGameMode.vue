<template>
  <section class="game-mode-container">
    <h2 class="title">Selecione um modo de Jogo:</h2>
    <div class="game-mode-buttons-container">
      <Button
        class="button"
        double-padding
        title="Fácil"
        event="selected-easy"
        :active="gameModeSelected === 'selected-easy'"
        :disabled="gameModeSelected && gameModeSelected !== 'selected-easy'"
      />

      <Button
        class="button"
        double-padding
        title="Normal"
        event="selected-normal"
        :active="gameModeSelected === 'selected-normal'"
        :disabled="gameModeSelected && gameModeSelected !== 'selected-normal'"
      />

      <Button
        class="button"
        double-padding
        title="Difícil"
        event="selected-hard"
        :active="gameModeSelected === 'selected-hard'"
        :disabled="gameModeSelected && gameModeSelected !== 'selected-hard'"
      />
    </div>
  </section>
</template>

<style scoped>

.game-mode-container {
  width: 100%;
}

.game-mode-container .button {
  margin: 0 20px;
}

.game-mode-container .title {
  margin-bottom: 40px;
}

.game-mode-buttons-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

</style>

<script>

import Button from '@/components/Button.vue';

export default {
  name: 'AppSelectGameMode',
  components: {
    Button,
  },
  data() {
    return {
      gameModeSelected: null,
    };
  },
  mounted() {
    this.$root.$on('selected-game-mode', (gameMode) => {
      this.gameModeSelected = gameMode;
    });
  },
};

</script>
