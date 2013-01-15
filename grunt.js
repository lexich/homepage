module.exports = function (grunt) {

  grunt.initConfig({
    jade: {
      html: {
        src: ['templates/*.jade'],
        dest: 'www',
        options: {        
          client:false
        }
      }
    },
    cp: {
      media: {
        src: 'static',
        dest: 'www/static'
      }
    },
    clean:{
      folder:"www"
    },
    connect: {
      server: {
        port: 8080,
        base: './www'
      }
    }

  });
  grunt.registerTask('default',"clean jade cp");

  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-cp');
  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-connect');
}
