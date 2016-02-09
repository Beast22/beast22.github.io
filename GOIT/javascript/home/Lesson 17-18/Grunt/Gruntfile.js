module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/carousel.js', 'menu.js'],
        dest: 'build/js/script.main.js'
      }
    },
    uglify: {
      options: {
        mangle: false,
        beautify: true
      },
      dist: {
        src: ['build/js/script.main.js'],
        dest:'build/js/script.main.js'
      }
    },
    cssmin: {
      options:{
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files:{
          'build/css/total.css' : ['css/carousel.css', 'css/style.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
   
   
};