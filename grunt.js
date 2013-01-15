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
		}
	});

	grunt.loadNpmTasks('grunt-jade');
}
