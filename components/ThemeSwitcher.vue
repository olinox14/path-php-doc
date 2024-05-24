<template>
  <v-switch
      v-model="theme.global.name.value"
      density="compact"
      inline
      false-value="light"
      false-icon="fas fa-sun"
      true-value="dark"
      true-icon="fas fa-moon"
  />
</template>

<script setup lang="ts">
import {useTheme} from "vuetify";

const theme = useTheme()
</script>

<style scoped lang="scss">
  .v-switch {
    min-width: 60px;
    max-width: 60px;
    min-height: 40px;
    max-height: 40px;
  }
</style>
