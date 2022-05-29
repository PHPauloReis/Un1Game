<template>
  <div class="button">
    <Icon :color="iconColor" type="reload" />
    {{ title }}
  </div>
</template>

<script>

import Icon from '@/components/Icon.vue';

export default {
  name: 'AppButton',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'Default',
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    iconColor: {
      type: String,
      required: false,
      default: '#333333',
    },
  },
  components: {
    Icon,
  },
};

</script>

<style scoped>

.button {
  background-color: #FFF;
  border: 2px solid #C4C4C4;
  border-radius: 12px;
  padding: 16px 21px;
  font-size: 26px;
  box-shadow: 0px 3px 0px #C4C4C4;
  min-height: 65px;
  text-align: center;
  display: flex;
  align-items: center;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
  supported by Chrome, Edge, Opera and Firefox */
}

.button .icon_container {
  margin-right: 6px;
}

.button:hover {
  background: #EFEFEF;
  cursor: pointer;
}

.button:active {
  margin-top: 3px;
  box-shadow: none !important;
}

.active {
  background: #DBF4FE;
  border: 2px solid #78D9FC;
  box-shadow: 0px 3px 0px #78D9FC;
  color: #39B4E0;
}

.active:hover {
  background-color: #B5E8FC;
}

.disabled {
  background: #E5E5E5;
  border: 2px solid #E5E5E5;
  box-shadow: 0px 3px 0px #D9D9D9;
  color: #BFBFBF;
}

.disabled:hover {
  background-color: #E5E5E5;
}

.disabled:active {
  margin-top: 0;
  box-shadow: 0px 3px 0px #D9D9D9 !important;
}

.success {
  background-color: #39CC33;
  border: 2px solid #39CC33;
  box-shadow: 0px 3px 0px #48A728;
  color: #FFF;
  font-weight: bold;
}

.success:hover {
  background-color: #14BE0D;
  border-color: #14BE0D;
}

.danger {
  background-color: #FF4D54;
  border: 2px solid #FF4D54;
  box-shadow: 0px 3px 0px #D6151D;
  color: #FFF;
  font-weight: bold;
}

.danger:hover {
  background-color: #E62D34;
  border-color: #E62D34;
}

.primary {
  background: #00B1F2;
  border: 2px solid #00B1F2;
  box-shadow: 0px 3px 0px #009AD3;
  color: #FFF;
  font-weight: bold;
}

.primary:hover {
  background-color: #03ABE9;
  border-color: #03ABE9;
}

</style>
