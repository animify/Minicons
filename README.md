# Minicons

[![Build Status](https://travis-ci.org/animify/Minicons.svg?branch=build_br)](https://travis-ci.org/animify/Minicons)
[![Maintainability](https://api.codeclimate.com/v1/badges/18c67260237745b56cbe/maintainability)](https://codeclimate.com/github/animify/Minicons/maintainability)

## About Minicons

Minicons is an open-source SVG icon set drafted on an 24x24 sized grid aimed at unifying icon design across a website. Currently the first release is covering several categories of icons (86 total).

[View available icons](http://minicons.io)

## Table of contents

1. [Example](#example)
2. [Example2](#example2)
3. [Third Example](#third-example)

## Getting Minicons

#### 1. CDN

You can directly import minicons.js from the CDN:

```
http://cdn.darken.io/minicons/1.0/minicons.js
```

#### 2. Download the ZIP

[Download](https://github.com/animify/Minicons/files/1419498/Minicons-v1.0.zip) the latest release.

#### 3. Using NPM

Install Minicons using CDN

```
npm i minicons -S
```

This will create all dist files in the Minicons package folder in your roots' node modules.

```
├── dist/

      ├── icons/

      ├── minicons.js
      
      ├── minicons.min.js

      └── minicons.json
```

## Quick start

Get up and running within minutes inside your browser.

#### 1. Include

Include the CDN or the path to minicons.js at the end of your closing `<body/>` tag in your markup:

```html
<script src="http://cdn.darken.io/minicons/1.0/minicons.min.js"></script>
<!-- or use a relative path -->
<script src="path/to/dist/minicons.min.js"></script>
```

#### 2. Add an icon

Now it's time to add an icon. Just create a tag with `data-minicon` and the name:

```html
<i data-minicon="chevron-right"/>
```

#### 3. Make the swap

To display the Minicon we do to the swap:

```javascript
minicons.swap();
```
All icons added dynamically will be swapped _automagically_ for you. 😎

## API

### `minicons`

The main handler object.

### Properties

#### `minicons.icons`

Contains an array of data about every single icon.


*Returns an array of icon objects*

| Property      | Type   | Description             |
| ------------- | ------ | ----------------------- |
| `aliases`     | array  | List of alias names     |
| `content`     | string | SVG string of the icon  |
| `name   `     | string | The name of the icon    |

#### `minicons.config`

The config object Minicons was produced from.


*Returns a config object*

| Property                | Type   | Description                                 |
| ----------------------- | ------ | ------------------------------------------- |
| `name`                  | string | The name of the config                      |
| `props`                 | object | The properties that will apply to the svg   |
| `props.class`           | string | Additional class to be added to the icon    |
| `props.fill`            | string | Fill to be added                            |
| `props.height`          | number | Height of the icon                          |
| `props.stroke`          | string | Stroke color of the icon                    |
| `props.stroke-linecap`  | string | Linecap used to brush over                  |
| `props.stroke-linejoin` | string | How the lines will be joined together       |
| `props.stroke-width`    | number | Width of the stroke applied                 |
| `props.viewBox`         | string | Viewbox of the SVG icon container           |
| `props.width`           | number | Width of the icon                           |
| `props.xmlns`           | string | SVG namespace that is used                  |

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
