function getJasmineRequireObj() {
    if (typeof module !== 'undefined' && module.exports) {
        return exports;
    } else {
        window.jasmineRequire = window.jasmineRequire || {};
        return window.jasmineRequire;
    }
}

getJasmineRequireObj().CustomReporter = function () {

    var noopTimer = {
        start: function () {
        },
        elapsed: function () {
            return 0;
        }
    };

    function CustomReporter(options) {
        var onSpecDone = options.onSpecDone,
            onComplete = options.onComplete || function () {
            },
            timer = options.timer || noopTimer,
            currentSuite,
            specCount,
            failureCount,
            pendingCount;

        this.jasmineStarted = function () {
            specCount = 0;
            failureCount = 0;
            pendingCount = 0;
            timer.start();
        };

        this.suiteStarted = function (suite) {
            currentSuite = suite;
        };

        this.specStarted = function () {
            specCount++;
        };

        this.specDone = function (spec) {
            var result = {};
            if (isFailed(spec)) {
                failureCount++;
            }
            result.isPassed = isPassed(spec);
            result.num = specCount;
            result.it = spec.description;
            result.describe = currentSuite.description;
            onSpecDone(result);
        };

        this.suiteDone = function () {

        };

        this.jasmineDone = function () {
            onComplete(failureCount === 0);
        };

        function isPassed(spec) {
            return spec.status === 'passed';
        }

        function isPending(spec) {
            return spec.status === 'pending';
        }

        function isFailed(spec) {
            return spec.status === 'failed';
        }

        return this;
    }

    return CustomReporter;
};
