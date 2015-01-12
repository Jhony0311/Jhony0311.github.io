module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: '*',
          port: 9000,
          base: 'public/',
        },
      }
    },
    open: {
      server: {
        path: 'localhost:9000',
      }
    },
    clean: {
      css: ['public/styles'],
    },
    sass: {
      compile: {
        files: [
          {
            dest: 'public/styles/main.css',
            src: 'public/sass/main.scss'
          },
        ],
        options: {
          includePaths: [
            'public/bower_components/animate.css/source/',
            'public/bower_components/foundation/scss/',
          ]
        }
      },
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 version'}).postcss,
          require('csswring').postcss
        ],
        outputStyle: 'nested',
      },
      dist: {
        src: 'public/styles/main.css',
        dest: 'public/styles/main.css'
      }
    },
    watch: {
      sass: {
        files: ['public/**/*.scss'],
        tasks: ['compile-sass']
      },
      js: {
        files: ['public/**/*.js'],
      },
      html: {
        files: ['public/**/*.html', 'public/**/*.hbs'],
      },
      options: {
        livereload: true,
        events: ['all'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['compile-sass', 'connect', 'watch']);
  grunt.registerTask('compile-sass', ['sass', 'postcss']);

};
