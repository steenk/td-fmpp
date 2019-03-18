const path = require('path'),
	  exec = require('child_process').exec;

module.exports = function(grunt) {


	grunt.registerMultiTask('freemarker', 'A fmpp wrapper.', function () {

		let config = this.options.config || 'config.fmpp';

		let cmd = 'java -jar ' + path.resolve(__dirname, 'lib/fmpp.jar') + ' -C ' + path.resolve(__dirname, config);

		console.log(cmd);

		exec(cmd, {}, function (err, stdout, stderr) {
			if (err) throw stderr;
			console.log(stdout);
		})
  	});

}
