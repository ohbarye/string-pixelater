# String Pixelater

![image](https://user-images.githubusercontent.com/1811616/39958038-d70fbda2-5637-11e8-8b03-4b2d7bb21bf4.png)

This is a simple tool to pixelate any characters. `pixelate` means to "convert a character to a two-dimensional array" so that we can deal with the tabular data for several purposes. I actually compose this and [p5.js](https://p5js.org/) for painting generative art.

```javascript
> StringPixelater.pixelate('hello', {fontSize: 24})

[
  [0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0],
  [0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0]
]
```

## How does it work?

- It uses `<canvas>` element as a temporary _canvas_ to render characters.
- Then it extracts and parses rasterized image data.

## Usage

Just install and call `StringPixelater.pixelate` method with a string which you want to pixelate.

```shell
$ npm install --save string-pixelater
or
$ yarn add string-pixelater
```

#### Use as ES module

```javascript
import StringPixelater from 'string-pixelater';

const table = StringPixelater.pixelate('Hello, world');
```

#### Load through `<script>` tag

```html
<script type="text/javascript" src="path/to/dist/js/string-pixelater.js"></script>
<script type="text/javascript">
  var table = StringPixelater.pixelate('Hello, world');
</script>
```


## Pixelation Options

You can change `StringPixelater`'s behavior with the following options.

Parameter | Required | Type | Default | Description
--- | --- | --- | --- | ---
fontSize | false | `number` | `12` | Font size.
fontName | false | `string` | `'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic'` | Font name.
transpose | false | `boolean` | false | If it's `true`, it transposes a result tabular.

### `transpose`

If you use `p5.js` or something that has inverted axes, `transpose` option is quite convenient.

```javascript
> StringPixelater.pixelate('B', {fontSize: 24, transpose: false})
[
  [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0]
]

> StringPixelater.pixelate('B', {fontSize: 24, transpose: true})
[
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1],
  [1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1],
  [1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1],
  [1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1],
  [1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
```

The latter looks correct when it's rendered with simple and intuitive loops.

```javascript
// Note: This is just pseudo code!
function draw() {
  const imageData = StringPixelater.pixelate('B', {fontSize: 24, transpose: true})
  const pixelSize = 10;

  imageData.forEach(function(row, i) {
    row.forEach(function(cell, j) {
      if (cell === 1) {
        ellipse(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
      }
    })
  })
}
```

This results like below:

<img width="200" alt="2018-05-12 22 49 04" src="https://user-images.githubusercontent.com/1811616/39957847-bd96294a-5634-11e8-93be-9efaac493833.png">

## Examples with this library

It just uses `StringPixelater.pixelate('hello')`.

<img width="848" alt="2018-05-12 22 49 04" src="https://user-images.githubusercontent.com/1811616/39958008-34941f78-5637-11e8-8ec9-271d87e58f76.png">

We can get pixelated emoji as like `StringPixelater.pixelate('🐈')`.

<img width="597" alt="2018-05-12 22 52 36" src="https://user-images.githubusercontent.com/1811616/39958009-34b9721e-5637-11e8-80c2-42b5e6661e23.png">

