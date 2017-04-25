var places = ['emptybeach.html', 'beachwithfpole.html'];
function randomWalk() {
    var r = Math.floor(Math.random(0,places.length));
    goto (places[r]);
}