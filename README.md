# Minicons

[![Build Status](https://travis-ci.org/animify/Minicons.svg?branch=build_br)](https://travis-ci.org/animify/Minicons)
[![Maintainability](https://api.codeclimate.com/v1/badges/18c67260237745b56cbe/maintainability)](https://codeclimate.com/github/animify/Minicons/maintainability)

## About Minicons

Minicons is an open-source SVG icon set drafted on an 24x24 sized grid aimed at unifying icon design across a website. Currently the first release is covering several categories of icons (86 total).

[View available icons](http://minicons.io)

## Table of contents

1. [Features](#features)
2. [Getting Minicons](#getting-minicons)
   1. [CDN](#cdn)
   2. [ZIP](#download-the-zip)
   3. [NPM](#using-npm)
3. [Quick start](#download-the-zip)
4. [API](#api)
   1. [Properties](#properties)
      - [`minicons.icons`](#miniconsicons)
      - [`minicons.config`](#miniconsconfig)
   2. [Methods](#methods)
      - [`minicons.find()`](#miniconsfindname)
      - [`minicons.create()`](#miniconscreatename-props)
      - [`minicons.swap()`](#miniconsswap)
5. [Contributing guidelines](#building)
5. [License](#license)


## Features

* Dead simple to set up
* Icon swap when an element is dynamically added
* Extensive, straight forward icon object API
* Over 80+ icons
* Uniform design
* Easily configurable

## Getting Minicons

### CDN

You can directly import minicons.js from the CDN:

```
https://unpkg.com/minicons@latest/dist/minicons.js
```

CDN links are also supported for older specified versions:

```
https://unpkg.com/minicons@_VERSION_/dist/minicons.js
```

### Download the ZIP

[Download](https://github.com/animify/Minicons/releases/latest) the latest release.

### Using NPM

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
<script src=https://unpkg.com/minicons@latest/dist/minicons.js"></script>
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

The `minicons` object is exposed upon including/importing the Minicons package into your ecosystem.

### Properties

#### `minicons.icons`

Contains an array of data about every single icon.


*Returns*: An array of icon objects

| Property      | Type   | Description             |
| ------------- | ------ | ----------------------- |
| `aliases`     | array  | List of alias names     |
| `content`     | string | SVG string of the icon  |
| `name   `     | string | The name of the icon    |

#### `minicons.config`

The config object Minicons was produced from.

*Returns*: Config object

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

### Methods

#### `minicons.find(name)`

Finds an icon by name or alias and returns the _icon object_.

| Parameter   | Type   | Description                                   |
| ----------- | ------ | --------------------------------------------- |
| `name`      | string | The name or alias of an icon e.g `add-circle` |

##### Usage

```JS
minicons.find('plus')
// {name: "add-circle", content: "<circle cx="12" cy="12" r="10" data-name="--Circle…><line x1="12" x2="12" y1="15.5" y2="8.5"></line>", aliases: Array(1)}
```

#### `minicons.create(name, props)`

Creates and returns an SVG icon by passing name and prop parameters.

*Returns*: SVG element.

| Parameter   | Type   | Description                                   |
| ----------- | ------ | --------------------------------------------- |
| `name`      | string | The name or alias of an icon e.g `add-circle` |
| `props`     | object | Objects of props that will be translated to attributes on the SVG element. e.g `{ stroke: 'red' }` will be converted to `stroke="red"` |

##### Usage

```JS
minicons.find('plus')
// {name: "add-circle", content: "<circle cx="12" cy="12" r="10" data-name="--Circle…><line x1="12" x2="12" y1="15.5" y2="8.5"></line>", aliases: Array(1)}
```

#### `minicons.swap()`

Swaps elements in the DOM with the `data-minicon` attribute into an SVG minicon. Only works in a browser environment.

##### Usage

```HTML
<i data-minicon="plus"></i>

<script>
      minicons.swap();
</script>
```

## Building

#### Clean, optimize and parse SVG icon files in the icons directory
```shell
$ ./build.sh icons
```

#### ...or to additionally package Minicons and run tests
```shell
$ ./build.sh
```

## Contributing guidelines

If you wish to contribute to the Minicons project please check out the [contributing guidelines](CODE_OF_CONDUCT.md).

## License

Minicons is licensed under the [MIT License](LICENSE)
