##Startup project for a grunt powered javascript application.

###Prerequisites
Install grunt
```
$ npm i -g grunt-cli
/home/you/npm/bin/grunt -> /home/you/npm/lib/node_modules/grunt-cli/bin/grunt
grunt-cli@0.1.13 /home/jazio/npm/lib/node_modules/grunt-cli
├── resolve@0.3.1
├── nopt@1.0.10 (abbrev@1.0.5)
└── findup-sync@0.1.3 (lodash@2.4.1, glob@3.2.11)
```

You need to install needed grunt plugins:
```
$ npm install grunt --save-dev
$ npm install grunt-contrib-nodeunit --save-dev
$ npm install grunt-contrib-uglify --save-dev
```
and whatever.

These will save entries to package.json.

Then run ```npm install```

###Startup grunt
```$ grunt```

will output:

```
Running "uglify:build" (uglify) task
>> 1 file created.
Done, without errors.
```


###Notes on Configuration
When manually edit the package.json there are two sections of dependencies: dependencies are required to run, devDependencies only to develop