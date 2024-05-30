<template>

  <h1>Path-PHP</h1>

  <p>An intuitive, standalone, and object-oriented library for file and path operations.</p>

  <CodeBlock :code="code" language="php" />

<!--  <CodeBlock>-->
<!--    &lt;?php<br/>-->
<!--    use Path\Path;<br/>-->
<!--    <br/>-->
<!--    // Get the parent directory of the current script file and list its subdirs<br/>-->
<!--    $script = new Path(__file__);<br/>-->
<!--    $dir = $script-&gt;parent();<br/>-->
<!--    var_dump($dir-&gt;dirs());<br/>-->
<!--    <br/>-->
<!--    // Get the path of the working directory, iterate over its files and change their permissions<br/>-->
<!--    $path = new Path('.');<br/>-->
<!--    <br/>-->
<!--    foreach($path-&gt;files() as $file) {<br/>-->
<!--        $file-&gt;chmod(755);<br/>-->
<!--    }<br/>-->
<!--    <br/>-->
<!--    // Put content into a file <br/>-->
<!--    $path = (new Path('.'))-&gt;append('readme.md');<br/>-->
<!--    <br/>-->
<!--    $path-&gt;putContent('new readme content');<br/>-->
<!--    <br/>-->
<!--    // And many more...<br/>-->
<!--  </CodeBlock>-->

  <v-btn to="get-started">Get started</v-btn>
</template>

<script setup lang="ts">

const code = `
<?php
use Path\\Path;

// Get the parent directory of the current script file and list its subdirs
$script = new Path(__file__);
$dir = $script->parent();
var_dump($dir->dirs());


// Get the path of the working directory, iterate over its files and change their permissions
$path = new Path('.');

foreach($path->files() as $file) {
    $file->chmod(755);
}


// Put content into a file
$path = (new Path('.'))->append('readme.md');

$path->putContent('new readme content');

// And many more...
`

</script>

<style scoped lang="scss">

</style>