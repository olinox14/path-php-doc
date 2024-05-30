<template>
  <v-skeleton-loader v-if="pending" type="article" height="300" />
  <CodeBlockClient v-else :code="code" :language="language" />
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  defineProps({
    code: String,
    language: {
      type: String,
      required: false,
      default: 'php'
    }
  })

  const pending = ref(true)

  onMounted(() => pending.value = false)
</script>
