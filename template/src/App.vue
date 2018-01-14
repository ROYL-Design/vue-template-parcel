<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>\{{ msg }}</h1>
    {{#sass}}
    <div class="sass"></div>
    {{/sass}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

{{#sass}}
{{#if_eq sassSyntax 'scss'}}
<style lang="scss">
.sass:after {
  content: "Style language: SCSS";
  display: block;
}
</style>
{{/if_eq}}
{{#if_eq sassSyntax 'sass'}}
<style lang="sass">
.sass:after
  content: "Style language: Sass"
  display: block
</style>
{{/if_eq}}
{{/sass}}
