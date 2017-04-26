var urls = ["emptybeach.html","beachwithfpole.html"];

function randomWalk() {
    var url = urls[Math.floor(Math.random()*urls.length)];
    console.log(url);
    window.location = url; 
}