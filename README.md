# Repro: takumi ignores `devicePixelRatio` for GIFs and other animated images

Reproduction showing [takumi](https://github.com/kane50613/takumi) 2.20.0 drawing a GIF at its CSS size in device pixels, without scaling it by `devicePixelRatio`.
At a `devicePixelRatio` of 2, it shrinks into the top-left quarter of its box.
The same image as a PNG fills its box.

[`dot.png`](./dot.png) and [`dot.gif`](./dot.gif) are the same 20x20 white image with a 4x4 red square at (8, 8), made with:

```shell
magick -size 20x20 xc:white -fill red -draw "rectangle 8,8 11,11" -strip -write dot.png dot.gif
```

[`repro.mjs`](./repro.mjs) renders each as an `image` node at device pixel ratios of 1 and 2, then logs where the red square lands, in CSS pixels.

## Setup

```shell
npm install
```

## Command Outputs

Versions: `@takumi-rs/core@2.20.0`, Node.js 24.15.0, macOS arm64.

### `npm run repro`

```plaintext
dot.png at 1x: red square 4x4 at (8, 8)
dot.png at 2x: red square 4x4 at (8, 8)
dot.gif at 1x: red square 4x4 at (8, 8)
dot.gif at 2x: red square 2x2 at (4, 4)
```

## Expected

Every render draws the red square 4x4 at (8, 8).

## Actual

At 2x, the GIF shrinks into the top-left quarter of its box, and the rest of the box repeats the GIF's right column and bottom row of pixels, which shows as streaks for GIFs whose edges aren't one solid color.

GIFs draw this way even with a single frame, like `dot.gif`.
Animated PNGs and WebPs do too, but static ones don't.
[#2436](https://github.com/kane50613/takumi/issues/2436) was a similar bug for inline SVGs, which drew at `devicePixelRatio` times their size.

This came up rendering slides that contain GIFs at a `devicePixelRatio` of 2.
