<!--
Define meta tags for a page
-->
<template>
  <div />
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    default: 'images/Opentalent',
  },
})

useSeoMeta({
  title: props.title,
  ogTitle: props.title,
  twitterTitle: props.title,
  description: props.description,
  ogDescription: props.description,
  twitterDescription: props.description,
  ogImage: props.image,
  twitterImage: props.image,
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogLocale: 'en_US',
})
</script>
