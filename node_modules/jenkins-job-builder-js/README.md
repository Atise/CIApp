# jenkins-job-builder-js [![Build Status](https://travis-ci.org/RomanSaveljev/jenkins-job-builder-js.svg)](http://travis-ci.org/RomanSaveljev/jenkins-job-builder-js)

## Description

[Jenkins Job Builder](http://docs.openstack.org/infra/jenkins-job-builder/) is an excellent tool for those who find themselves unhappy with Jenkins GUI job configuraton. Job description is created in YAML, which is then converted to Jenkins' own XML representation and imported into the database. YAML allows for templates and some reusable blocks. YAML can be committed to version control system.

For some time it seemed like a perfect solution (compared to repetitive manual updates via Web GUI). The tool caused a burst in the number of managed jobs. Every "do-it-all" conglomerate had been broken into a school of small similar, but slightly different, jobs. This was good, yet the feeling was like there is a room for improvement. Thanks to YAML syntax supported by the tool, duplication still can not be avoided. It was evident the YAML alone can not solve the problem. A
qualitatively different approach needed to be sought.

Thus, the idea of NPM module was born. YAML is a superset of JSON, i.e. a valid JSON is a valid YAML. JSON is also a native object notation for JavaScript. JavaScript is imperative language with conditionals and subroutines. Module users stuff JSON object programmatically and feed it to the original Jenkins Job Builder for processing.

## Install

```bash
$ npm install jenkins-job-builder-js
```

Module's release in general follows the [Jenkins Job Builder](https://pypi.python.org/pypi/jenkins-job-builder) itself. Pre-release tags may be created, but they do not belong with the main linear release cycle. Release numbering must satisfy the [semantic versioning](http://semver.org/) rules and is generated according to formula:

```
MAJOR_jjb.MINOR_jjb.PATCH
```

, where

* `MAJOR_jjb` - Jenkins Job Builder major version
* `MINOR_jjb` - Jenkins Job Builder minor version
* `PATCH` - patch level calculated as follows:

```
PATCH = (PATCH_jjb + 1) * 100 + PATCH_mod
```

, where

* `PATCH_jjb` - Jenkins Job Builder own patch level
* `PATCH_mod` - patch level of this module

First module version, which can be used with Jenkins Job Builder version `1.2.0` is `1.2.100`. The chosen approach allows to produce hotfixes on top of follow-up releases.

## Usage

```js
var Jobs = require('jenkins-job-builder-js');

var helloWorld = new Jobs();

helloWorld
  .job()
    .name('hello-world')
    .description('Example Jenkins job')
    .projectType('freestyle')
    .node('master')
    .wrappers()
      .workspaceCleanup()
      .and().timestamps()
      .and().ansicolor()
      .and().injectPasswords()
        .global(true)
        .maskPasswordParams(true)
        .up()
      .up()
    .triggers()
      .pollurl()
        .cron('* * * * *')
        .urls()
          .create()
            .url('http://www.google.com')
            .checkDate(true)
            .checkContent()
              .create().simple(true)
              .up()
            .up()
          .up()
        .up()
      .up()
    .up()
    .builders()
      .shell('touch hello-world.txt')
      .up()
    .publishers()
      .archive()
        .artifacts('hello-world.txt');

console.log(JSON.stringify(helloWorld.array, null, 2));
```

Save the above as `hello-world.js` and run:

```shell
$ node hello-world.js >input.json
$ jenkins-jobs test input.json
```

Currently, `jenkins-jobs` does not support handling of STDIN.

More examples can be found under `samples` directory.

## Design

The library has over 250 different modules, but you need not read hundreds of pages of the documentation.
There is but a handful of consolidating constraints, which should help to get a hold of the it quickly:

* Your main source of documentation is http://docs.openstack.org/infra/jenkins-job-builder/index.html
    * YAML idiomatic constructs are scrupulously mapped to JavaScript code (some look silly)
    * Slug-cased YAML property names are automatically converted to CamelCase (some look silly as well)
* **Declarative coding style** - the JSON object is stuffed with the data as the execution flow goes:
    * Lookup, insertion, deletion, modification of the existing data is not implemented
    * Impossible to "revisit" the part of the data
* **Stuffed object** - the result of running the script:
    * Its stringified JSON representation is good for `jenkins-jobs` application
    * Simple object without a constructor and any prototype additions
* **Object proxies** modify parts of the stuffed object:
    * Each part has its own "class" of proxy objects
    * Proxy object exposes certain methods (through prototype) to populate the insides of the stuffed object
    * Proxy object knows how to construct proxy objects for inner parts
    * Semantically a proxy object is either a set of properties or a collection of proxy objects
    * Every proxy implements `up()` method, which returns reference to its parent proxy object
    * `and()` aliases `up()`
* **Accessor** is a universal API pattern described as follows:
    * Similar to JQuery accessors
    * Same callable property is both a getter and a setter
    * Setter is assumed, when it is passed a primitive value
    * Getter is invoked, when no parameters are passed
    * Either getter or setter part (or both in case of a TODO item) may be unimplemented and will throw in the runtime
    * If implemented, a getter ALWAYS creates a new proxy object, which manages its own chunk of the stuffed object
    * If implemented, a setter always returns the object, where it belongs (the same level)

More documentation on implemented concepts is available from [documentation](doc/design/README.md).

## Development

* GitHub pull requests are reviewed and accepted
* GitHub issues are tracked
* Travis CI build includes checking against coverage threshold and must pass
* Additional information is found from [developer documentation](doc/developer/README.md)

## License 

(The MIT License)

Copyright (c) 2015 Roman Saveljev &lt;roman.saveljev@haltian.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
