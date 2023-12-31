noseX = 0; 
noseY = 0; 
mustache_filter = "false";
cat_filter = "false";
star_filter = "false";
wig_filter = "false";
function preload() {
    mustache = loadImage("mustache.png"); 
    cat = loadImage("cat.png"); 
    starfreckles = loadImage("starfreckles.png"); 
    wig = loadImage("wig.png")
}
function setup() {
    canvas = createCanvas(400,300);
    canvas.center(); 
    video = createCapture(VIDEO); 
    video.size(400,300);
    video.hide(); 
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 400, 300);
    if(mustache_filter == "true") {
    image(mustache, noseX-25, noseY-5, 50, 40);
    };
    if(cat_filter == "true") {
    image(cat, noseX-60, noseY-75, 130, 95); 
    }
    if(star_filter == "true") {
    image(starfreckles, noseX-40, noseY-20, 90, 30); 
    }
    if(wig_filter == "true") {
    image(wig, noseX-110, noseY-115, 220, 300);        
    }
}

function takeSnapshot() {
    save("FilterWebApp"); 
}

function modelLoaded() {
    console.log("PoseNet is Initialized"); 
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results); 
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "Nose Y = " + noseY); 
    }
}
function activateMustache() {
   mustache_filter = "true";  
}
function activateCat() {
   cat_filter = "true";   
}
function activateStar() {
    star_filter = "true"; 
}
function activateWig() {
    wig_filter = "true"; 
}
function reset() {
    mustache_filter = "false";
    cat_filter = "false";
    star_filter = "false";
    wig_filter = "false";
}