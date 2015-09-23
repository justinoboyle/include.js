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
    return d
};
include.loadStylesheet = function(c) {
    var d = document.createElement("link");
    d.type = "text/css";
    d.href = c;
    d.media = "screen";
    include.injector.inject(d);
    return d
};
include.injector.inject = function(b) {
    document.getElementsByTagName(include.settings.injectInto)[0].appendChild(b)
};