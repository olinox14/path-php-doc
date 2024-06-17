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
$('.phpdocumentor-elements__header a').remove()
$('.phpdocumentor-on-this-page__content>ul>li').slice(0, 4).remove();
$('.phpdocumentor-on-this-page__content>ul>a').remove();
$('a[href="classes/Path-Path.html"]').remove();

const urlRegex = /classes\/Path-Path\.html#method_(\w*)/;

$('a').each((_, element) => {
  const link = $(element);
  let href = link.attr('href');

  if (href) {
    const match = href.match(urlRegex);

    if (match !== null) {
      const localAnchor = `#method_${match[1]}`;
      link.attr('href', localAnchor);
      link.attr('id', match[1])
    }
  }
});

docCode.value = $('.phpdocumentor-content').html()




</script>

<style scoped lang="scss">
:deep(.doc) {
  display: flex;
  flex-direction: row;

  > section {
    max-width: 99%;
  }

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

  letter-spacing: 0.05rem;

  a, abbr {
    text-decoration: none;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 22px;
    margin: 48px 0 16px 0;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 12px;
    padding: 6px;
    color: rgb(var(--v-theme-on-neutral));

    .headerlink {
      color: rgb(var(--v-theme-on-neutral--clickable));
      margin-left: 4px;
      padding: 3px;
    }
  }

  @media (min-width: 600px) {
    .headerlink {
      display: none;
    }

    h4:hover {
      .headerlink {
        display: inline;
      }
    }
  }

  h5 {
    margin: 8px 0;
    padding: 8px 18px;

    @media (max-width: 600px) {
      padding: 4px;
    }
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
      padding-left: 18px;
      margin: 14px 0;

      @media (max-width: 600px) {
        padding-left: 6px;
      }
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

    > p, > dl, > section > span, > section > section {
      padding-left: 18px;

      @media (max-width: 600px) {
        padding-left: 6px;
      }
    }

    section > .phpdocumentor-signature__response_type {
      padding-left: 18px;
      font-style: italic;

      @media (max-width: 600px) {
        padding-left: 6px;
      }
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

    @media (max-width: 600px) {
      margin: 6px;
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

    @media (max-width: 600px) {
      padding: 4px;
    }
  }

  .phpdocumentor-on-this-page__sidebar {
    min-width: 20%;
    width: 20%;
    max-width: 20%;

    .phpdocumentor-on-this-page__content {
      position: sticky;
      top: 24px;
      right: 8px;
      max-height: 100vh;
      overflow-y: auto;
      padding-bottom: 48px;
      display: flex;
      flex-direction: column;

      .phpdocumentor-on-this-page__title {
        margin-bottom: 12px;
      }

      li {
        list-style: none;
        padding: 6px;

        @media (max-width: 600px) {
          padding: 2px;
        }
      }

      li a {
        color: rgb(var(--v-theme-on-neutral));
      }
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }
}
</style>