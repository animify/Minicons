# Minicons

[![Build Status](https://travis-ci.org/animify/Minicons.svg?branch=build_br)](https://travis-ci.org/animify/Minicons)
[![Maintainability](https://api.codeclimate.com/v1/badges/18c67260237745b56cbe/maintainability)](https://codeclimate.com/github/animify/Minicons/maintainability)

## About Minicons

Minicons is an open-source SVG icon set drafted on an 24x24 sized grid aimed at unifying icon design across a website. Currently the first release is covering several categories of icons (86 total).

[View available icons](http://minicons.io)

## Table of contents

## Quick start

Get up and running within minutes.

###### (Minicons npm package coming soon)

#### 1. Download or use the CDN

You can directly import minicons.js from the CDN:

```
http://cdn.darken.io/minicons/1.0/minicons.js
```

or [download](https://github.com/animify/Minicons/files/1419498/Minicons-v1.0.zip) the latest release.

#### 2. Include

Include the CDN or the path to minicons.js at the end of your closing `<body/>` tag in your markup:

```html
<script src="http://cdn.darken.io/minicons/1.0/minicons.js"></script>
```

#### 3. Add an icon

Now it's time to add an icon. Just create a tag with `data-minicon` and the name:

```html
<i data-minicon="chevron-right/>
```

#### 4. Do the swap

To display the Minicon we do to the swap:

```javascript
minicons.swap();
```
All icons added dynamically will be swapped _automagically_ for you. 😎


## API



## Building

#### Build and optimize SVG icon files in the icons directory
```shell
$ ./build.sh icons
```

#### ...or to Build & optimize icons, package Minicons and run tests
```shell
$ ./build.sh
```

## Contributing guidelines

If you wish to contribute to the Minicons project please check out the ![contributing guidelines](CODE_OF_CONDUCT.md).

## License

Minicons is licensed under the ![MIT License](LICENSE)
