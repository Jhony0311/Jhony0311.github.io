path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            compile: {
                files: [{
                    dest: './assets/styles/main.css',
                    src: './sass/main.scss'
                }, ],
                options: {
                    includePaths: [
                        'bower_components/animate.css/source/',
                        'bower_components/foundation/scss/',
                    ]
                }
            },
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 2 version'
                    })
                ],
                outputStyle: 'nested',
            },
            dist: {
                src: './assets/styles/main.css',
                dest: './assets/styles/main.css'
            }
        },
        browserify: {
            dist: {
                files: {
                    'assets/scripts/main.js': ['assets/scripts/app.js']
                },
                options: {
                    transform: [['babelify', { 'presets': ['es2015'] }]]
                }
            },
            options: {
                watch: true
            }
        },
        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['compile-sass']
            },
            js: {
                files: ['scripts/main.js'],
                task: ['compile-scripts']
            },
            html: {
                files: ['*.html', '*.hbs'],
            }
        },
        browserSync: {
            bsFiles: {
                src: [
                    'assets/styles/*.css',
                    'assets/scripts/app.js',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['compile-scripts', 'compile-sass', 'browserSync', 'watch']);
    grunt.registerTask('compile-sass', ['sass', 'postcss']);
    grunt.registerTask('compile-scripts', ['browserify']);

};
