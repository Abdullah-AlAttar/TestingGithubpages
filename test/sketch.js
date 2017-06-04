var angle;

var slider;
var sliderX = 0;
var inc;
var tree = [];
function setup() {
  inc = true;
  angle = PI / 4;
  createCanvas(600, 600);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  var root = new Branch(a, b);
  tree[0] = root;
  // var newBranch=root.branchRight();
  // tree[1]=newBranch;
  // tree[2]=root.branchLeft();
  // for (var i = 1; i < 10; i += 2) {
  //   tree[i] = tree[i-1].branchLeft();
  //   tree[i+1] = tree[i-1].branchRight();
  // }
}
function mousePressed() {
  for (var i = tree.length - 1; i >= 0; --i) {
    if (!tree[i].drawn) {
      tree.push(tree[i].branchLeft());
      tree.push(tree[i].branchRight());
    }
    tree[i].drawn = true;
  }
}
var rColor = 0;
function draw() {
  var millisecond = millis();
 
  background(23);

  angle = slider.value();
  for (var i = 0; i < tree.length; ++i)
  {
    tree[i].show();
    tree[i].wigglewiggle();
  }

  // slider.value(sliderX);

  // if(sliderX>TWO_PI)
  //   inc=false;
  // if(sliderX<0)
  //   inc=true;
  // if (inc)
  //   sliderX += 0.01;
  // else
  //   sliderX -= 0.01;
  // var len = 150;
  // rColor=map(sliderX,TWO_PI,PI/4,0,255);
  // stroke(rColor,rColor,255-rColor);
  // translate(width / 2, height);
  // branch(len);
}
function branch(len) {

  line(0, 0, 0, - len);
  translate(0, - len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.7);
    pop();
    push();
    rotate(- angle);
    branch(len * 0.6);
    pop();
  }

}