let skillValues = {};

function allocatePoints(){

    let skills = {
        "charisma":2,
        "darkvision":"true",
        "strenght":0,
        "dexterity":0,
        "intelligence":0,
        "constitution":0
    }

    let chosenSkills = [];

    var checkBoxes = document.getElementsByClassName("checks");

    for (var i=0, max=checkBoxes.length; i < max; i++) {
        if(checkBoxes[i].checked){
            chosenSkills.push(checkBoxes[i].value);
        }
    }

    skills[chosenSkills[0]] += 1;
    skills[chosenSkills[1]] += 1;

    console.log(skills);
}



/*
The val1 and 2 are paramaters that will be increased by as much as
the value of the incr1 and 2 parameters, when that's done
we use the val1 and 2 to display the sum to the user
*/
function updateRace(givenRace, stat1, stat2, val1, val2, incr1, incr2){
    let listStr1;
    let listStr2;
    let listStr3;

    let value1;
    let value2;
    let value3;

    race = `${givenRace}`;
    val1 += incr1;
    val2 += incr2;

    listStr1 = document.getElementById(`${stat1}`);
    value1 = document.createTextNode(` ${val1}`);

    listStr2 = document.getElementById(`${stat2}`);
    value2 = document.createTextNode(`${val2}`);

    listStr3 = document.getElementById("race");
    value3 = document.createTextNode(` ${race}`);

    listStr1.appendChild(value1);
    listStr2.appendChild(value2);
    listStr3.appendChild(value3);
    
    listStr1.style.color="#3fd609";
    listStr2.style.color="#3fd609";
    listStr3.style.color="#3fd609";


    Object.assign(skillValues, 
    {"race": `${givenRace}`
    ,"stat1":`${stat1}`,
    "stat2":`${stat2}`,
    "value1":`${val1}`,
    "value2":`${val2}`});
    console.log(skillValues);
}


function msg(givenRace){

    document.getElementById("strenght").innerText="Stength:";
    document.getElementById("charisma").innerText="Charisma:";
    document.getElementById("dexterity").innerText="Dexterity:";
    document.getElementById("intelligence").innerText="Intelligence:";
    document.getElementById("constitution").innerText="Constitution:";
    document.getElementById("darkvision").innerText="Dark Vision:";
    document.getElementById("race").innerText="Race:";

    document.getElementById("strenght").style.color="white";
    document.getElementById("charisma").style.color="white";
    document.getElementById("dexterity").style.color="white";
    document.getElementById("intelligence").style.color="white";
    document.getElementById("constitution").style.color="white";
    document.getElementById("darkvision").style.color="white";
    document.getElementById("race").style.color="white";

    switch(givenRace){
        case "dragonborn":
            updateRace("dragonborn","strenght","charisma",0,0,2,1);
            break;
        case "dwarf":
            updateRace("dwarf","constitution","darkvision",0,"",2,"true");
            break;
        case "elf":
            updateRace("elf","dexterity","darkvision",0,"",2,"true");
            break;
        case "gnome":
            updateRace("gnome","intelligence","darkvision",0,"",2,"true");
            break;
    }

}