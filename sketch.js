var video;
var vScale = 14;
var slider;
var anotherSlider;
function setup() {
  createCanvas(640, 480);
  //pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  slider = createSlider(12, 32, vScale, 0.2);
  anotherSlider = createSlider(1, 10, 3);
  //video.hide();
}

function draw() {
  vScale = slider.value();
  video.size(width / vScale, height / vScale);
  background(23);
  loadPixels();

  video.loadPixels();
  for (var y = 0; y < video.height; ++y) {
    for (var x = 0; x < video.width; ++x) {
      var index = (x + y * video.width) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
     // noStroke();  //try commenting this 
      fill(bright, bright, 100);
      //try rect or ellipse
     // rect(x * vScale, y * vScale, w * anotherSlider.value(), w * anotherSlider.value());
      ellipse(x * vScale, y * vScale, w * anotherSlider.value());
      arc(a, b, c, d, start, stop, [mode])
     // line(x*vScale, y*vScale, x +1, y +1);
    }
  }
}