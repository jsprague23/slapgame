var health=100.00;
var name=" Rocky ";
var hits=0;
function slap(){
    health--
    //alert(health);
    update()
    damage()
}

function damage(){
    hits++
}

function update(){
    //goes to html . gets the element with id 'health' . display health value
    document.getElementById("health").innerText = health
    document.getElementById("name").innerText=name
    document.getElementById("hits").innerText=hits

}
update();

function kick() {
    health=health-5
    update()
    damage()
}

function anotherRock(){
    health=health-10
    update()
    damage()
}
function brassKnuckles(){
    health=health-100
    update()
    damage()
}

function feather(){
    health=health-0.25
    update()
    damage()
}