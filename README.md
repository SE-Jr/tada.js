# :tada: :carousel_horse: tada [![license](https://img.shields.io/github/license/desktop/desktop.svg?style=flat-square)](https://github.com/desktop/desktop/blob/master/LICENSE) [![CircleCI](https://circleci.com/gh/SE-Jr/tada.js/tree/develop.svg?style=svg)](https://circleci.com/gh/SE-Jr/tada.js/tree/develop)

Simple Carousel Library

## Installing

Setup Markup
```
<div>
  <ul>
    <li><img /></li>
    <li><img /></li>
    <li><img /></li>
  </ul>
</div>
```

option 1: when using a module bundler like Webpack

```
$ npm install tada
```

```
import Tada from 'tada-carousel';
new Tada();
```

option 2: when injecting the minified script into your project.

```
<script src="tada.min.js"></script>
<script>
   var carouesl = new Tada({
     selector: ".tada-class"
   });
</script>

```

## Option
In this carousel library, there are few options and events.

### Settings
| option          | desc | default |
|-----------------|------|---------|
| navigator       |      | false   |
| pagination      |      | false   |
| paginationShape |      | circle  |

For example,
```
<script>
   var carouesl = new Tada({
     selector: ".tada-class",
     navigator: true,
     pagination: true,
     paginationShape: line
   });
</script>
```

### Events

| event | desc |
|-------|------|
| right |      |
| left  |      |

For example,

```
<script>
   var carouesl = new Tada({
     selector: ".tada-class"
   });

   carousel.on("right", function(e) {
     console.log(e);
   });
</script>
```

## Versioning
0.0.3

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


