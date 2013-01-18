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
    },
    watch:{
      jade_files:{
        files:"templates/*.jade",
        tasks:["jade"]
      },
      jade_templates:{
        files:"templates/**/*.jade",
        tasks:["jade"]
      },
      css:{
        files:"static/css/*.css",
        tasks:["cp"]
      }
    }
  });
  grunt.registerTask('default',"clean jade cp watch");  
  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-cp');
  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-connect');
}
