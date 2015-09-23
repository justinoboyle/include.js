var include = {};
include.injector = {};
include.settings = {};
include.settings.injectInto = "head";
include.srcLink = "https://github.com/justinoboyle/include.js";
include.author = "Justin O'Boyle & GitHub Community at " + include.srcLink;
include.loadScript = function(c) {
    var d = document.createElement("script");
    d.type = "text/javascript";
    d.src = c;
    include.injector.inject(d);
    return d;
};
include.loadStylesheet = function(c) {
    var link = document.createElement("link");
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', c);
    include.injector.inject(link);
    return link;
};
include.loadStylesheetDelayed = function (c, delay) {
    setTimeout(function() {
        loadScript(c);
    }, delay);
};
include.loadScriptDelayed = function (c, delay) {
    setTimeout(function() {
        loadScript(c);
    }, delay);
};
include.injector.inject = function(b) {
    document.getElementsByTagName(include.settings.injectInto)[0].appendChild(b)
};