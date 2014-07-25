(function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    configConsoleReporter();
//    configCustomConsoleReporter();

})();

function configConsoleReporter() {
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
    jasmine.getEnv().addReporter(consoleReporter);
}

function configCustomConsoleReporter() {
    jasmine.getEnv().addReporter(new jasmineReporters.TapReporter());
}

