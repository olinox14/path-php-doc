<template>
  <NuxtLayout>
    <v-app>
      <div class="topbar-container">
        <Topbar />
      </div>

      <div class="body">
        <NuxtPage />
      </div>
    </v-app>
  </NuxtLayout>
</template>
<script setup lang="ts">
</script>

<style scoped lang="scss">
.body, .topbar {
  margin: 0 20%;
  max-width: 100%;
}

.body {
  padding: 18px;
}

.topbar-container {
  border-bottom: solid 1px rgba(var(--v-theme-on-neutral), 0.2);
  margin-bottom: 3rem;
}

:deep(h2) {
  margin: 48px 0 24px 0;
  padding-bottom: 9px;
  border-bottom: solid 1px rgba(var(--v-theme-on-neutral), 0.2);
}

</style>