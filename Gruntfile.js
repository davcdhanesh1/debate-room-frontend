
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* JShint to check for spelling mistake or JS errors */
    jshint: {
      files: ['Gruntfile.js', 'app/src/**/*.js', 'app/test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    /* runs specific tasks if one of the file changes, and also reloads the file */
    watch: {

      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      },

      templates: {
        files: ['app/src/templates/**/*.html'],
        options: {
          livereload: true
        }
      },

      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      }
    },

    /* to serve index.html for local development */
    connect: {
      server: {
        options: {
          base: '.',
          livereload: true
        }
      }
    },

    clean: {
      build: ['dist']
    },

    karma: {
      unit: {
        options: {
          basePath: '',
          singleRun: true,
          browsers: ['PhantomJS'],
          files: [
            {pattern: 'app/lib/**/*.js', included: false},
            {pattern: 'app/src/**/*.js', included: false},
            {pattern: 'app/test/**/*\-spec.js', included: false},
            'app/test/test-main.js'
          ],
          frameworks: ['jasmine', 'requirejs'],
          exclude: [
            'app/src/main.js'
          ],
          reporters: ['progress'],
          port: 9876,
          colors: true,
          autoWatch: false,
          concurrency: Infinity
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "./app/src/",
          mainConfigFile: "./app/src/main.js",
          name: "main",
          out: "./dist/debate-room-dist.js",
          include: [
            "../lib/requirejs/require"
          ],
          insertRequire: ["main"]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['jshint', 'karma']);
  grunt.registerTask('serve', ['connect:server', 'watch']);
  grunt.registerTask('build', ['test', 'requirejs']);

};
