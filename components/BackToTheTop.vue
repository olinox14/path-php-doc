<template>
  <div class="pageTop" v-intersect="onTopIntersect"/>

  <v-btn
      v-if="isVisible"
      :to="{ path: '', hash: '#top' }"
      aria-label="Back to the top of the page"
      class="back-to-the-top"
  >
    <v-icon>fas fa-arrow-up</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
const isVisible: Ref<boolean> = ref(false)

const onTopIntersect = (intersect: boolean) => {
  isVisible.value = !intersect
}
</script>

<style scoped lang="scss">
.pageTop {
  position: absolute;
  top: 0;
  height: 300px;
  width: 0;
}

.back-to-the-top {
  position: fixed;
  right: 15%;
  bottom: 58px;
  z-index: 100;
  height: 48px;
  width: 48px;
  border-radius: 32px;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));

  @media (max-width: 1350px) {
    right: 5%;
  }

  @media (max-width: 600px) {
    bottom: 30px;
    right: 15%;
  }
}
</style>