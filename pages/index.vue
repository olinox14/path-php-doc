<template>

  <h1>Path-PHP</h1>

  <p>An intuitive, standalone, and object-oriented library for file and path operations.</p>

  <pre>
    <code class="lang-php">
      &lt;?php<br/>
      use Path\Path;<br/>
      <br/>
      // Get the parent directory of the current script file and list its subdirs<br/>
      $script = new Path(__file__);<br/>
      $dir = $script-&gt;parent();<br/>
      var_dump($dir-&gt;dirs());<br/>
      <br/>
      // Get the path of the working directory, iterate over its files and change their permissions<br/>
      $path = new Path('.');<br/>
      <br/>
      foreach($path-&gt;files() as $file) {<br/>
          $file-&gt;chmod(755);<br/>
      }<br/>
      <br/>
      // Put content into a file <br/>
      $path = (new Path('.'))-&gt;append('readme.md');<br/>
      <br/>
      $path-&gt;putContent('new readme content');<br/>
      <br/>
      // And many more...<br/>
    </code>
  </pre>

  <v-btn to="get-started">Get started</v-btn>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>