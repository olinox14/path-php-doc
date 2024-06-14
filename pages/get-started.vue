<template>
  <h1>Get started</h1>

  <h2>Requirements</h2>

  <p><b>Path-PHP</b> requires PHP 8.0 or ulterior versions.</p>

  <h2>Installation</h2>

  <p>Install with composer :</p>

  <CodeBlock :code="codeInstall" language="shell" />

  <h2>Usage</h2>

  <p>
    Then, just import the <code>Path</code> class :
  </p>
  <CodeBlock :code="codeUsage" language="php" />

  <div class="d-flex justify-center">
    <v-btn to="api" class="bg-primary">API documentation</v-btn>
  </div>

</template>

<script setup lang="ts">

const codeInstall = `composer require olinox14/path-php`

const codeUsage = `<?php
use Path\\Path;

$path = new Path(__file__);

$dir = $path->parent();

foreach ($dir->files() as $file) {
    if ($file->ext() === 'html') {
        $file->rename($file->name() . '.md');
    }
}
`
</script>

<style scoped lang="scss">

</style>