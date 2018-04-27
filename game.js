var health=100;
var name=" Rocky ";
var hits=0;
function slap(){
    health--
    //alert(health);
    update()
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
}

function anotherRock(){
    health=health-10
    update()
}
function brassKnuckles(){
    health=health-100
    update()
}