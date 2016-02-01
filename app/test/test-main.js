var tests = [];
for (var file in window.__karma__.files) {
    if (/\/base\/app\/test\/[A-z\/\-]*\-spec\.js$/.test(file)) {
        tests.push(file);
    }
}

console.debug("Running following spec files:");
tests.forEach( function(file) { console.debug(file); });

requirejs.config({
    // Karma serves files from '/base' 
    baseUrl: '/base/app/src',
 
    paths: {
        'jquery'      : '../lib/jquery/dist/jquery',
        'underscore'  : '../lib/underscore/underscore',
        'backbone'    : '../lib/backbone/backbone',
        'stickit'     : '../lib/backbone.stickit/backbone.stickit',
        'jasmineJquery' : '../lib/jasmine-jquery/lib/jasmine-jquery'
    },
 
    // ask Require.js to load these files (all our tests) 
    deps: tests,
 
    // start test run, once Require.js is done 
    callback: window.__karma__.start
});
