var include={};include.injector={};include.settings={};include.settings.injectInto="head";include.srcLink="https://github.com/justinoboyle/include.js";include.author="Justin O'Boyle & GitHub Community at "+include.srcLink;include.loadScript=function(b){var a=document.createElement("script");a.type="text/javascript";a.src=b;include.injector.inject(a);return a};include.loadStylesheet=function(b){var a=document.createElement("link");a.href=b;include.injector.inject(a);return a};include.injector.inject=function(a){document.getElementsByTagName(include.settings.injectInto)[0].appendChild(a)};