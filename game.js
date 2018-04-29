function Robot(name,modifier,description){
    this.name=name;
    this.modifier=modifier;
    this.description=description;
}

var items = {
    // arm:new Item("armReplace",0.3,"This changes the broken arm to a shiny new one.")
    mittens: new Item("mittens",0.3,"Reduces the damage from punching")
}    



var health=Robot(100.00);
var named=Robot("Robot");
var hits=Robot(0);

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
    document.getElementById("health").innerText=health
    document.getElementById("named").innerText=named
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
    health=health-50
    update()
    damage()
}

function feather(){
    health=health-0.25
    update()
    damage()
}
// function armReplace(){
//     health=health //health regen
//     update()
// }

function mittens(){
    health+=health*0.3 //damage reducer
    update()
}

function oilChange(){
    health=health+10
    update()
}