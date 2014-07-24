(function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    configConsoleReporter(jasmineEnv);
    configHtmlReporter(jasmineEnv);

    var currentWindowOnload = window.onload;

    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

})();

function configConsoleReporter(jasmineEnv) {
    var ConsoleReporter = jasmineRequire.ConsoleReporter();
    var options = {
        timer: new jasmine.Timer,
        showColors: true,

        print: function () {
            console.log(arguments, 'print');
        },
        onComplete: function () {
            console.log(arguments, 'complete')
        }
    };
    var consoleReporter = new ConsoleReporter(options);
    jasmineEnv.addReporter(consoleReporter);
}

function configHtmlReporter(jasmineEnv) {
    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };
}