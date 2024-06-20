<template>
  <PageMeta
      title="Path-PHP - Documentation"
      description="Path-PHP documentation. An intuitive, standalone, and object-oriented library for file and path operations"
  />

  <h1>Path-PHP</h1>

  <div class="content">
    <p class="mb-3">
      <strong>An intuitive, standalone, and object-oriented library for file and path operations.</strong>
    </p>

    <p class="mb-3">
      Path-PHP aims to allow you to build and manipulate paths, iterate over files and directories,
      and perform virtually all of PHP's built-in file operations.
    </p>

    <p class="mb-6">
      It also aims to fill the gaps of missing object-oriented and convenient file manipulation methods in the PHP core,
      by providing common methods that are absent from the builtin methods, such as a variety of recursive operations,
      and a real error management during file operations.
    </p>

    <h2>Usage</h2>

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

const codeManipulate = `<?php
use Path\\Path;

// Instantiate a new path
$dir = new Path('/home/user/workdir');

// Add a part to your path: '/home/user/workdir/foo.txt'
$newPath = $dir->append('foo.txt');

// Add multiple parts to your path: '/home/user/workdir/sub_dir/foo.txt'
$otherPath = $dir->append('sub_dir', 'foo.txt');

// Get the parent dir of your path: '/home/user'
$parentDir = $dir->parent();
`

const codeBrowse = `<?php
use Path\\Path;

$dir = new Path('/home/user/workdir');

// Iterate over the files in '/home/user/workdir'
foreach ($dir->files() as $file) {
    // ...
}

// Iterate over the directories in '/home/user/workdir'
foreach ($dir->dirs() as $dir) {
    // ...
}

// Recursively walk over the files and directories with walkDir or glob
foreach ($dir->walkDirs() as $dir) {
    // ...
}

foreach ($dir->glob('*.txt') as $file) {
    // ...
}
`

const codeBuiltinOperations = `<?php
use Path\\Path;

$file = new Path('/home/user/file.txt');

// Get file's name (without extension)
$file->name();

// Or file's basename (with extension)
$file->basename();

// Or get its extension
$file->ext();

// Check if the file exists
$file->exists();

// Get its absolute path
$file->absPath();

// And more
$file->chmod(0777);
$file->isLink();
$file->mtime();
// ...etc
`

const codeAdditionalOperations = `<?php
use Path\\Path;

$dir = new Path('/home/user/foo');

// Recursively copy a directory
$target = new Path('/home/user/bar');
$dir->copyTree($target);

// Recursively remove a directory and its content
$dir->rmdir(true);

// Expand global variables in the path
$dir->expandVars();

// And more
`

const codeExceptions = `<?php
use Path\\Path;

$file = new Path('/home/user/foo.txt');
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