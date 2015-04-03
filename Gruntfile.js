module.exports = function(grunt) {

  // Init configuration object.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks.
    /////////////////////////////////////////////////

    // Minify the js files from src folder and move them to build folder.
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/sjs/<%= pkg.name %>.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },

    // Define sass configuration.
    sass: {
      dist: {
        files: {
          'css/style.css' : 'assets/sass/style.scss'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};