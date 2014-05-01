module.exports = function(grunt) {
  
  grunt.config('watch', {

    livereload: {
      options: {
        livereload: true // Default port: 35729
      },
      files: ['build/**/*', '!build/js/bower/**'],
      tasks: []
    },
    jshintConfig: {
      files: '<%= jshint.config.src %>',
      tasks: ['jshint:config']
    },
    jshintScripts: {
      files: '<%= jshint.scripts.src %>',
      tasks: ['jshint:scripts']
    },
    less: {
      files: ['src/less/**/*.less'],
      tasks: ['less:dev']
    },
    index: {
      files: ['src/index.js', 'src/views/index.html'],
      tasks: ['index']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
