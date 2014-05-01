module.exports = function(grunt) {
  
  grunt.config('less', {
    dev: {
      //options: {},
      files: [
        {src:"src/less/main.less", dest:"build/css/main.css"},
        {src:"src/less/animation.enter.main.less", dest:"build/css/animation.enter.main.css"}
      ]
    },
    build: {
      options: {
        cleancss: true,
        report: 'min'
      },
      files: '<%= less.dev.files %>'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

};
