# td-fmpp
Grunt wrapper for fmpp.

In the *Gruntfile.js*:

```
module.exports = function (grunt) {
    grunt.initConfig({
        freemarker: {
            target: {
                config: 'config.fmpp'
            }
        }
    });

    grunt.loadNpmTasks('td-fmpp');

    grunt.registerTask('default', ['freemarker']);
}
```
