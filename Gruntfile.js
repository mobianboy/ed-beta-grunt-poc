
module.exports = function(grunt){
  
  // Initialize
  grunt.initConfig({
    pkg: require('./package.json')
  });


  // Load Task files in ./grunt
  grunt.loadTasks('grunt');


  // Alias Tasks
  // Launch Development Connect+LiveReload Server and Watch for changes
  grunt.registerTask('dev', 
    'Start a live-reloading dev webserver on localhost.',
    ['jshint', 'clean', 'index', 'symlink:dev', 'less:dev', 'connect:dev', 'watch']);


  // TODO: Build for Testing
/*
  grunt.registerTask('build',
    'Build site files for testing',
    ['jshint', 'clean', 'symlink:build', 'less:build']); // uglify? requirejs? concat?
    //['jshint', 'clean', 'jade:prod', 'requirejs:prod', 'stylus:prod']);
*/


  // TODO: Build for Production
/* 
  grunt.registerTask('prod', 
    'Do Stuff for production',
    ['jshint', 'less:prod']);
    //['build', 'connect:prod:keepalive']
*/


  // default to 'dev'
  grunt.registerTask('default', ['dev']);

};
