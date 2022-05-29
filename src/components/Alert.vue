<template>
  <div
    :class="{
      'alert': true,
      'danger': type === 'danger',
      'success': type === 'success',
    }"
  >
    {{ message }}
  </div>
</template>

<script>

export default {
  name: 'AppButton',
  props: {
    message: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'Default',
    },
  },
};

</script>

<style scoped>

.alert {
  width: 402px;
  height: 78px;
  background: #FFFFFF;
  border: 2px solid #C4C4C4;
  border-radius: 12px;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.success {
  background: rgba(57, 204, 51, 0.28);
  border: 2px solid #48A728;
  color: #48A728;
}

.danger {
  background: rgba(255, 77, 84, 0.38);
  border: 2px solid #FF4D54;
  color: #FF4D54;
}

</style>
