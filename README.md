# Vcu-Rlh-Website readme

Generated on 2017-02-27 using [generator-yeogurt@2.0.0](https://github.com/larsonjj/generator-yeogurt)

## Description

This is an example readme file. Describe your site/app here.

## Technologies used

JavaScript

- [Browserify](http://browserify.org/) with ES6/2015 support through [Babel](https://babeljs.io/)
- [Node](https://nodejs.org/)

Testing

- [Karma](http://karma-runner.github.io/0.13/index.html)
- [Jasmine](http://jasmine.github.io/)

Styles

- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup

- [Nunjucks](https://mozilla.github.io/nunjucks/)

Optimization

- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server

- [BrowserSync](http://www.browsersync.io/)

Linting

- [ESlint](http://eslint.org/)

Automation

- [Gulp](http://gulpjs.com)

Code Management

- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)

## Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds. The tasks are as follows:

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server `gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser `gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint and runs all `*.test.js` file unit tests through [Karma](http://karma-runner.github.io/0.13/index.html) and Jasmine `gulp test --watch`: Same as `gulp test` but will constantly watch `*.test.js` files and rerun tests when changes are detected

**_Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)_**

## Sub-Generators

- [yeogurt:page](#page)
- [yeogurt:module](#module)
- [yeogurt:layout](#layout)

**_Note: Generators need to be run from the root directory of your app._**

## Default Generators

### Page

Creates a new page.

#### Example:

```
$ yo yeogurt:page contact
```

Produces:

```
src/contact/index.{jade,nunjucks}
```

#### Example #2: Specifying a layout

```
$ yo yeogurt:page contact --layout=one-col
```

Produces:

```
// Page that extends from 'src/_layouts/one-col'
src/contact/index.{jade,nunjucks}
```

> NOTE: Pages will default to extending from `src/_layouts/base` if `--layout` is not provided

### Module

Creates a new module.

#### Example:

```
$ yo yeogurt:module header
```

Produces:

```
src/_modules/header/header.{jade,nunjucks}
src/_modules/header/header.{scss,sass,less,styl}
src/_modules/header/header.js
src/_modules/header/__tests__/header.test.js
```

### Layout

Creates a new layout.

#### Example:

```
$ yo yeogurt:layout one-col
```

Produces:

```
src/_layouts/one-col.{jade,nunjucks}
```

#### Example #2: Specifying another layout to extend from

```
$ yo yeogurt:page contact --layout=one-col
```

Produces:

```
// Layout that extends from 'src/_layouts/one-col'
src/contact/index.{jade,nunjucks}
```

> NOTE: Layouts will default to extending from 'src/_layouts/base'

## Guides

### Adding third-party libraries

Odds are that you will need to add some third party libraries to your project at some point. To do so, it is strongly recommended that you install them using [NPM](http://npmjs.com/):

```
npm install [package name] --save
```

#### Scripts

Once installed, you can access scripts within your JavaScript files like so:

```javascript
// Example using jquery

// ES5
var $ = require('jquery');

$(function() {
  console.log('Hello');
});

// ES6/2015
import $ from 'jquery';

$(() => {
  console.log('Hello');
});
```

#### Stylesheets

You can also access stylesheets by importing them to you chosen preprocessor like so:

**Using SCSS:**

```scss
// SCSS
@import 'node_modules/bootstrap-sass-official/scss/bootstrap';

// CSS
@import 'node_modules/normalize.css/normalize';
```

**Using SASS:**

```sass
// SASS
@import node_modules/bootstrap-sass-official/scss/bootstrap

// CSS
@import node_modules/normalize.css/normalize
```

**Using LESS:**

```less
// LESS
@import 'node_modules/bootstrap/less/bootstrap';

// CSS
@import (inline) 'node_modules/normalize.css/normalize.css';
```

**Using Stylus:**

```stylus
// Stylus
@import '../../node_modules/bootstrap-stylus/bootstrap';

// CSS import
@import '../../node_modules/normalize.css/normalize.css';
```

#### Using Bower

If you can't find your desired package on the NPM registry and you wish to use Bower to manage some front-end packages, you can accomplish this in a couple steps:

**_Step 1: Install Bower_**

```
npm install -g bower
```

**_Step2: Create `bower.json`_**

Create a `bower.json` file within the root directory of your generated project with the following contents:

```json
{
  "name": "Sample",
  "version": "0.0.1",
  "authors": [
    "John Doe <john.doe@someurl.com>"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {}
}
```

> Note: Be sure to update the name, version, author, etc info to your liking

**_Step 3: Install package_**

```
bower install --save [package name]
```

**_Step 4: Use package_**

If the package installed is a javascript library, you will need to shim it. Instructions for this are in the [browserify-shim](#using-non-commonjs-modules-with-browserify-shim) section of this README.

If the package is CSS, Sass, Less, or Stylus, you can follow the instructions in the [Stylesheets](#stylesheets) section of this README

### Data Files

If you want to load global data into your templates (jade or nunjucks), you can add JSON/YAML files in `src/_data` folder.

For example, add menu.json in `src/_data` folder:

```json
{
  "name": "Home",
  "link": "/",
  "category": "Page",
  "status": "Development"
}
```

And it will be added to the `site.data` object so it can be used like so:

```jade
div
  h1= site.data.menu.name
```

Which outputs to:

```html
<div>
  <h1>Home</h1>
</div>
```

## License

[MIT License](LICENSE.md) - © Xia Du and Mason Brown
