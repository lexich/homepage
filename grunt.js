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
    copy: {
      dist : {
        files: {
          'www/static/':'static/**',
          'www/static/css/':[
            "components/bootstrap/docs/assets/css/bootstrap-responsive.css"
          ]
        }
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
  grunt.registerTask('default',"clean jade copy watch");
  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-connect');
}
