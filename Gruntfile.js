module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            compile: {
                files: [{
                    dest: './styles/main.css',
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
                src: './styles/main.css',
                dest: './styles/main.css'
            }
        },
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['compile-sass']
            },
            js: {
                files: ['scripts/*.js'],
            },
            html: {
                files: ['*.html', '*.hbs'],
            }
        },
        browserSync: {
            bsFiles: {
                src : [
                    'styles/*.css',
                    'scripts/*.js',
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
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['compile-sass', 'browserSync', 'watch']);
    grunt.registerTask('compile-sass', ['sass', 'postcss']);

};
