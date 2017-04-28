var urls = ["emptybeach.html","beachwithfpole.html","died.html"];

function randomWalk() {
    var url = urls[Math.floor(Math.random()*urls.length)];
    console.log(url);
    window.location = url; 
}


var fishurls = ["fpolecatch.html", "fpolenocatch.html"];

function randomCatch() {
    var urlf = fishurls[Math.floor(Math.random()*fishurls.length)];
    window.location = urlf;
}

