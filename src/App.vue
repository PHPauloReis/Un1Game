<template>
  <div id="app">
    <Header />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';

export default {

  components: {
    Header,
  },

};

</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter';
  color: #333333;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
