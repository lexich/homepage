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
          ],
          'www/static/grands/':[
            "components/grands/Grands-icon-font/*.css",
            "components/grands/Grands-icon-font/*.js"            
          ],
          'www/static/grands/fonts/':"components/grands/Grands-icon-font/fonts/*"
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
  grunt.registerTask('open',"clean jade copy connect");
  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-connect');
}
