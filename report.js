(function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

//    configConsoleReporter();
    configCustomReporter();

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

function configCustomReporter() {
    var CustomReporter = jasmineRequire.CustomReporter();
    var options = {
        timer: new jasmine.Timer,

        onSpecDone: function (result) {
            console.log(result, 'print');
            if (!result.isPassed) {
                document.getElementById('num').innerHTML      = '测试 ' + result.num + ' 失败';
                document.getElementById('describe').innerHTML = 'describe: ' + result.describe;
                document.getElementById('it').innerHTML       = '\n it: ' + result.it;
            }
        },
        onComplete: function () {
            console.log(arguments, 'complete')
        }
    };
    var customReporter = new CustomReporter(options);
    jasmine.getEnv().addReporter(customReporter);
}

