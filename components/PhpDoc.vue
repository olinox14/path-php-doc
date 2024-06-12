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
:deep(.doc) {
  display: flex;
  flex-direction: row;

  .phpdocumentor-element {
    min-width: 80%;
    width: 80%;
    max-width: 80%;

    @media (max-width: 1200px) {
      min-width: 100%;
      width: 100%;
      max-width: 100%;
    }
  }

  .phpdocumentor-on-this-page__sidebar {
    min-width: 20%;
    width: 20%;
    max-width: 20%;
  }

  letter-spacing: 0.05rem;

  a, abbr {
    text-decoration: none;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 28px;
    margin-bottom: 16px;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 18px;
    padding: 6px;
    color: rgb(var(--v-theme-on-neutral--clickable));

    .headerlink {
      display: none;
    }
  }

  h4:hover {
    .headerlink {
      display: inline;
    }
  }


  h5 {
    margin: 8px 0;
    padding: 8px 18px;
  }

  .phpdocumentor-summary {
    font-style: italic;
    margin-bottom: 6px;
    text-align: justify;
  }

  .phpdocumentor-description {
    font-size: 14px;
    text-align: justify;
    margin-bottom: 16px;

    p {
      margin: 14px 0;
    }

    blockquote {
      padding: 12px;
      margin: 4px 8px;
      border-left: solid 2px rgba(var(--v-theme-on-neutral));
    }

    pre {
      padding: 12px 24px;
      margin: 4px 8px;
    }
  }

  .phpdocumentor-element {
    padding: 18px 0;

    p, dl, section > span, section > section {
      padding-left: 18px;
    }

    section > .phpdocumentor-signature__response_type {
      padding-left: 18px;
      font-style: italic;
    }
  }

  .phpdocumentor-code {
    display: inline-block;
    margin: 12px;
    padding: 12px;
    width: 100%;
    background: rgba(var(--v-theme-code-background));
    color: rgba(var(--v-theme-on-code-background));
    border-radius: 4px;

    a, abbr {
      color: rgba(var(--v-theme-on-code-background));
    }
  }

  .phpdocumentor-argument-list__entry {
    background: rgba(var(--v-theme-code-background));
    color: rgba(var(--v-theme-on-code-background));
    padding: 4px 12px;
    border-radius: 4px;

    a, abbr {
      color: rgba(var(--v-theme-on-code-background));
    }
  }

  .phpdocumentor-on-this-page__sidebar {
    @media (max-width: 1200px) {
      display: none;
    }
  }
}
</style>