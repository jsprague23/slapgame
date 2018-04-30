function Item(name,modifier,description){
    this.name=name;
    this.modifier=modifier;
    this.description=description;
    
}

var items = {
    
    mittens:new Item("Tire Rotation",3,"Get souped up"),
    oilChange:new Item("oil change",10, "Restores health by 10"),
    replaceArm:new Item("replace arm", 100, "Completely resotores health"),
}    


var rocky ={
    health : 100,
    named: "Robocop",
    hits: 0,
    items: [],
}


function giveMittens(){
    rocky.items.push(tireRotation)
}

function giveOilChange(){
    rocky.items.push(oilChange)
}

function giveReplaceArm()
{
    rocky.items.push(replaceArm)
}
// function addMods(){
// for (let i = 0; i < items.length; i++) {
//     const element = items[i];

// // }work on me
    
// }

function slap(){
    rocky.health--
    //alert(health);
    update()
    damage()
}

function damage(){
    rocky.hits++
}

function update(){
    //goes to html . gets the element with id 'health' . display health value
    document.getElementById("health").innerText=rocky.health
    document.getElementById("named").innerText=rocky.named
    document.getElementById("hits").innerText=rocky.hits
}
    
update();

function kick() {
    rocky.health-=5
    update()
    damage()
}

function anotherRock(){
    rocky.health-=10
    update()
    damage()
}
function brassKnuckles(){
    rocky.health-=50
    update()
    damage()
}

function feather(){
    rocky.health-=0.25
    update()
    damage()
}

function tireRotation(){
    console.log("tireRotation")
    rocky.health+=3
    update()
}

function oilChange(){
    rocky.health+=10
    update()
}

function replaceArm(){
    console.log("replaceArm")
    rocky.health=100
    update()
}