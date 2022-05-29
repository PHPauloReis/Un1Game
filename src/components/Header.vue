<template>
  <header>
    <span class="logo_primary">Un1</span>
    <span class="logo_secondary">Games</span> - Adivinhe o número
  </header>
</template>

<script>

export default {
  name: 'AppHeader',
};

</script>

<style scoped>

header {
  width: 100%;
  padding: 20px;
  height: 111px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  font-size: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
}

header .logo_primary {
  color: #D84E41
}

header .logo_secondary {
  color: #F16845;
  margin-right: 15px;
}

</style>
