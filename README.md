##Kickstart for a Grunt powered javascript application.

### Goal
This projects help you get started running Grunt with two main plugins allowing to compile Sass (grunt-contrib-sass) and to minify javascript (grunt-contrib-uglify).

###Prerequisites
####Install grunt.

You need node.js and its installer: npm.

```
sudo apt-get install nodejs
sudo apt-get install npm

Update to the latest version:
```
sudo npm install -g
npm cache clean -f
npm install -g n
sudo n stable
nodejs -v
``` 

Now install grunt command line tool (command i or install):
```
$ npm i -g grunt-cli
/home/you/npm/bin/grunt -> /home/you/npm/lib/node_modules/grunt-cli/bin/grunt
grunt-cli@0.1.13 /home/jazio/npm/lib/node_modules/grunt-cli
├── resolve@0.3.1
├── nopt@1.0.10 (abbrev@1.0.5)
└── findup-sync@0.1.3 (lodash@2.4.1, glob@3.2.11)
```

Then run ```npm init``` to generate package.json. If package.json is already created and npm_modules is missing run ```npm install``` to install grunt packages in node_modules.

You need to install needed grunt plugins:
```
$ npm i grunt --save-dev
$ npm i grunt-contrib-sass --save-dev
$ npm i grunt-contrib-uglify --save-dev
```
or whatever.

Option --save-dev (or -S) will save it to to devDependencies. 
These will save entries to package.json.



####Run grunt
```$ grunt```

will output:

```
 - Waiting...
>> File "assets/scss/style.scss" changed.
Running "sass:dist" (sass) task

Running "uglify:build" (uglify) task
>> 1 file created.

Done, without errors.

```
Now for every edit of scss file or javascript (sjs), grunt will generate and copy files in place.

###Notes on Configuration

dependencies vs devDependencies.

When manually edit the package.json there are two sections of dependencies: dependencies are required to run, devDependencies only to develop. 