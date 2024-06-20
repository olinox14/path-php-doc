<template>
  <div class="topbar">
    <v-btn
        icon="fas fa-bars"
        variant="plain"
        class="smAndDown mr-2"
        aria-label="Show or hide the website menu"
        @click="isMenuOpen = !isMenuOpen"
    />

    <nuxt-link to="/" class="logo">
      <v-img src="/logo.png" alt="logo path-php" />
    </nuxt-link>

    <div class="menu mdAndUp">
      <nuxt-link
          v-for="item in menu" :key="item.label"
          :to="item.to"
          active-class="active"
      >
        {{ item.label }}
      </nuxt-link>
    </div>
    <v-spacer class="smAndDown" />

    <div class="icon-links">
      <ThemeSwitcher />

      <nuxt-link
          href="https://github.com/olinox14/path-php"
          target="_blank"
          aria-label="Open the Github page of Path-php"
      >
        <v-icon>fab fa-github</v-icon>
      </nuxt-link>
    </div>

    <v-navigation-drawer v-model="isMenuOpen" app temporary>
      <v-list nav dense aria-label="Menu">
        <v-list-item
            v-for="(item, index) in menu"
            :key="item.label"
            :to="item.to"
            class="menuItem"
        >
          <v-list-item-title class="d-flex flex-row w-100">
            <span class="flex-grow-1">
              {{ item.label }}
            </span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
  import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
  import type {Ref} from "@vue/reactivity";

  const isMenuOpen: Ref<boolean> = ref(false)

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
</script>

<style scoped lang="scss">

@media (min-width: 960px) {
  .smAndDown {
    display: none;
  }
}
@media (max-width: 960px) {
  .mdAndUp {
    display: none;
  }
}

.topbar {
  height: 72px;
  display: flex;
  flex-direction: row;
  padding: 18px;
  align-items: center;

  .logo {
    width: 140px;

    @media (max-width: 960px) {
      width: 25%;
      min-width: 30px;
    }
  }

  .v-btn {
    color: rgb(var(--v-theme-on-neutral));
  }

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