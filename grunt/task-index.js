module.exports = function(grunt) {
  
  grunt.registerTask('index', 'Run src/index.js to create build/index.html', function(){
    //grunt.log.writeln('Require src/index.js');
    require('../src/index.js');
  });

};
