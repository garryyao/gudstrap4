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
    }
  });

  grunt.registerTask('css', ['sass', 'postcss']);
  grunt.registerTask('html', ['jade']);
  grunt.registerTask('default', ['html', 'css']);
};