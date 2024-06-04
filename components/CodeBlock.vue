<template>
  <div :class="['code-block', themeClass]">
    <pre>
       <code :class="[language, 'hljs']" v-html="highlightedCode" />
    </pre>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import hljs from 'highlight.js'

  const props = defineProps({
    code: String,
    language: {
      type: String,
      required: false,
      default: 'php'
    }
  })

  import {useTheme} from "vuetify";

  const theme = useTheme()
  const themeClass = computed(() => theme.name.value)

  const highlightedCode = ref(props.code)

  watch(() => props.code, (newVal) => {
    if (newVal) {
      highlightedCode.value = hljs.highlightAuto(newVal).value;
    }
  }, { immediate: true });
</script>

<style lang="scss">
// /!\ Warning: `scoped` attribute break the highlight js style, do not add here (no harm though)
@use "sass:meta";

.code-block {
  margin: 24px;
  border-radius: 24px;
  background: rgba(var(--v-theme-code-background));

  * {
    background: transparent !important;
  }

  code {
    padding: 8px 32px !important;
    border-radius: 9px;
    white-space: pre-wrap;
  }
}

.light {
  @include meta.load-css("highlight.js/styles/a11y-light");
}

.dark {
  @include meta.load-css("highlight.js/styles/a11y-dark");
}
</style>