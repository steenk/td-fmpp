const path = require('path'),
      fs = require('fs'),
      execSync = require('child_process').execSync;

module.exports = function(grunt) {


    grunt.registerMultiTask('freemarker', 'A fmpp wrapper.', function () {

        let config = this.data.config || 'config.fmpp';
        let temp = path.resolve(__dirname, '../../../.temp.log');

        let cmd = 'java -jar ' + path.resolve(__dirname, 'lib/fmpp.jar') + ' --output-format=HTML -C ' + 
            path.resolve(__dirname, '../../..', config);
        console.log(cmd);

        execSync(cmd  + ' > ' + temp);
        console.log(fs.readFileSync(temp).toString());
        fs.unlink(temp, (err) => {
            if (err) throw err;
        })
       
    });


}
