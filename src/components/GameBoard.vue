<template>
  <section v-if="gameModeSelected" class="game-board-container">
    <h2 class="title">Em qual número eu estou pensando?</h2>

    <Alert
      :message="getAlertMessage"
      :type="getAlertType"
    />

    <div class="game-board-buttons-container">
      <Button
        v-for="number of numbers"
        :key="number"
        :title="number | formatNumber"
        :value="number"
        :type="number === randomNumber ? 'success' : ''"
        :disabled="disabledNumbers && disabledNumbers.includes(number) && number !== randomNumber"
        event="selected-option-value"
      />
    </div>

    <hr>

    <div class="game-board-footer">
      <Button
        title="Pedir ajuda"
        :type="gameModeSelected !== 'selected-hard' ? 'success' : ''"
        :showIcon="true"
        icon-type="help"
        icon-color="white"
        event="selected-game-mode"
        value="help"
        :disabled="gameModeSelected === 'selected-hard'"
      />
      <Button
        title="Desistir"
        type="danger"
        :showIcon="true"
        icon-type="door"
        icon-color="white"
        event="selected-game-mode"
        value="reload"
      />
    </div>
  </section>
</template>

<script>

import Button from '@/components/Button.vue';
import Alert from '@/components/Alert.vue';

export default {
  name: 'AppGameBoard',
  components: {
    Button,
    Alert,
  },
  data() {
    return {
      gameModeSelected: null,
      numbers: this.makeNumbers(),
      disabledNumbers: this.$store.getters.getDisabledNumbers,
      randomNumber: null,
      remainingAttemptsList: {
        'selected-easy': 10,
        'selected-normal': 5,
        'selected-hard': 3,
      },
      remainingAttempts: 10,
      playerWon: false,
    };
  },
  mounted() {
    this.$root.$on('reseted-game', () => {
      this.gameModeSelected = null;
    });

    this.$root.$on('selected-game-mode', (gameMode) => {
      if (gameMode === 'selected-reload') {
        this.gameModeSelected = null;
        this.$store.commit('resetDisabledNumbers');
        this.$store.commit('clearRandomNumber');
        this.disabledNumbers = this.$store.getters.getDisabledNumbers;
        this.randomNumber = this.$store.getters.getRandomNumber;
        this.remainingAttempts = this.remainingAttemptsList[gameMode];
        this.playerWon = false;
      } else {
        this.gameModeSelected = gameMode;
        this.remainingAttempts = this.remainingAttemptsList[gameMode];
      }
    });

    this.$root.$on('selected-option-value', (value) => {
      if (value === this.$store.getters.getRandomNumber) {
        this.randomNumber = value;
        this.playerWon = true;
      } else {
        this.$store.commit('disableNumber', value);
        this.disabledNumbers = this.$store.getters.getDisabledNumbers;
        this.remainingAttempts -= 1;
      }
    });
  },
  computed: {
    getAlertType() {
      if (this.playerWon) {
        return 'success';
      }

      if (this.remainingAttempts < 2) {
        return 'danger';
      }

      return '';
    },
    getAlertMessage() {
      if (this.playerWon) {
        return 'Parabéns, você venceu!';
      }

      if (this.remainingAttempts === 1) {
        return `Você só tem mais ${this.remainingAttempts} jogada!`;
      }

      if (!this.playerWon && this.remainingAttempts < 1) {
        return 'Que pena, você perdeu!';
      }

      return `Você ainda tem ${this.remainingAttempts} jogadas!`;
    },
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
  gap: 15px;
  align-items: flex-start;
  margin-bottom: 70px;
}

.game-board-footer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
