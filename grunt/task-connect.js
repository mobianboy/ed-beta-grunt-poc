module.exports = function(grunt) {
  
  grunt.config('connect', {
    options: {
      hostname: 'localhost',
      port: 5115,
      base: 'build'
    },
    dev: {},
    prod: {
      options: {
        keepalive: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

};
