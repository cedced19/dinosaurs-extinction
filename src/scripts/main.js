// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  greeny = require('bespoke-theme-greeny'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  greeny.theme(),
  greeny.scale(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  hash(),
  progress(),
  state(),
  forms()
]);


