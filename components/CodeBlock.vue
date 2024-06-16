<template>
  <div :class="['code-block', themeClass]">
    <pre><code :class="[language, 'hljs']" v-html="highlightedCode" /></pre>
    <v-btn
        icon="fas fa-copy"
        variant="tonal"
        aria-label="Copy the content to the clipboard"
        class="text-primary"
        @click="copyCode"
    />
  </div>
  <v-snackbar v-model="showConfirmation" color="success" :timeout="2000">
    Content copied to clipboard
  </v-snackbar>
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

  let copyCode = () => { console.error('clipboard is not available')}

  const showConfirmation = ref(false)

  onMounted(() => {
    copyCode = async () => {
      try {
        await navigator.clipboard.writeText(props.code);
        showConfirmation.value = true
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  })
</script>

<style lang="scss">
// /!\ Warning: `scoped` attribute break the highlight js style, do not add here (no harm though)
@use "sass:meta";

.code-block {
  display: flex;
  flex-direction: row;
  margin: 24px;
  background: rgba(var(--v-theme-code-background));
  border-radius: 4px;

  * {
    background: transparent !important;
  }

  pre {
    flex: 1;
  }

  code {
    white-space: pre-wrap;
  }

  @media (max-width: 600px) {
    margin: 24px 6px;
  }
}

.light {
  @include meta.load-css("highlight.js/styles/stackoverflow-light");
}

.dark {
  @include meta.load-css("highlight.js/styles/stackoverflow-dark");
}

// no syntax coloration with shell language
.shell {
  * {
    color: rgba(var(--v-theme-on-code-background)) !important;
  }
}
</style>