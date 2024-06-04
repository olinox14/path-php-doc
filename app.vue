<template>
  <NuxtLayout>
    <v-app>
      <div class="topbar-container">
        <Topbar />
      </div>

      <div class="body">
        <NuxtPage />
      </div>

      <v-footer no-gutters :height="36">
        <span>Path-PHP 2024</span>
        <span>
          <nuxt-link
              href="https://github.com/olinox14/path-php/blob/master/LICENCE"
              target="_blank"
          >
            MIT Licence
          </nuxt-link>
        </span>
      </v-footer>
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
  display: flex;
  flex-direction: column;
  flex: 1;
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

.v-footer {
  max-height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: rgb(var(--v-theme-neutral-strong));
  font-size: 12px;

  a {
    color: rgb(var(--v-theme-on-neutral));
  }

  span {
    margin: 0 24px;
  }
}

</style>