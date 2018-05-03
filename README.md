# :tada: :carousel_horse: tada [![license](https://img.shields.io/github/license/desktop/desktop.svg?style=flat-square)](https://github.com/desktop/desktop/blob/master/LICENSE) [![CircleCI](https://circleci.com/gh/SE-Jr/tada.js/tree/develop.svg?style=svg)](https://circleci.com/gh/SE-Jr/tada.js/tree/develop) [![codecov](https://codecov.io/gh/SE-Jr/tada.js/branch/develop/graph/badge.svg)](https://codecov.io/gh/SE-Jr/tada.js)

Simple Carousel Library [demo](https://se-jr.github.io/tada.js/)

## Installing

Setup the html and add either class name or id name in the markup
```html
<div class="carousel">
  <ul>
    <li><img /></li>
    <li><img /></li>
    <li><img /></li>
  </ul>
</div>
```

OPTION 1: when using a module bundler like Webpack

```shell
$ npm install ta-dah --save-dev
```

```javascript
import Tada from 'ta-dah';

new Tada({
  selector: ".carousel"
});
```

OPTION 2: when injecting the minified script into your project.

```javascript
<script src="tada.min.js"></script>
<script>
   const carousel = new Tada({
     selector: ".carousel"
   });
</script>

```
We also provide a CDN option from [rawgit.com](https://rawgit.com).
[CDN](https://cdn.rawgit.com/SE-Jr/tada.js/a8c22ed027a08858e1f062424673d8ed698a10b3/dist/tada.min.js)

## Configuration
In this carousel library, there are few options and events.

### Settings
| option          | desc | default |
|-----------------|------|---------|
| navigator       | can show navigator | false   |
| pagination      | can show pagination | false   |
| paginationShape | can set two types of shape: circle, bar | circle  |

For example,
```javascript
<script>
   const carousel = new Tada({
     selector: ".tada-class",
     navigator: true,
     pagination: true,
     paginationShape: bar
   });
</script>
```

### Events

| event | desc |
|-------|------|
| right |  the event when clicking right navigator     |
| left  |  the event when clicking left navigator    |

For example,

```javascript
<script>
   const carousel = new Tada({
     selector: ".carousel"
   });

   carousel.on("right", function(e) {
     console.log("right");
   });
</script>
```

## Versioning
0.0.5

## Special Thanks
@hyeonmi @CoderK

## License
MIT License

Copyright (c) 2018 ZAGDANG

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
