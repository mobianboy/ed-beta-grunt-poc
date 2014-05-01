module.exports = function(grunt) {
  
  grunt.config('jshint', {
    config: {
      //options: {jshintrc: '.jshintrc'},
      src: ['./*.js', 'grunt']
    },
    scripts: {
      //options: {jshintrc: '.jshintrc'},
      src: ['src/**/*.js', '!src/js/bower/**'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};
