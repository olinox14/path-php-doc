<template>
  <v-switch
      v-model="themeValue"
      density="compact"
      inline
      false-value="light"
      false-icon="fas fa-sun"
      true-value="dark"
      true-icon="fas fa-moon"
      aria-label="Switch between light and dark theme"
  />
</template>

<script setup lang="ts">
import {useTheme} from "vuetify";

const theme = useTheme()
const themeValue = ref(theme.global.name.value);

onMounted(() => {
  watch(themeValue, (newVal) => {
    theme.global.name.value = newVal;
    localStorage.setItem('theme', newVal);
  });

  if (localStorage.getItem('theme')) {
    themeValue.value = localStorage.getItem('theme');
    theme.global.name.value = themeValue.value;
  }
})
</script>

<style scoped lang="scss">
  .v-switch {
    min-width: 60px;
    max-width: 60px;
    min-height: 40px;
    max-height: 40px;
  }
</style>
