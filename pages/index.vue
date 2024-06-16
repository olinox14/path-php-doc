<template>
  <Meta
      title="Path-PHP"
      description="An intuitive, standalone, and object-oriented library for file and path operations"
  />

  <h1>Path-PHP</h1>

  <div class="content">
    <p class="mb-6">
      <strong>An intuitive, standalone, and object-oriented library for file and path operations.</strong>
    </p>

    <p>Make a Path object :</p>

    <CodeBlock :code="codeStart" language="php" />

    <p>Build and manipulate paths :</p>

    <CodeBlock :code="codeManipulate" language="php" />

    <p>Browse directories and files :</p>

    <CodeBlock :code="codeBrowse" language="php" />

    <p>Perform all the file operations allowed by PHP's builtin functions :</p>

    <CodeBlock :code="codeBuiltinOperations" language="php" />

    <p>And more :</p>

    <CodeBlock :code="codeAdditionalOperations" language="php" />

    <p>Get explicit and catchable exceptions :</p>

    <CodeBlock :code="codeExceptions" language="php" />

    <div class="d-flex justify-center">
      <v-btn to="get-started" class="bg-primary">Get started</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">

const codeStart = `<?php
use Path\\Path;

$dir = new Path('/home/user/myFile.txt');
`

const codeManipulate = `$dir = new Path('/home/user/workdir');

$newPath = $dir->append('foo.txt');

$otherPath = $dir->append('subDir', 'foo.txt');

$parentDir = $dir->parent();
`

const codeBrowse = `$dir = new Path('/home/user/workdir');

foreach ($dir->files() as $file) {
    // ...
}

foreach ($dir->dirs() as $dir) {
    // ...
}
`

const codeBuiltinOperations = `$file = new Path('/home/user/file.txt');
$file->chmod(0777);
`

const codeAdditionalOperations = `$dir = new Path('/home/user/foo');
$target = new Path('/home/user/bar');
$dir->copyTree($target);
`

const codeExceptions = `$file = new Path('/home/user/foo.txt');
$file->remove();

// >>> FileNotFoundException('File does not exist: /home/user/foo.txt')
`
</script>

<style scoped lang="scss">

@media (min-width: 600px) {
  .content {
    padding: 24px;
  }
}

</style>