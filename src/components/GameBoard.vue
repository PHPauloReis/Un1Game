<template>
  <section class="game-board-container">
    <h2 class="title">Em qual número eu estou pensando?</h2>
    <div class="game-board-buttons-container">
      <Button
        v-for="number of numbers"
        :key="number"
        class="button"
        :title="number | formatNumber"
      />
    </div>

    <hr>

    <div class="game-board-footer">
      <Button
        class="button"
        title="Pedir ajuda"
        type="success"
        :showIcon="true"
        icon-type="help"
        icon-color="white"
        event="selected-help"
      />
      <Button
        class="button"
        title="Desistir"
        type="danger"
        :showIcon="true"
        icon-type="door"
        icon-color="white"
        event="selected-reload"
      />
    </div>
  </section>
</template>

<style scoped>

.game-board-container {
  width: 100%;
  margin-bottom: 20px;
}

.game-board-container .title {
  margin-bottom: 40px;
  font-family: 'Inter';
  font-weight: bold;
  font-size: 46px;
  color: #D84E41;
}

.game-board-buttons-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 70px;
}

.game-board-footer {
  display: flex;
  justify-content: center;
  padding: 60px 0;
}

.game-board-footer button {
  margin-left: 10px;
  margin-right: 10px;
}

hr {
  border: none;
  border-bottom: 3px solid #ECECEC;
}

</style>

<script>

import Button from '@/components/Button.vue';

export default {
  name: 'AppGameBoard',
  components: {
    Button,
  },
  data() {
    return {
      numbers: this.makeNumbers(),
    };
  },
  mounted() {
    // this.$root.$on('selected-game-mode', (gameMode) => {
    //   this.gameModeSelected = gameMode;
    // });
  },
  destroyed() {
    // this.$root.$on('selected-game-mode');
  },
  methods: {
    makeNumbers() {
      const numbers = [...Array(51).keys()];
      return numbers.filter((item) => item > 0);
    },
  },
  filters: {
    formatNumber(number) {
      return number.toString().padStart(2, '0');
    },
  },
};

</script>
