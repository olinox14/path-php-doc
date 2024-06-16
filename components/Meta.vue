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
    default: 'logo.png',
  },
})

useHead({
  title: props.title,
  meta: [
    {
      name: 'description', content: props.description
    },
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap',
    },
  ]
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
