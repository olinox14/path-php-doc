<template>

  <h1>Path-PHP</h1>

  <p>An intuitive, standalone, and object-oriented library for file and path operations.</p>

  <CodeBlock :code="code" language="php" />

  <v-btn to="get-started">Get started</v-btn>
</template>

<script setup lang="ts">

const code = `
<?php
use Path\\Path;

$dir = new Path('/home/user/workdir');

foreach ($dir->files() as $file) {
    $file->chmod(755);
}

$fooDir = $dir->append('foo');

$fooDir->mkdir();

$newFile = $fooDir->append('my-file.txt');

$newFile->putContent('my new content');
`
</script>

<style scoped lang="scss">

</style>