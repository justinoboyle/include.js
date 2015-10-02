"use strict";

var include = {};

include.js = include;
include.injector = {};
include.settings = {};

include.settings.injectInto = "head";

include.srcLink = "https://github.com/justinoboyle/include.js";
include.author = "Justin O'Boyle & GitHub Community at " + include.srcLink;

var idScript = 0;
include.loadScript = function(c) {
    idScript++;
    var d = document.createElement("script");
    d.type = "text/javascript";
    d.src = c;
    d.setAttribute('id', 'script' + idScript);
    include.injector.inject(d);
    return d;
};

var idStyle = 0;
include.loadStylesheet = function(c) {
    idStyle++;
    var link = document.createElement("link");
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', c);
    link.setAttribute('id', 'style' + idStyle);
    include.injector.inject(link);
    return link;
};

include.loadStylesheetDelayed = function (c, delay) {
    setTimeout(function() {
        include.loadScript(c);
    }, delay);
};

include.loadScriptDelayed = function (c, delay) {
    setTimeout(function() {
        include.loadScript(c);
    }, delay);
};

include.loadGeneric = function(file, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", file, true); 
    xmlHttp.send(null);
}

// Experimental.
include.processPage = function (callback) {
    var divs = document.getElementsByClassName("!include");
    var counter = divs.length;
    while (counter-- >= 0) callback(divs[counter]);     
}

include.injector.inject = function(b) {
    document.getElementsByTagName(include.settings.injectInto)[0].appendChild(b)
};