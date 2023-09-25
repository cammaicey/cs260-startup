# HTML Media Elements
- HTML elements that represent media include
    - `img`
    - `audio`
    - `video`
        - these three, simple references to external files
    - `svg`
    - `canvas`
        - both contain code to render a visual image, can even be animated

## External Media
- media tags that reference external media all take a URL as an attribute
- represented by the URL can either be a relative path or full path
    - full path includes the protocol, domain name, and path to the file
    `https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg`
- relative path references a file that is served from the same location as the HTML page
- make the path as relative as possible so that you can move your code around without having to actually adjust all of the external page references

## Images
- include an image in your content you use the `img` elmt
- specify the source `src`
- specify `alt` attr
```
<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
```

## Audio
- use `audio`
- specify `src`
- can incule `controls`
    - want user to be able to control audio playback
    - if you don't do this ther is no visual representation
- `autoplay` starts audio as soon as audio file has loaded
- `loop` keeps the audio playing
```
<audio controls src="testAudio.mp3"></audio>
```

## Video
- use `video`
- specify `src`
- like audio you can use `controls` or `autoplay`
    - Note that you may need to include the `crossorigin="anonymous"` attribute if you are requesting files from a different domain than the one serving your content
```
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```

## Internal Media
- `svg` and `canvas` allow you to create images directly in the HTML

## Scaleable Vector Graphics (SVG)
- extremely powerful and widely supported way to render graphics inline
- SVG graphic that draws a black border and a red circle
```
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>
```

## Canvas
- introduced to HTML in order to facilitate 2D drawing and animation
- HTML for the canvas element is fairly simple, but actually drawing on the canvas requires JavaScript support
- red dot example
```
<canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000"></canvas>
<script>
  const ctx = document.getElementById('canvasDemo').getContext('2d');
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.fill();
  ctx.stroke();
</script>
```