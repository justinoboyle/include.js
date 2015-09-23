var include = {};

include.injector = {};
include.settings = {};

include.settings.injectInto = 'head';

include.srcLink = "https://github.com/justinoboyle/include.js";
include.author = "Justin O'Boyle & GitHub Community at " + include.srcLink;

include.loadScript = function (source) {
    var inject = document.createElement('script');
    inject.type = 'text/javascript';
    inject.src = source;
    include.injector.inject(inject);
    return inject;
}

include.loadStylesheet = function (source) {
    var inject = document.createElement('link');
    inject.type = 'text/css';
    inject.href = source;
    inject.media = 'screen';
    include.injector.inject(inject);
    return inject;
}

include.injector.inject = function (inject) {
    document.getElementsByTagName(include.settings.injectInto)[0].appendChild(inject);
}