<template>
  <div>
    <div v-html="docCode" class="doc" />
  </div>
</template>

<script setup lang="ts">
import * as cheerio from 'cheerio';

const docCode = ref('')

const response = await fetch('https://raw.githubusercontent.com/olinox14/path-php/master/docs/classes/Path-Path.html')

const html = await response.text()
const $ = cheerio.load(html)

$('.phpdocumentor-breadcrumbs').remove()
$('.phpdocumentor-element__package').remove()
$('.phpdocumentor-element-found-in').remove()
$('#toc').remove()
$('.phpdocumentor-tag-list__heading').remove()
$('.phpdocumentor-tag-list').remove()
$('#toc-properties').remove()
$('.phpdocumentor-table-of-contents').remove()
$('#toc-methods').remove()
$('.phpdocumentor-properties').remove()
$('.phpdocumentor-modal').remove()

docCode.value = $('.phpdocumentor-content').html()
</script>

<style scoped lang="scss">
.doc {
  display: flex;
  flex-direction: row;

  :deep(.phpdocumentor-element) {
    min-width: 80%;
    width: 80%;
    max-width: 80%;
  }

  :deep(.phpdocumentor-on-this-page__sidebar) {
    min-width: 20%;
    width: 20%;
    max-width: 20%;
  }
}
</style>