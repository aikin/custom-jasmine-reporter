function runner(load_files) {

    require.config({
        paths: {
            jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine',
            boot: 'custom_boot',
            reporter: 'custom_reporter'
        },

        shim: {
            'boot': {
                deps: ['jasmine']
            },

            'reporter': {
                deps: ['jasmine', 'boot']
            }
        }
    });

    require(['jasmine', 'boot', 'reporter'], function () {
        require(load_files, function () {
            jasmine.getEnv().execute();
        });
    });
}

var load_files = [
    '../src/allSpecSuccess',
    '../spec/allSpecSuccess',
    '../src/someSpecFail',
    '../spec/someSpecFail'
];


require(['../bower_components/jquery/dist/jquery'], function () {
    $(document).ready(function () {
        runner(load_files);
    });
});