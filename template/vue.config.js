module.exports = {
  {{#sass}}
  sass: {
    indentedSyntax: {{#if_eq sassSyntax 'sass'}}true{{/if_eq}}{{#if_eq sassSyntax 'scss'}}false{{/if_eq}}
  }
  {{/sass}}
}
