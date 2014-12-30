module.exports = function(grunt) {

    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'app/sass/main.scss': 'app/styles/app.css'
                }
            },
            options: {
                sourceMap: true,
                outputStyle: 'nested'
            }
        },
        watch: {
            src: {
                files: ['app/scripts/**/*.js', 'app/sass/**/*.scss', 'app/*.*'],
                tasks: ['default'],
            },
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    base: 'app',
                    livereload: true,
                    keepalive: false,
                }
            }
        }
    });

    // Loading tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'connect', 'watch']);
};