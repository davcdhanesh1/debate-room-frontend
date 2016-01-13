
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* Concatenate javascript files */
    concat: {
      options: {
        separator: ";\n"
      },
      dist: {
        src: ['app/src/js/**/*.js'],
        dest: 'dist/<%= pkg.name %>.concatenate.js'
      }
    },

    /* Minifies concanetated javascript files */
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        mangle: false,
        beautify: true
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    /* JShint to check for spelling mistake or JS errors */
    jshint: {
      files: ['Gruntfile.js', 'app/src/js/**/*.js', 'app/test/js/**/*.js'],
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
        options: {
          livereload: true
        },
        tasks: ['jshint']
      }
    },

    connect: {
      server: {
        options: {
          livereload: true,
          base: 'app',
          port: 9000
        }
      }
    },

    clean: {
      build: ['dist']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('serve', ['connect:server', 'watch']);
  grunt.registerTask('build', ['test', 'concat', 'uglify']);

};
