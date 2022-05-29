<template>
  <section class="game-mode-container">
    <h2 class="title">Selecione um modo de Jogo:</h2>
    <div class="game-mode-buttons-container">
      <Button
        double-padding
        title="Fácil"
        event="selected-game-mode"
        value="easy"
        :active="gameModeSelected === 'selected-easy'"
        :disabled="gameModeSelected && gameModeSelected !== 'selected-easy'"
      />

      <Button
        double-padding
        title="Normal"
        event="selected-game-mode"
        value="normal"
        :active="gameModeSelected === 'selected-normal'"
        :disabled="gameModeSelected && gameModeSelected !== 'selected-normal'"
      />

      <Button
        double-padding
        title="Difícil"
        event="selected-game-mode"
        value="hard"
        :active="gameModeSelected === 'selected-hard'"
        :disabled="gameModeSelected && gameModeSelected !== 'selected-hard'"
      />
    </div>

    <hr>
  </section>
</template>

<style scoped>

.game-mode-container {
  width: 100%;
  margin-bottom: 70px;
}

.game-mode-container .button {
  margin-left: 20px;
  margin-right: 20px;
}

.game-mode-container .title {
  margin-bottom: 40px;
}

.game-mode-buttons-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
}

hr {
  border: none;
  border-bottom: 3px solid #ECECEC;
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
      if (gameMode === 'selected-reload') {
        this.gameModeSelected = null;
      } else {
        this.gameModeSelected = gameMode;
        this.$store.commit('setRandomNumber');
      }
    });
  },
};

</script>
