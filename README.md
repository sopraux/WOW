## Description

This Fork it's for using HTMLElements instead of string selectors in ScrollContainer property, which that means that you can pass Elements that are not reachable by selectors such as Elements inside Shadow Dom.

Reveal CSS animation as you scroll down a page.
By default, you can use it to trigger [animate.css](https://github.com/daneden/animate.css) animations.
But you can easily change the settings to your favorite animation library.

Advantages:

- Smaller than other JavaScript parallax plugins, like Scrollorama (they do fantastic things, but can be too heavy for simple needs)
- Super simple to install, and works with animate.css, so if you already use it, that will be very fast to setup
- Fast execution and lightweight code: the browser will like it ;-)
- You can change the settings - [see below](#advanced-usage)

## Version

2.0.1

### Dependencies

- [animate.css](https://github.com/daneden/animate.css)

### Installation

- NPM

```bash
   npm install wowjs-shadow
```

### Basic usage

In order to hide all elements when they are supposed to be hidden. (Anti Flickering)

- CSS
  .wow {
  visibility: hidden;
  }

- HTML

```html
<section class="wow slideInLeft"></section>
<section class="wow slideInRight"></section>
```

- JavaScript

```javascript
new WOW().init();
```

### Advanced usage

- HTML

```html
<section
  class="wow slideInLeft"
  data-wow-duration="2s"
  data-wow-delay="5s"
></section>
<section
  class="wow slideInRight"
  data-wow-offset="10"
  data-wow-iteration="10"
></section>
```

- JavaScript

```javascript
var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null // optional scroll container HTMLElement, otherwise use window
});
wow.init();
```

### Asynchronous content support

In IE 10+, Chrome 18+ and Firefox 14+, animations will be automatically
triggered for any DOM nodes you add after calling `wow.init()`. If you do not
like that, you can disable this by setting `live` to `false`.

If you want to support older browsers (e.g. IE9+), as a fallback, you can call
the `wow.sync()` method after you have added new DOM elements to animate (but
`live` should still be set to `true`). Calling `wow.sync()` has no side
effects.

## Development

The library is written in CoffeeScript, please update `wow.coffee` file.

We use gulp to compile and minify the library:

Install needed libraries

```
npm install
```

compile project

```
gulp
```

or single run:

```
npm run build
```

Enjoy!

## Developers

Developed by Matt Delac, [delac.io](https://www.delac.io/)

- [@mattdelac](//twitter.com/mattdelac_)
- [Github Profile](//github.com/matthieua)

Developed fork by David Peris

- [Github Profile](//github.com/davidperis92)
