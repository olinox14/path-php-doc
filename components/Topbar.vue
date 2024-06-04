<template>
  <div class="topbar">
    <nuxt-link to="/">
      <v-img src="/logo.png" :width="140" />
    </nuxt-link>

    <div class="menu">
      <nuxt-link
          v-for="item in menu" :key="item.label"
          :to="item.to"
          active-class="active"
      >
        {{ item.label }}
      </nuxt-link>
    </div>

    <div class="icon-links">
      <ThemeSwitcher />

      <nuxt-link
          href="https://github.com/olinox14/path-php"
          target="_blank"
      >
        <v-icon>fab fa-github</v-icon>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ThemeSwitcher from "~/components/ThemeSwitcher.vue";

  const menu = [
    {
      label: "Home",
      to: "/"
    },
    {
      label: "Get started",
      to: "/get-started"
    },
    {
      label: "API",
      to: "api"
    }
  ]

  const onChangeThemeClick = () => {

  }
</script>

<style scoped lang="scss">
.topbar {
  height: 72px;
  display: flex;
  flex-direction: row;
  padding: 18px;
  align-items: center;

  .menu {
    margin: 0 auto;

    a {
      text-decoration: none;
      color: rgb(var(--v-theme-on-neutral));
      padding: 8px;
      font-weight: bold;
      margin: 0 18px;
      font-size: 18px;
      padding: 8px;
    }

    a:hover {
      color: rgb(var(--v-theme-on-neutral--clickable));
    }

    a.active {
      color: rgb(var(--v-theme-on-neutral--clickable));
      border-bottom: solid 2px rgb(var(--v-theme-on-neutral--clickable));
    }
  }

  .icon-links {
    color: black;
    font-size: 20px;
    display: flex;
    flex-direction: row;

    > * {
      margin-left: 16px;
    }

    a {
      color: rgb(var(--v-theme-on-neutral--clickable));
    }
  }
}
</style>