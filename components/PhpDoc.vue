<template>
  <div>
    <div v-html="docCode" />
  </div>
</template>

<script setup lang="ts">
import * as cheerio from 'cheerio';

const docCode = ref('')

const response = await fetch('https://raw.githubusercontent.com/olinox14/path-php/master/docs/classes/Path-Path.html')

const html = await response.text()
const $ = cheerio.load(html)

docCode.value = $('body').html()
</script>

<style scoped lang="scss">

</style>