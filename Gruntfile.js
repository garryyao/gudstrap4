module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/main.css': 'scss/main.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
            require('pixrem')(),
            require('./node_modules/mq4-hover-shim/src/nodejs/postprocessor')({
              "hoverSelectorPrefix": "html.hover "
            }),
            require('autoprefixer')({
              browsers: ['last 1 version'],
            }),
        ]
      },
      dist: {
        src: 'dist/*.css'
      }
    },
    jade: {
      options: {
        pretty: true
      },
      dist : {
        files: {
          "dist/index.html": '*.jade'
        }
      }
    },
    copy: {
      dist: {
        src: [
          'icons/*',
          'fonts/**',
          'index.js',
          'js/*.js',
          'images/*',
          'bower_components/*/{dist,lib}/**/*.js',
          'bower_components/jquery.*/**/*.js'
        ],
        dest: 'dist/'
      },
    },
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['css'],
      },
      html: {
        files: '**/*.jade',
        tasks: ['jade'],
      },
    },
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: '**/*'
    }
  });

  grunt.registerTask('css', ['sass', 'postcss']);
  grunt.registerTask('html', ['jade']);
  grunt.registerTask('resources', ['copy']);
  grunt.registerTask('default', ['html', 'css', 'resources']);
  grunt.registerTask('dev', ['default', 'watch']);
  grunt.registerTask('publish', ['default', 'gh-pages']);
};
