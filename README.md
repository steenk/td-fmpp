# td-fmpp
Grunt wrapper for fmpp. Includes fmpp v0.9.16. Needs Java 1.8.

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
