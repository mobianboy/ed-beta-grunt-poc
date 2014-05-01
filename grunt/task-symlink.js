module.exports = function(grunt) {
  
  grunt.config('symlink', {

    options: {
      overwrite: false
    },
    dev: {
      files: [
        // Link files in src to build, not including directories
        {
          expand: true,
          //cwd: 'src',
          src: ['src/*', '!src/index.js'],
          dest: 'build/',
          flatten: 'src',
          //ext: '.min.cool',
          filter: 'isFile',
        },
        // Link contents of JS folder
        {
          expand: true,
          src: 'src/js/*',
          dest: 'build/js/',
          flatten: 'src',
        },
        // Link Media
        {
          expand: true,
          src: 'media/*',
          dest: 'build/',
          flatten: 'media',
        },
      ]
    },
    /*prod: {
      files: 'TODO';
    }*/
    
  });

  grunt.loadNpmTasks('grunt-contrib-symlink');

};
